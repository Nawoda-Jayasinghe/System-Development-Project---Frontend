import React from "react";
import { Modal, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import axios from "axios";

const AddProjectModal = ({
  isAddModalOpen,
  addNewProject,
  onClose,
  setIsToastVisible,
  setToastMessage,
}) => {
  const [formInfo, setFormInfo] = useState({
    projectName: "",
    budget: "",
    description: "",
    startingDate: "",
    endingDate: "",
    projectCategory: "",
    file: null,
  });

  const handleChange = (event) => {
    setFormInfo({
      ...formInfo,
      [event.target.name]:
        event.target.name === "file"
          ? event.target.files[0]
          : event.target.value,
    });
  };

  const setFileToBase = (event) => {
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onloadend = () => {
      setFormInfo({
        ...formInfo,
        file: reader.result,
      });
    };
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //setFileToBase();
    // console.log(formInfo);

    axios.post("http://localhost:3500/projects", formInfo).then((res) => {
      if (res.data.result) {
        setToastMessage("The project has been created");
        setIsToastVisible(true);
        onClose();
      } else {
        console.log(res.data.message);
      }
    });
  };

  return (
    <Modal show={isAddModalOpen} size="5xl" popup={true} onClose={onClose}>
      <Modal.Header />
      <Modal.Body>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8"
        >
          <h3 className="text-xl text-[#303972] font-semibold dark:text-white">
            Add new project
          </h3>
          <div className="w-full flex space-x-5">
            <div className="w-1/2">
              <div className="mb-2 block">
                <Label htmlFor="Project Name" value="Project Name" />
              </div>
              <TextInput
                onChange={handleChange}
                placeholder="Project Name"
                name="projectName"
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
            <div className="w-full">
              <label
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                for="file_input"
              >
                Upload Image
              </label>
              <input
                onChange={setFileToBase}
                name="file"
                accept="image/x-png,image/jpeg"
                class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="file_input_help"
                type="file"
                required={true}
              />
              <p
                class="mt-1 text-sm text-gray-500 dark:text-gray-300"
                id="file_input_help"
              >
                SVG, PNG, JPG or GIF (MAX. 800x400px).
              </p>
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

export default AddProjectModal;
