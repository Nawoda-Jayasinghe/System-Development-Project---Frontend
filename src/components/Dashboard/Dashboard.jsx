import React from "react";
import LineGraph from "./TwoLineGraph";
import BarChart from "./BarGraph";
import { Spinner } from "flowbite-react";
import Header from "./Header";
import {
  UserIcon,
  ArrowTrendingUpIcon,
  CalendarIcon,
} from "@heroicons/react/24/solid";
import UpcomingProjects from "../Profile/UpcomingProjects";
import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3500/analytics/getTotalDonationsForDashBoard")
      .then((res) => {
        if (res.data.result) {
          setData(res.data.collected);
        }
      });
  }, []);

  return (
    <>
      <div className="w-full flex min-h-screen flex-col justify-center items-center bg-[#F3F4FF] shadow-2xl">
        <div className="flex w-11/12 justify-between items-center mt-12">
          <h2 className="font-bold text-4xl leading-10 text-[#303972]">
            Dashboard
          </h2>
          <Header />
        </div>

        <div className="w-11/12 flex space-x-5 mt-10">
          <div className="w-8/12 flex flex-col justify-center items-center bg-white rounded-xl px-10 py-5 mb-10">
            <div className="w-full">
              <h2 className="text-login-color font-bold text-xl mb-10">
                Prject Estimations and Donations
              </h2>
              {data.length > 0 ? (
                <LineGraph collected={data} />
              ) : (
                <div className="text-center">
                  <Spinner aria-label="Center-aligned spinner example" size="xl" />
                </div>
              )}
            </div>

            <div className="flex w-full justify-between mt-10">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center h-10 w-10 bg-login-color rounded-full">
                  <UserIcon className="h-5 w-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <p className="text-gray-400 text-xs">Best Member</p>
                  <p className="font-semibold text-base text-login-color">
                    J. Sanduni
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center h-10 w-10 bg-[#FB7D5B] rounded-full">
                  <ArrowTrendingUpIcon className="h-5 w-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <p className="text-gray-400 text-xs">Profit or Loss</p>
                  <p className="font-semibold text-base text-login-color">
                    +56,000LKR
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center h-10 w-10 bg-[#FCC43E] rounded-full">
                  <CalendarIcon className="h-5 w-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <p className="text-gray-400 text-xs">Upcoming Project</p>
                  <p className="font-semibold text-base text-login-color">
                    Thuru
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-4/12 mb-10">
            <UpcomingProjects />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
