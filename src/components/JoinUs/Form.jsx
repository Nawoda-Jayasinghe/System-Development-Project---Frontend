import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ResponseModal from "../Modals/ResponseModal";
import ErrorModal from "../Modals/ErrorModal";

const JoinUsForm = () => {
  const navigate = useNavigate();

  const [formInfo, setFormInfo] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    city: "",
    email: "",
    message: "",
    birthDate: "",
  });
  const [isModalOpen, setIsResponseModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorResponseModalOpen] = useState(false);
  const [errorModalText, setIsErrorModalText] = useState(null);

  const handleChange = (event) => {
    setFormInfo({ ...formInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formInfo);

    axios
      .post("http://localhost:3500/users/addNewMember", formInfo)
      .then((res) => {
        if (res.data.result) {
          //reset form details
          setFormInfo({
            firstName: "",
            lastName: "",
            mobile: "",
            city: "",
            email: "",
            message: "",
            birthDate: "",
          });

          setIsResponseModalOpen(true);
        }else{
          setIsErrorModalText(res.data.message);
          setIsErrorResponseModalOpen(true);
        }
      });
  };

  const responseHandler = () => {
    navigate("/");
  };

  return (
    <div className="mt-[73px]">
      <div className="form-bg w-full h-[50vh] relative">
        <div className="form-bg-overlay absolute flex justify-center items-center w-full h-[50vh]">
          <p className="text-white text-5xl leading-[65px] font-normal">
            Membership Form
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="container mt-28">
        <h2 className="text-heading-one font-semibold text-3xl leading-[65px]">
          Apply now
        </h2>

        <p className="mt-6 font-normal text-heading-one text-2xl leading-[65px]">
          Personal Info !
        </p>
        <div class="flex space-x-7">
          <div className="w-full">
            <label
              for="first name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              First Name
            </label>
            <input
              type="text"
              class="shadow-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="First Name"
              name="firstName"
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full">
            <label
              for="last name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Last Name
            </label>
            <input
              type="text"
              class="shadow-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Last Name"
              name="lastName"
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full">
            <label
              for="mobile"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Mobile
            </label>
            <input
              type="text"
              class="shadow-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Mobile"
              name="mobile"
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div class="flex space-x-7 mt-7">
          <div className="w-full">
            <label
              for="city"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              City
            </label>
            <input
              type="text"
              class="shadow-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="city"
              name="city"
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email Address
            </label>
            <input
              type="email"
              class="shadow-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Email Address"
              name="email"
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <label
          for="message"
          class="mt-7 block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Birth Date
        </label>
        <input
          type="date"
          class="shadow-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="birthDate"
          name="birthDate"
          onChange={handleChange}
          required
        />
        <label
          for="message"
          class="mt-7 block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your Message
        </label>
        <textarea
          id="message"
          rows="4"
          class="shadow-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Your Message"
          name="message"
          onChange={handleChange}
          required
        ></textarea>
        <button
          type="submit"
          className="mb-10 mt-6 py-4 px-7 text-white bg-primary hover:bg-primary-shade transition ease-in-out rounded-md text-[15px] leading-5 font-semibold tracking-[7%]"
        >
          Apply
        </button>
      </form>
      <ResponseModal
        isModalOpen={isModalOpen}
        title={"Joining Successful"}
        description={"Your details have been saved successfully"}
        onClose={() => setIsResponseModalOpen(false)}
        onClick={responseHandler}
      />
      <ErrorModal
      isErrorModalOpen={isErrorModalOpen}
      onClose={() => setIsErrorResponseModalOpen(false)}
      errorText={errorModalText}
    />
    </div>
  );
};

export default JoinUsForm;
