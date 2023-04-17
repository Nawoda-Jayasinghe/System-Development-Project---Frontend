import React, { useState } from "react";
import EditProjectModal from "./EditProjectModal";
import ViewTasksModal from "./ViewTasksModal copy";
import { useSelector } from "react-redux";

const ProjectItem = ({ project, handleDeleteModal, updateProjectCounter }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewTasksOpen, setIsViewTasksOpen] = useState(false);
  const role = useSelector((state) => state.auth.role);

  return (
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td class="p-4 w-4">
        <div class="flex items-center">
          <input
            id="checkbox-table-search-3"
            type="checkbox"
            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label for="checkbox-table-search-3" class="sr-only">
            checkbox
          </label>
        </div>
      </td>
      <th
        scope="row"
        class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {project.title}
      </th>
      <td class="py-4 px-6">{project.projectCategory}</td>
      <td class="py-4 px-6">{project.startingDate}</td>
      <td class="py-4 px-6">{project.endingDate}</td>
      <td class="py-4 px-6">Rs.{project.budget}</td>
      <td class="py-4 px-6">
        <div
          className="radial-progress text-login-color"
          style={{
            "--value": project.percentage,
            "--size": "3rem",
            "--thickness": "5px",
          }}
        >
          {project.percentage}%
        </div>
      </td>

      <td class="py-4 px-6">

        {project.completed ? (
          <div className="bg-login-color text-center px-3 py-2 rounded-3xl text-white text-xs">
            <h6>Done</h6>
          </div>
        ) : (
          <div className="bg-[#FB7D5B] px-3 py-2 rounded-3xl text-white text-xs">
            <h6>In Progress</h6>
          </div>
        )}
      </td>
      <td class="py-4 px-6">
        <div className="flex space-x-3">
        <button
            onClick={() => {
              setIsViewTasksOpen(true);
            }}
            class="font-medium w-20 text-blue-600 dark:text-blue-500 hover:underline"
          >
            View Tasks
          </button>
          {role !== "Employee" && (
            <div>
              <button className="px-3 "
              onClick={() => {
                setIsEditModalOpen(true);
              }}
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Edit
            </button>
            <button
            onClick={() => handleDeleteModal(project?._id)}
            class="font-medium text-red-600 dark:text-red-500 hover:underline"
          >
            Remove
          </button>
            </div>
          )}
          
          
        </div>
      </td>
      <EditProjectModal
        updateProjectCounter={updateProjectCounter}
        isEditModalOpen={isEditModalOpen}
        projectDetails={project}
        onClose={() => setIsEditModalOpen(false)}
      />
      <ViewTasksModal
        project={project}
        isViewTasksOpen={isViewTasksOpen}
        onClose={() => setIsViewTasksOpen(false)}
      />
    </tr>
  );
};

export default ProjectItem;
