import React, { useState } from "react";
import EditTaskModal from "./EditTaskModal";

const TaskItem = ({ task, handleDeleteModal, updateTask }) => {
  const [isEditTaskModal, setIsEditTaskModal] = useState(false);

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
        {task?.user?.map((u) => (
          <p>{u?.firstName + " " + u?.lastName}</p>
        ))}
      </th>

      <td class="py-4 px-6">{task?.project.title}</td>
      <td class="py-4 px-6">{task?.task}</td>
      <td class="py-4 px-6">{task?.description}</td>
      <td class="py-4 px-6">{task?.createdAt.slice(0, 10)}</td>
      <td class="py-4 px-6">
        {task.completed ? (
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
            onClick={() => setIsEditTaskModal(true)}
            class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Edit
          </button>
          <button
            onClick={() => handleDeleteModal(task?._id)}
            class="font-medium text-red-600 dark:text-red-500 hover:underline"
          >
            Remove
          </button>
        </div>
      </td>
      <EditTaskModal
        updateTask={updateTask}
        isEditTaskModal={isEditTaskModal}
        task={task}
        onClose={() => setIsEditTaskModal(false)}
      />
    </tr>
  );
};

export default TaskItem;
