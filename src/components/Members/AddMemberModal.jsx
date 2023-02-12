import React from "react";
import { Modal, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import axios from "axios";

const AddMemberModal = ({
  isAddModalOpen,
  onClose,
  setIsToastVisible,
  setToastMessage,
}) => {
  const [formInfo, setFormInfo] = useState({
    firstName: "",
    lastName: "",
    city: "",
    birthDate: "",
    email: "",
    phone: "",
    password: "",
    role:""
  });

  const handleChange = (event) => {
    setFormInfo({ ...formInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:3500/users", formInfo).then((res) => {
      setToastMessage("The member has been created");
      setIsToastVisible(true);
      onClose();
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
            Add new member
          </h3>
          <div className="w-full flex space-x-5">
            <div className="w-1/2">
              <div className="mb-2 block">
                <Label htmlFor="first name" value="First Name *" />
              </div>
              <TextInput
                onChange={handleChange}
                placeholder="First Name"
                name="firstName"
                required={true}
              />
            </div>
            <div className="w-1/2">
              <div className="mb-2 block">
                <Label htmlFor="last name" value="Last Name *" />
              </div>
              <TextInput
                onChange={handleChange}
                placeholder="Last Name"
                name="lastName"
                required={true}
              />
            </div>
          </div>

          <div className="w-full flex space-x-5">
            <div className="w-1/2">
              <div className="mb-2 block">
                <Label htmlFor="City" value="City *" />
              </div>
              <TextInput
                onChange={handleChange}
                id="city"
                placeholder="City"
                name="city"
                required={true}
              />
            </div>
            <div className="w-1/2">
              <div className="mb-2 block">
                <Label htmlFor="birth date" value="Birth Date" />
              </div>
              <TextInput
                onChange={handleChange}
                placeholder="Birth Date"
                name="birthDate"
                type="date"
              />
            </div>
          </div>

          <div className="w-full flex space-x-5">
            <div className="w-1/2">
              <div className="mb-2 block">
                <Label htmlFor="email" value="Email *" />
              </div>
              <TextInput
                onChange={handleChange}
                id="email"
                placeholder="Email"
                name="email"
                required={true}
              />
            </div>
            <div className="w-1/2">
              <div className="mb-2 block">
                <Label htmlFor="phone" value="Phone *" />
              </div>
              <TextInput
                onChange={handleChange}
                placeholder="Phone Number"
                name="phone"
                required={true}
              />
            </div>
          </div>

          <div className="w-full flex space-x-5">
            <div className="w-1/2">
              <div className="mb-2 block">
                <Label htmlFor="Member Role" value="Member Role" />
              </div>
              <select
                name="role"
                onChange={handleChange}
                class="w-full py-[10px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required={true}
              >
                <option selected disabled>
                  -- Select --
                </option>
                <option value="Admin">Admin</option>
                <option value="Manager">Manager</option>
                <option value="Employee">Member</option>
              </select>
            </div>
            <div className="w-1/2">
              <div className="mb-2 block">
                <Label htmlFor="password" value="Password *" />
              </div>
              <TextInput
                onChange={handleChange}
                placeholder="Password"
                name="password"
                required={true}
              />
            </div>
          </div>
          <div className="w-full flex space-x-5">
            <div className="w-1/2"></div>
            <div className="w-1/2 flex justify-end items-end space-x-3">
              <button
                type="submit"
                className="border-2 px-5 py-3 rounded-3xl transition ease-in-out bg-login-color border-login-color hover:bg-[#5e56b8] text-white"
              >
                Save Member
              </button>
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default AddMemberModal;
