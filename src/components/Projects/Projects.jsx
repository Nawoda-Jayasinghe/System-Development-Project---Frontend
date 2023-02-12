import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useEffect, useState, useRef } from "react";
import { Spinner, Button } from "flowbite-react";
import axios from "axios";
import Header from "../Dashboard/Header";
import AddProjectModal from "./AddProjectModal";
import ProjectItem from "./ProjectItem";
import SuccessToast from "../Toast/SuccessToast";
import { useSelector } from "react-redux";
import DeleteProjectModal from "./DeleteProjectModal";
import { DocumentIcon } from "@heroicons/react/24/solid";
import { useReactToPrint } from "react-to-print";

const Projects = () => {
  const [projects, setProjects] = useState(null);
  const [projectsPrevious, setProjectsPrevious] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [projectUpdateCount, setProjectUpdateCount] = useState(0);
  const [isStartDateChecked, setIsStartDateChecked] = useState(false);
  const [isEndingDateChecked, setIsEndingDateChecked] = useState(false);
  const [deleteProjectId, setProjectId] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const role = useSelector((state) => state.auth.role);

  useEffect(() => {
    axios.get("http://localhost:3500/projects").then((res) => {
      setIsLoading(false);
      setProjects(res.data);
      setProjectsPrevious(res.data);
    });
  }, [isAddModalOpen, isDeleteModalOpen, projectUpdateCount]);

  useEffect(() => {
    if (projects && searchText.length > 0) {
      setProjects(
        projects.filter((project) =>
          project.title.toLowerCase().includes(searchText.toLowerCase())
        )
      );
    }

    if (searchText.length === 0) {
      axios.get("http://localhost:3500/projects").then((res) => {
        setProjects(res.data);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText, isDeleteModalOpen, isAddModalOpen, projectUpdateCount]);

  useEffect(() => {
    if (isStartDateChecked) {
      setProjects([
        ...projects
          .sort((a, b) => new Date(a.startingDate) - new Date(b.startingDate))
          .reverse(),
      ]);
    } else {
      if (projectsPrevious) {
        setProjects([...projectsPrevious]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isStartDateChecked]);

  useEffect(() => {
    if (isEndingDateChecked) {
      setProjects([
        ...projects
          .sort((a, b) => new Date(a.endingDate) - new Date(b.endingDate))
          .reverse(),
      ]);
    } else {
      if (projectsPrevious) {
        setProjects([...projectsPrevious]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEndingDateChecked]);

  const addNewProjecttoTheArray = (task) => {
    console.log(task);
  };

  const handleDeleteModal = (id) => {
    setProjectId(id);
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
        <h2 className="font-bold text-4xl leading-10 text-[#303972]">
          Projects
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
          <label class="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              class="sr-only peer"
              checked={isStartDateChecked}
              onChange={() => setIsStartDateChecked(!isStartDateChecked)}
            />
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-login-color"></div>
            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Sort by start date
            </span>
          </label>
          <label class="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              class="sr-only peer"
              checked={isEndingDateChecked}
              onChange={() => setIsEndingDateChecked(!isEndingDateChecked)}
            />
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-login-color"></div>
            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Sort by end date
            </span>
          </label>
          {role !== "Employee" && (
            <div>
              <button
                onClick={() => setIsAddModalOpen(true)}
                type="button"
                class="text-white bg-login-color hover:bg-[#6760bf] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                New Project
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
          <thead class="relative text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="bg-login-color sticky top-0 z-50">
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
                Project name
              </th>
              <th scope="col" class="py-3 px-6 text-white">
                Project Category
              </th>
              <th scope="col" class="py-3 px-6 text-white">
                Start Date
              </th>
              <th scope="col" class="py-3 px-6 text-white">
                End Date
              </th>
              <th scope="col" class="py-3 px-6 text-white">
                Budget
              </th>
              <th scope="col" class="py-3 px-6 text-white">
                Task completion
              </th>
              <th scope="col" class="py-3 px-6 text-white">
                status
              </th>
              <th scope="col" class="py-3 px-6 text-white">
                Action
              </th>
            </tr>
          </thead>
          {!isLoading ? (
            <>
              {projects?.length > 0 ? (
                <tbody>
                  {projects?.map((project, index) => (
                    <ProjectItem
                      key={index}
                      project={project}
                      handleDeleteModal={handleDeleteModal}
                      updateProjectCounter={() =>
                        setProjectUpdateCount(projectUpdateCount + 1)
                      }
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
      <AddProjectModal
        isAddModalOpen={isAddModalOpen}
        addNewProject={() => addNewProjecttoTheArray}
        onClose={() => setIsAddModalOpen(false)}
        setIsToastVisible={setIsToastVisible}
        setToastMessage={setToastMessage}
      />
      <DeleteProjectModal
        isDeleteModalOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        deleteProjectId={deleteProjectId}
      />
    </div>
  );
};

export default Projects;
