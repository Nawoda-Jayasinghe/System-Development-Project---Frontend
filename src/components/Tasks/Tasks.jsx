import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useEffect, useState, useRef } from "react";
import { Spinner, Button } from "flowbite-react";
import axios from "axios";
import AddTaskModal from "./AddTaskModal";
import Header from "../Dashboard/Header";
import TaskItem from "./TaskItem";
import { useSelector } from "react-redux";
import SuccessToast from "../Toast/SuccessToast";
import jwt_decode from "jwt-decode";
import DeleteTaskModal from "./DeleteTaskModal";
import { DocumentIcon } from "@heroicons/react/24/solid";
import { useReactToPrint } from "react-to-print";

const Tasks = () => {
  const [tasks, setTasks] = useState(null);
  const [previousTasks, setPreviousTasks] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [updateTaskCount, setUpdateTaskCount] = useState(0);
  const token = useSelector((state) => state.auth.token);
  const role = useSelector((state) => state.auth.role);
  const decodedToken = jwt_decode(token);
  const [projects, setProjects] = useState([]);
  const [projectFilter, setProjectFilter] = useState("All");
  const [deleteTaskId, setDeleteTaskId] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState("All");

  useEffect(() => {
    axios
      .get("http://localhost:3500/projects/getProjectsForTasks")
      .then((res) => {
        if (res.data.result) {
          setProjects(res.data.projects);
        }
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `http://localhost:3500/notes/getMemberTasks/${decodedToken?.UserInfo.useerId}`
      )
      .then((res) => {
        setIsLoading(false);
        setTasks(res.data);
        setPreviousTasks(res.data);
      });
  }, [
    isAddModalOpen,
    decodedToken?.UserInfo.useerId,
    isDeleteModalOpen,
    updateTaskCount,
  ]);

  useEffect(() => {
    if (tasks && previousTasks) {
      if (projectFilter === "All") {
        setTasks([...previousTasks]);
      } else {
        setTasks([
          ...previousTasks.filter(
            (previousTask) => previousTask.project.title === projectFilter
          ),
        ]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectFilter]);

  useEffect(() => {
    console.log(statusFilter);
    if (tasks && previousTasks) {
      if (statusFilter === "All") {
        setTasks([...previousTasks]);
      } else {
        setTasks(
          statusFilter === "true"
            ? [
                ...previousTasks.filter(
                  (previousTask) => previousTask.completed === true
                ),
              ]
            : [
                ...previousTasks.filter(
                  (previousTask) => previousTask.completed === false
                ),
              ]
        );
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statusFilter]);

  useEffect(() => {
    if (tasks && searchText.length > 0) {
      console.log(tasks);
      setTasks(
        tasks.filter((taskItem) =>
          taskItem.task.toLowerCase().includes(searchText.toLowerCase())
        )
      );
    }

    if (searchText.length === 0) {
      axios
        .get(
          `http://localhost:3500/notes/getMemberTasks/${decodedToken?.UserInfo.useerId}`
        )
        .then((res) => {
          setTasks(res.data);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText, isAddModalOpen, updateTaskCount]);

  const handleDeleteModal = (id) => {
    setDeleteTaskId(id);
    setIsDeleteModalOpen(true);
  };

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "ProjectsList",
    // onAfterPrint:
  });

  return (
    <div className="w-full flex flex-col justify-start items-center h-screen bg-[#F3F4FF]">
      <SuccessToast description={toastMessage} isVisible={isToastVisible} />
      <div className="flex w-11/12 justify-between items-center mt-12">
        <h2 className="font-bold text-4xl leading-10 text-[#303972]">Tasks</h2>
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
            onChange={(e) => setStatusFilter(e.target.value)}
            class="w-3/12 py-[10px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          >
            <option selected disabled>
              -- Filter by status --
            </option>
            <option value="All">All</option>
            <option value="true">Completed</option>
            <option value="false">In progress</option>
          </select>
          <select
            name="project"
            onChange={(e) => setProjectFilter(e.target.value)}
            class="w-3/12 py-[10px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          >
            <option selected disabled>
              -- Filter by title --
            </option>
            <option value="All">All</option>
            {projects.map((project) => (
              <option value={project.title}>{project.title}</option>
            ))}
          </select>
          {role !== "Employee" && (
            <div>
              <button
                onClick={() => setIsAddModalOpen(true)}
                type="button"
                class="text-white bg-login-color hover:bg-[#6760bf] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                New Task
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
                Project
              </th>
              <th scope="col" class="py-3 px-6 text-white">
                Title
              </th>
              <th scope="col" class="py-3 px-6 text-white">
                Description
              </th>
              <th scope="col" class="py-3 px-6 text-white">
                Assigned Date
              </th>
              <th scope="col" class="py-3 px-6 text-white">
                Task completion
              </th>
              <th scope="col" class="py-3 px-6 text-white">
                Action
              </th>
            </tr>
          </thead>
          {!isLoading ? (
            <>
              {tasks?.length > 0 ? (
                <tbody>
                  {tasks?.map((task, index) => (
                    <TaskItem
                      key={index}
                      task={task}
                      handleDeleteModal={handleDeleteModal}
                      updateTask={() => setUpdateTaskCount(updateTaskCount + 1)}
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
      <AddTaskModal
        isAddModalOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        setIsToastVisible={setIsToastVisible}
        setToastMessage={setToastMessage}
      />
      <DeleteTaskModal
        isDeleteModalOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        deleteTaskId={deleteTaskId}
      />
    </div>
  );
};

export default Tasks;
