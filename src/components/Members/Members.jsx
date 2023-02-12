import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { Spinner, Button } from "flowbite-react";
import AddMemberModal from "./AddMemberModal";
import DeleteMemberModal from "./DeleteMemberModal";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Header from "../Dashboard/Header";
import MemberItem from "./MemberItem";
import SuccessToast from "../Toast/SuccessToast";
import { useSelector } from "react-redux";
import { useReactToPrint } from "react-to-print";
import { ComponentToPrint } from "../PrintUtils/ComponentToPrint";
import { DocumentIcon } from "@heroicons/react/24/solid";

const Members = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [userUpdateCount, setUserUpdateCount] = useState(0);
  const [deleteMemberId, setDeleteMemberId] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [memberRoleFilter, setMemberRoleFilter] = useState("");
  const role = useSelector((state) => state.auth.role);

  const [members, setMembers] = useState([]);
  const [previousMembers, setPreviousMembers] = useState([]);

  const handleEditUserModal = (value) => {
    setUserUpdateCount(userUpdateCount + value);
  };

  const handleDeleteModal = (id) => {
    setDeleteMemberId(id);
    setIsDeleteModalOpen(true);
  };

  useEffect(() => {
    axios.get("http://localhost:3500/users").then((res) => {
      setIsLoading(false);
      setMembers(res.data);
      setPreviousMembers(res.data);
    });
  }, [isAddModalOpen, isDeleteModalOpen, userUpdateCount]);

  useEffect(() => {
    if (members && previousMembers) {
      if (memberRoleFilter !== "All") {
        setMembers([
          ...previousMembers.filter(
            (member) => member.roles === memberRoleFilter
          ),
        ]);
      } else {
        setMembers([...previousMembers]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [memberRoleFilter]);

  useEffect(() => {
    if (members && searchText.length > 0) {
      setMembers(
        members.filter((member) =>
          member.email.toLowerCase().includes(searchText.toLowerCase())
        )
      );
    }

    if (searchText.length === 0) {
      axios.get("http://localhost:3500/users").then((res) => {
        setMembers(res.data);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText, isAddModalOpen, isDeleteModalOpen, userUpdateCount]);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "MembersList",
    // onAfterPrint:
  });

  return (
    <div className="w-full flex flex-col justify-start items-center h-screen bg-[#F3F4FF]">
      <SuccessToast description={toastMessage} isVisible={isToastVisible} />
      <div className="flex w-11/12 justify-between items-center mt-12">
        <h2 className="font-bold text-4xl leading-10 text-[#303972]">
          Members
        </h2>
        <Header />
      </div>

      <div className="flex w-11/12 justify-between items-center mt-10">
        <div>
          <div class="flex">
            <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              <MagnifyingGlassIcon className="h-5 w-5 text-[#A098AE]" />
            </span>
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              class="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="flex items-center justify-end space-x-5 w-full">
          <select
            name="project"
            onChange={(e) => setMemberRoleFilter(e.target.value)}
            class="w-3/12 py-[10px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required={true}
          >
            <option selected disabled>
              -- Filter by role --
            </option>
            <option value="All">All</option>
            <option value="Manager">Manager</option>
            <option value="Employee">Member</option>
            <option value="Admin">Admin</option>
          </select>
          {role !== "Employee" && (
            <div>
              <button
                onClick={() => setIsAddModalOpen(true)}
                type="button"
                class="text-white bg-login-color hover:bg-[#6760bf] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                New Member
              </button>
            </div>
          )}
          {role === "Manager" && (
            <div>
              <Button
                class="text-white bg-login-color hover:bg-[#6760bf] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-2 py-1 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                pill={true}
                onClick={handlePrint}
              >
                <DocumentIcon className="h-4 w-6" />
              </Button>
            </div>
          )}
        </div>
      </div>

      <div class="overflow-x-auto relative shadow-md sm:rounded-lg w-11/12 h-[60vh] mt-10">
        <table
          ref={componentRef}
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400 relative"
        >
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="bg-login-color sticky top-0">
              <th scope="col" class="p-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-all-search" class="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" class="py-3 px-6 text-white">
                User
              </th>
              <th scope="col" class="py-3 px-6 text-white">
                User Role
              </th>
              <th scope="col" class="py-3 px-6 text-white">
                Email
              </th>
              <th scope="col" class="py-3 px-6 text-white">
                Phone
              </th>
              <th scope="col" class="py-3 px-6 text-white">
                City
              </th>
              {role !== "Employee" && (
                <>
                  <th scope="col" class="py-3 px-6 text-white">
                    Active
                  </th>
                  <th scope="col" class="py-3 px-6 text-white">
                    Action
                  </th>
                </>
              )}
            </tr>
          </thead>
          {!isLoading ? (
            <>
              {members?.length > 0 ? (
                <tbody>
                  {members.map((member, index) => (
                    <MemberItem
                      updateUsers={handleEditUserModal}
                      key={index}
                      handleDeleteModal={handleDeleteModal}
                      member={member}
                    />
                  ))}
                </tbody>
              ) : (
                <tbody className="relative">
                  <div className="absolute top-[50px] bottom-0 left-[40%] right-0 m-auto">
                    Sorry there aren't any data
                  </div>
                </tbody>
              )}
            </>
          ) : (
            <tbody className="relative">
              <Spinner
                aria-label="data loading spinner"
                className="fill-login-color absolute top-[50px] bottom-0 left-0 right-0 m-auto"
                size="xl"
              />
            </tbody>
          )}
        </table>
      </div>
      <AddMemberModal
        isAddModalOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        setIsToastVisible={setIsToastVisible}
        setToastMessage={setToastMessage}
      />
      <DeleteMemberModal
        isDeleteModalOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        deleteMemberId={deleteMemberId}
      />
    </div>
  );
};

export default Members;
