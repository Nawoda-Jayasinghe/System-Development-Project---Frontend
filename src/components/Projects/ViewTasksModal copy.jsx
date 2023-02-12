import React from "react";
import { Modal } from "flowbite-react";
import { useEffect, useState } from "react";
import axios from "axios";

const ViewTasksModal = ({ isViewTasksOpen, onClose, project }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3500/notes/${project?._id}`).then((res) => {
      if (res.data.result) {
        setTasks(res.data.notes);
      }
    });
  }, []);

  return (
    <Modal show={isViewTasksOpen} size="5xl" popup={true} onClose={onClose}>
      <Modal.Header />
      <Modal.Body>
        <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
          <h3 className="text-xl text-[#303972] font-semibold dark:text-white">
            View Tasks
          </h3>

          <div className="w-full flex flex-col space-y-2">
            <div className="flex w-full justify-center items-center">
              <div className="text-heading-one w-full flex justify-center items-center font-bold">
                Task Id
              </div>
              <div className="text-heading-one w-full flex justify-center items-center font-bold">
                Task Name
              </div>
              <div className="text-heading-one w-full flex justify-center items-center font-bold">
                Task Description
              </div>
              <div className="text-heading-one w-full flex justify-center items-center font-bold">
                Assigned Member
              </div>
              <div className="text-heading-one w-full flex justify-center items-center font-bold">
                Status
              </div>
            </div>

            {tasks.length > 0 ? (
              tasks.map((task) => (
                <>
                  <div className="flex w-full hover:bg-slate-200 py-2 rounded-xl cursor-pointer justify-center items-center">
                    <div className="text-heading-one w-full flex justify-center items-center font-normal">
                      {task?.ticket}
                    </div>
                    <div className="w-10/12 text-heading-one text-center flex justify-center items-center font-normal">
                      {task?.task}
                    </div>
                    <div className="w-10/12 text-heading-one text-center flex justify-center items-center font-normal">
                      {task?.description}
                    </div>
                    <div className="text-heading-one w-full flex flex-col justify-center items-center font-normal">
                      {task?.user?.map((u, index) => (
                        <div className="">
                          {u?.firstName + " " + u?.lastName}
                          {task.user.length > 1 &&
                            task.user.length - 1 !== index &&
                            ","}
                        </div>
                      ))}
                    </div>
                    <div className="text-heading-one w-full flex justify-center items-center font-normal">
                      {task?.completed ? "Completed" : "In Progress"}
                    </div>
                  </div>
                </>
              ))
            ) : (
              <>
                <div className="flex w-full hover:bg-slate-200 py-2 rounded-xl cursor-pointer justify-center items-center">
                  <div className="text-heading-one w-full flex justify-center items-center font-normal">
                    No Tasks Available
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="w-full flex space-x-5">
            <div className="w-full flex justify-end items-end space-x-3">
              <button
                onClick={onClose}
                className="border-2 px-5 py-3 rounded-3xl transition ease-in-out bg-login-color border-login-color hover:bg-[#5e56b8] text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ViewTasksModal;
