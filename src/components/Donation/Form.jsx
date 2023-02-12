import React, { useState, useEffect } from "react";
import { InsertDonation } from "../../api/Api";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ResponseModal from "../Modals/ResponseModal";

const DonationForm = () => {
  const navigate = useNavigate();

  const [formInfo, setFormInfo] = useState({
    donationAmount: 1000,
    paymentMethod: "",
    firstName: "",
    lastName: "",
    mobile: "",
    address: "",
    email: "",
    message: "",
    project: "",
    city: "",
    country: "",
  });
  const [isModalOpen, setIsResponseModalOpen] = useState(false);
  const [isPaymentError, setIsPaymentError] = useState(false);
  const [donationIndex, setDonationIndex] = useState(1);
  const handleChange = (event) => {
    setFormInfo({ ...formInfo, [event.target.name]: event.target.value });
  };
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3500/projects/getProjectsForTasks")
      .then((res) => {
        if (res.data.result) {
          setProjects(res.data.projects);
        }
      });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formInfo.paymentMethod.length > 0) {
      const data = {
        donationAmount: formInfo.donationAmount,
        paymentMethod: formInfo.paymentMethod,
        name: formInfo.firstName + " " + formInfo.lastName,
        mobile: formInfo.mobile,
        project: formInfo.project,
        city: formInfo.city,
        country: formInfo.country,
        address: formInfo.address,
        email: formInfo.email,
        message: formInfo.message,
      };

      await axios
        .post("http://localhost:3500/donors/createDonation", data)
        .then((res) => {
          if (res.data.result) {
            // reset form details
            setFormInfo({
              donationAmount: "",
              paymentMethod: "",
              firstName: "",
              lastName: "",
              mobile: "",
              address: "",
              email: "",
              message: "",
              project: "",
              city: "",
              country: "",
            });

            setIsResponseModalOpen(true);
          } else {
            console.log(res.data.message);
          }
        });
    } else {
      setIsPaymentError(true);
    }
  };

  const responseHandler = () => {
    navigate("/");
  };

  return (
    <div className="mt-[73px]">
      <div className="form-bg w-full h-[50vh] relative">
        <div className="form-bg-overlay absolute flex justify-center items-center w-full h-[50vh]">
          <p className="text-white text-5xl leading-[65px] font-normal">
            Donation Form
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="container mt-28">
        <h2 className="text-heading-one font-semibold text-3xl leading-[65px]">
          Donate now
        </h2>

        <p className="mt-2 font-normal text-heading-one text-2xl leading-[65px]">
          Enter Donation Amount
        </p>

        <div class="flex">
          <span class="inline-flex items-center px-3 text-sm text-white bg-primary rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            LKR
          </span>
          <input
            type="number"
            class="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block min-w-0 w-1/4 text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="1000"
            name="donationAmount"
            value={formInfo.donationAmount}
            onChange={handleChange}
            disabled={donationIndex !== 5}
            required
          />
        </div>

        <div className="flex space-x-4 mt-10">
          <div
            type="text"
            id="website-admin"
            onClick={() => {
              setFormInfo({
                ...formInfo,
                donationAmount: 1000,
              });
              setDonationIndex(1);
            }}
            class={`cursor-pointer lg:flex justify-center items-center rounded-lg ${
              donationIndex === 1
                ? "text-white bg-primary border"
                : "text-gray-900 bg-gray-50"
            } border-gray-300 block min-w-0 w-[90px] h-[42px] text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white`}
          >
            1000
          </div>
          <div
            type="text"
            id="website-admin"
            onClick={() => {
              setFormInfo({
                ...formInfo,
                donationAmount: 2000,
              });
              setDonationIndex(2);
            }}
            class={`cursor-pointer lg:flex justify-center items-center rounded-lg ${
              donationIndex === 2
                ? "text-white bg-primary border"
                : "text-gray-900 bg-gray-50"
            } border-gray-300 block min-w-0 w-[90px] h-[42px] text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white`}
          >
            2000
          </div>
          <div
            type="text"
            id="website-admin"
            onClick={() => {
              setFormInfo({
                ...formInfo,
                donationAmount: 5000,
              });
              setDonationIndex(3);
            }}
            class={`cursor-pointer lg:flex justify-center items-center rounded-lg ${
              donationIndex === 3
                ? "text-white bg-primary border"
                : "text-gray-900 bg-gray-50"
            } border-gray-300 block min-w-0 w-[90px] h-[42px] text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white`}
          >
            5000
          </div>
          <div
            type="text"
            id="website-admin"
            onClick={() => {
              setFormInfo({
                ...formInfo,
                donationAmount: 10000,
              });
              setDonationIndex(4);
            }}
            class={`cursor-pointer lg:flex justify-center items-center rounded-lg ${
              donationIndex === 4
                ? "text-white bg-primary border"
                : "text-gray-900 bg-gray-50"
            } border-gray-300 block min-w-0 w-[90px] h-[42px] text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white`}
          >
            10000
          </div>
          <div
            type="text"
            id="website-admin"
            onClick={() => {
              setDonationIndex(5);
            }}
            class={`cursor-pointer lg:flex justify-center items-center rounded-lg ${
              donationIndex === 5
                ? "text-white bg-primary border"
                : "text-gray-900 bg-gray-50"
            } border-gray-300 block min-w-0 w-[90px] h-[42px] text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white`}
          >
            Custom
          </div>
        </div>

        <p className="mt-6 font-normal text-heading-one text-2xl leading-[65px]">
          Select Payment Method
        </p>

        <fieldset>
          <legend class="sr-only">Payment Method</legend>
          <div
            className="flex flex-col space-y-3"
            onChange={handleChange}
            required={true}
          >
            <div className="flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="googlePay"
                class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-[#debddb] dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
              />
              <span className="ml-2 text-sm font-medium text-gray-900">
                Google Pay
              </span>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="paypal"
                class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-[#debddb] dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
              />
              <span className="ml-2 text-sm font-medium text-gray-900">
                PayPal
              </span>
            </div>
          </div>
        </fieldset>
        {isPaymentError && (
          <p className="text-red-600 text-sm mt-4">
            Please select one payment method
          </p>
        )}

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
              value={formInfo.firstName}
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
              value={formInfo.lastName}
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
              value={formInfo.mobile}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div class="flex space-x-7 mt-7">
          <div className="w-full">
            <label
              for="address"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Address
            </label>
            <input
              type="text"
              class="shadow-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Address"
              name="address"
              value={formInfo.address}
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
              value={formInfo.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Project
            </label>
            <div className="w-full">
              <select
                name="project"
                onChange={handleChange}
                class="w-full py-[10px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
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
              placeholder="City"
              name="city"
              value={formInfo.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full">
            <label
              for="country"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Country
            </label>
            <input
              type="text"
              class="shadow-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Country"
              name="country"
              value={formInfo.country}
              onChange={handleChange}
              required
            />
          </div>
        </div>

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
          value={formInfo.message}
          onChange={handleChange}
          required
        ></textarea>
        <div className="flex flex-wrap justify-end items-center">
          {formInfo.donationAmount.length > 0 && (
            <p className="font-medium leading-[65px] text-[15px]">
              Total Donation{" "}
              <span className="text-secondary">
                {formInfo.donationAmount}.00 LKR
              </span>
            </p>
          )}
        </div>
        <button
          type="submit"
          className="mb-10 mt-6 py-4 px-7 text-white bg-primary hover:bg-primary-shade transition ease-in-out rounded-md text-[15px] leading-5 font-semibold tracking-[7%]"
        >
          DONATE NOW
        </button>
      </form>
      <ResponseModal
        isModalOpen={isModalOpen}
        title={"Donation Successful"}
        description={"Your details have been saved successfully"}
        onClose={() => setIsResponseModalOpen(false)}
        onClick={responseHandler}
      />
    </div>
  );
};

export default DonationForm;
