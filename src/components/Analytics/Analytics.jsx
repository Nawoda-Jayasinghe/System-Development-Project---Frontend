import React from "react";
import Header from "../Dashboard/Header";
import { ChartBarIcon, ArrowUpRightIcon } from "@heroicons/react/24/solid";
import GraphSection from "../Dashboard/GraphSection";
import { useState, useEffect } from "react";
import { Spinner } from "flowbite-react";
import OneLineGraph from "../Dashboard/OneLineGraph";
import BarChart from "../Dashboard/BarGraph";
import axios from "axios";

const Analytics = () => {
  const [projects, setProjects] = useState([]);
  const [graphOne, setGraphOne] = useState(null);
  const [graphTwo, setGraphTwo] = useState(null);
  const [graphThree, setGraphThree] = useState(null);
  const [graphFour, setGraphFour] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3500/projects").then((res) => {
      if (res.data) {
        setProjects(res.data);
      }
    });
  }, []);

  //retreieving data for graph one
  useEffect(() => {
    axios
      .get("http://localhost:3500/analytics/getPeopleEngagementMonthly")
      .then((res) => {
        if (res.data.result) {
          setGraphOne(res.data);
        }
      });
  }, []);

  //retreieving data for graph two
  useEffect(() => {
    axios
      .get("http://localhost:3500/analytics/getDonationCollectedDaily")
      .then((res) => {
        if (res.data.result) {
          setGraphTwo(res.data);
        }
      });
  }, []);

  //retreieving data for graph three
  useEffect(() => {
    axios
      .get("http://localhost:3500/analytics/getNumberOfPeopleDonated")
      .then((res) => {
        if (res.data.result) {
          setGraphThree(res.data);
        }
      });
  }, []);

  //retreieving data for graph four
  useEffect(() => {
    axios
      .get("http://localhost:3500/analytics/getNumberOfPeopleMadeRequests")
      .then((res) => {
        if (res.data.result) {
          setGraphFour(res.data);
        }
      });
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-[#F3F4FF] shadow-2xl">
      <div className="flex w-11/12 justify-between items-start mt-12">
        <h2 className="font-bold text-4xl leading-10 text-[#303972]">
          Analytics
        </h2>
        <Header />
      </div>

      <div className="w-11/12 h-[70vh] overflow-y-auto overflow-hidden flex flex-col space-y-5 justify-between items-center mt-10 bg-white rounded-xl px-10 py-5 mb-10">
        {projects.map((project) => (
          <div className="w-full flex flex-col space-y-5">
            <div className="flex w-full justify-between items-center">
              <div>
                <img
                  className="w-24 h-24 rounded-xl"
                  src={project.imgURL}
                  alt="project"
                />
              </div>
              <div className="flex flex-col w-1/4">
                <div className="bg-[#FCC43E] w-24 text-sm text-white rounded-xl text-center py-1">
                  {project.completed ? "Completed" : "Ongoing"}
                </div>
                <div className="font-semibold truncate text-base leading-10 text-login-color">
                  {project.title}
                </div>
              </div>
              <div className="flex flex-col justify-center items-center space-y-3">
                <div
                  className="radial-progress text-login-color"
                  style={{
                    "--value": project.percentage,
                    "--size": "3rem",
                    "--thickness": "5px",
                  }}
                >
                  {project.percentage}%
                </div>
                <p className="text-gray-400 text-xs">Project Completion</p>
              </div>
              <div className="flex items-center space-x-3">
                <ChartBarIcon className="h-14 w-14 text-login-color" />
                <div className="flex flex-col">
                  <p className="font-semibold text-base text-login-color">
                    {project.donations}
                  </p>
                  <p className="text-gray-400 text-xs">Total Donations</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <ArrowUpRightIcon className="h-14 w-14 text-login-color" />
                <div className="flex flex-col">
                  <p className="font-semibold text-base text-login-color">
                    {project.donorEnagement > 100
                      ? 100
                      : project.donorEnagement}
                    %
                  </p>
                  <p className="text-gray-400 text-xs">Donor Engagement</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-11/12 px-10 pb-10 bg-white rounded-xl mb-10">
        <div>
          <GraphSection />
        </div>
        <div className="shadow-lg p-5 rounded-2xl mt-10">
          <h2 className="text-login-color font-bold text-xl my-10">
            People engagement monthly
          </h2>
          {graphOne !== null ? (
            <BarChart data={graphOne} />
          ) : (
            <div className="text-center">
              <Spinner aria-label="Center-aligned spinner example" size="xl" />
            </div>
          )}
        </div>
        <div className="shadow-lg p-5 rounded-2xl mt-10">
          <h2 className="text-login-color font-bold text-xl my-10">
            Donations Collected daily
          </h2>
          {graphTwo !== null ? (
            <OneLineGraph collected={graphTwo} />
          ) : (
            <div className="text-center">
              <Spinner aria-label="Center-aligned spinner example" size="xl" />
            </div>
          )}
        </div>
        <div className="shadow-lg p-5 rounded-2xl mt-10">
          <h2 className="text-login-color font-bold text-xl my-10">
            Donations Engagement daily
          </h2>
          {graphThree !== null ? (
            <OneLineGraph collected={graphThree} />
          ) : (
            <div className="text-center">
              <Spinner aria-label="Center-aligned spinner example" size="xl" />
            </div>
          )}
        </div>
        <div className="shadow-lg p-5 rounded-2xl mt-10">
          <h2 className="text-login-color font-bold text-xl my-10">
            New Member Engagement daily
          </h2>
          {graphFour !== null ? (
            <OneLineGraph collected={graphFour} />
          ) : (
            <div className="text-center">
              <Spinner aria-label="Center-aligned spinner example" size="xl" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
