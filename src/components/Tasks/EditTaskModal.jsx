import React from "react";
import { Modal, Label } from "flowbite-react";
import { useState, useEffect } from "react";
import axios from "axios";

const EditTaskModal = ({ isEditTaskModal, onClose, task, updateTask }) => {
  const [updatingTask, setUpdatingTask] = useState(null);
  const [isCompleted, setIsCompleted] = useState(false);

  const [isInitialLoad, setIsInitialLoad] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      id: task?._id,
      completed: isCompleted,
    };

    axios.patch("http://localhost:3500/notes",data).then(res => {
      if(res.data.result){
        updateTask();
        onClose();
      }else{
        console.log(res.data.message)
      }
    })

  };

  useEffect(() => {
    if (!isInitialLoad && task) {
      setUpdatingTask(task);
      setIsCompleted(task?.completed);
      setIsInitialLoad(true);
    }
  });

  return (
    <Modal show={isEditTaskModal} size="5xl" popup={true} onClose={onClose}>
      <Modal.Header />
      <Modal.Body>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8"
        >
          <h3 className="text-xl text-[#303972] font-semibold dark:text-white">
            Edit task
          </h3>

          <div className="w-full flex space-x-5">
            <div className="w-full">
              <div className="mb-2 block">
                <Label htmlFor="Task Status" value="Task Status" />
              </div>
              <select
                name="completed"
                value={isCompleted}
                onChange={(e) => setIsCompleted(e.target.value)}
                class="w-full py-[10px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required={true}
              >
                <option selected disabled>
                  -- Select --
                </option>
                <option value={false}>In Progress</option>
                <option value={true}>Completed</option>
              </select>
            </div>
          </div>

          <div className="w-full flex space-x-5">
            <div className="w-full flex justify-end items-end space-x-3">
              <button
                type="submit"
                className="border-2 px-5 py-3 rounded-3xl transition ease-in-out bg-login-color border-login-color hover:bg-[#5e56b8] text-white"
              >
                Update
              </button>
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default EditTaskModal;
