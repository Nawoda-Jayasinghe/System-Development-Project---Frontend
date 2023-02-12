import React from "react";
import { Modal, Label, TextInput } from "flowbite-react";
import { useState, useEffect } from "react";
import axios from "axios";

const EditProjectModal = ({
  isEditModalOpen,
  projectDetails,
  onClose,
  updateProjectCounter,
}) => {
  const [formInfo, setFormInfo] = useState({
    title: "",
    budget: "",
    description: "",
    startingDate: "",
    endingDate: "",
    projectCategory: "",
    completed: false
  });

  const [isInitialLoad, setIsInitialLoad] = useState(false);

  useEffect(() => {
    if (!isInitialLoad && projectDetails) {
      setFormInfo(projectDetails);
      setIsInitialLoad(true);
    }
  });

  const handleChange = (event) => {
    setFormInfo({ ...formInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //setFileToBase();
    console.log(formInfo);

    axios.patch("http://localhost:3500/projects", formInfo).then((res) => {
      if (res.data.result) {
        updateProjectCounter();
        onClose();
      } else {
        console.log(res.data.message);
      }
    });
  };

  const closeModal = () => {
    setIsInitialLoad(false);
    onClose();
  };

  return (
    <Modal show={isEditModalOpen} size="5xl" popup={true} onClose={closeModal}>
      <Modal.Header />
      <Modal.Body>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8"
        >
          <h3 className="text-xl text-[#303972] font-semibold dark:text-white">
            Edit project
          </h3>
          <div className="w-full flex space-x-5">
            <div className="w-1/2">
              <div className="mb-2 block">
                <Label htmlFor="Project Name" value="Project Name" />
              </div>
              <TextInput
                onChange={handleChange}
                placeholder="Project Name"
                name="title"
                value={formInfo.title}
                required={true}
              />
            </div>
            <div className="w-1/2">
              <div className="mb-2 block">
                <Label htmlFor="Estimated Budget" value="Estimated Budget" />
              </div>
              <TextInput
                onChange={handleChange}
                placeholder="Estimated Budget"
                name="budget"
                value={formInfo.budget}
                required={true}
              />
            </div>
          </div>

          <div className="w-full flex space-x-5">
            <div className="w-1/3">
              <div className="mb-2 block">
                <Label htmlFor="Starting Date" value="Starting Date" />
              </div>
              <TextInput
                onChange={handleChange}
                placeholder="Starting Date"
                type="date"
                name="startingDate"
                value={formInfo.startingDate}
                required={true}
              />
            </div>
            <div className="w-1/3">
              <div className="mb-2 block">
                <Label htmlFor="Ending Date" value="Ending Date" />
              </div>
              <TextInput
                onChange={handleChange}
                type="date"
                value={formInfo.endingDate}
                placeholder="Ending Date"
                name="endingDate"
                required={true}
              />
            </div>
            <div className="w-1/3">
              <div className="mb-2 block">
                <Label htmlFor="Project Category" value="Project Category" />
              </div>
              <select
                name="projectCategory"
                onChange={handleChange}
                value={formInfo.projectCategory}
                class="w-full py-[10px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required={true}
              >
                <option selected disabled>
                  -- Select --
                </option>
                <option value="Educational">Educational</option>
                <option value="Health">Health</option>
                <option value="Eldercare">Eldercare</option>
                <option value="Environmental">Environmental</option>
              </select>
            </div>
          </div>

          <div className="w-full flex space-x-5">
            <div className="w-full">
              <div className="mb-2 block">
                <Label htmlFor="Task Status" value="Task Status" />
              </div>
              <select
                name="completed"
                value={formInfo.completed}
                onChange={handleChange}
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
            <div className="w-full">
              <div className="mb-2 block">
                <Label
                  htmlFor="Project Description"
                  value="Project Description"
                />
              </div>
              <div className="w-full flex space-x-3">
                <div className="w-full">
                  <textarea
                    rows="4"
                    class="shadow-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="Your Description"
                    name="description"
                    value={formInfo.description}
                    onChange={handleChange}
                    required={true}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex space-x-5">
            <div className="w-full flex justify-end items-end space-x-3">
              <button
                type="submit"
                className="border-2 px-5 py-3 rounded-3xl transition ease-in-out bg-login-color border-login-color hover:bg-[#5e56b8] text-white"
              >
                Save Project
              </button>
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default EditProjectModal;
