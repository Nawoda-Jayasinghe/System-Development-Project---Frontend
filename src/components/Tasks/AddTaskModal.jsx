import React from "react";
import { Modal, Label, TextInput } from "flowbite-react";
import { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const AddTaskModal = ({
  isAddModalOpen,
  addNewTask,
  onClose,
  setIsToastVisible,
  setToastMessage,
}) => {
  const [formInfo, setFormInfo] = useState({
    task: "",
    user: "",
    project: "",
    description: "",
  });
  const [projects, setProjects] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [optionList, setOptionList] = useState([]);
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
    axios.get("http://localhost:3500/users/getUsersForTheTasks").then((res) => {
      if (res.data.result) {
        setOptionList(
          res.data.users.map((user) => {
            return {
              value: user._id,
              label: `${user.firstName} ${user.lastName}`,
            };
          })
        );
      }
    });
  }, []);

  const handleChange = (event) => {
    setFormInfo({ ...formInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let users = [];

    selectedOptions.forEach((user) => {
      users.push(user.value);
    });

    const data = {
      task: formInfo.task,
      user: users,
      project: formInfo.project,
      description: formInfo.description,
    };

    await axios.post("http://localhost:3500/notes", data).then((res) => {
      if (res.data.result) {
        resetForm();
        setToastMessage("The task has been created");
        setIsToastVisible(true);
        onClose();
      }
    });
  };

  const resetForm = async () => {
    await setFormInfo({
      task: "",
      user: "",
      project: "",
      description: "",
    });
  };

  const handleSelect = (data) => {
    setSelectedOptions(data);
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
            Add new task
          </h3>
          <div className="w-full flex space-x-5">
            <div className="w-1/2">
              <div className="mb-2 block">
                <Label htmlFor="Task Name" value="Task Name" />
              </div>
              <TextInput
                onChange={handleChange}
                placeholder="Task Name"
                name="task"
                required={true}
              />
            </div>
            <div className="w-1/2">
              <div className="mb-2 block">
                <Label htmlFor="Assigned Member" value="Assigned Member" />
              </div>
              <div className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <Select
                  isMulti
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  options={optionList}
                  placeholder="Select Project"
                  value={selectedOptions}
                  onChange={handleSelect}
                  isSearchable={true}
                  required={true}
                />
              </div>
            </div>
          </div>

          <div className="w-full flex space-x-5">
            <div className="w-full">
              <div className="mb-2 block">
                <Label htmlFor="Project Name" value="Project Name" />
              </div>
              <div className="w-full flex space-x-3">
                <div className="w-full">
                  <select
                    name="project"
                    onChange={handleChange}
                    class="w-full py-[10px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required={true}
                  >
                    <option selected disabled>
                      -- Select --
                    </option>
                    {projects.map((project) => (
                      <option value={project._id}>{project.title}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex space-x-5">
            <div className="w-full">
              <div className="mb-2 block">
                <Label htmlFor="Task Description" value="Task Description" />
              </div>
              <div className="w-full flex space-x-3">
                <div className="w-full">
                  <textarea
                    rows="4"
                    class="shadow-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="Your Description"
                    name="description"
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
                Save Task
              </button>
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default AddTaskModal;
