import React from "react";
import LineGraph from "./TwoLineGraph";
import PieChart from "./PieChart";
import PolarAreaChart from "./PolarAreaChart";
import { Spinner } from "flowbite-react";
import RadarChart from "./RadarChart";
import { useEffect, useState } from "react";
import axios from "axios";

const GraphSection = () => {
  const [graphOne, setGraphOne] = useState(null);
  const [graphTwo, setGraphTwo] = useState(null);
  const [graphThree, setGraphThree] = useState(null);
  const [graphFour, setGraphFour] = useState(null);

  //retreieving data for graph one
  useEffect(() => {
    axios
      .get("http://localhost:3500/analytics/getPeopleEngagementByProject")
      .then((res) => {
        if (res.data.result) {
          setGraphOne(res.data);
        }
      });
  }, []);

  //retreieving data for graph two
  useEffect(() => {
    axios
      .get("http://localhost:3500/analytics/getTaskCompletionMonthly")
      .then((res) => {
        if (res.data.result) {
          setGraphTwo(res.data);
        }
      });
  }, []);

  //retreieving data for graph three
  useEffect(() => {
    axios
      .get("http://localhost:3500/analytics/getBudgetAchievingMonthly")
      .then((res) => {
        if (res.data.result) {
          setGraphThree(res.data);
        }
      });
  }, []);

  //retreieving data for graph four
  useEffect(() => {
    axios
      .get("http://localhost:3500/analytics/getPeopleJoinedWithOrganization")
      .then((res) => {
        if (res.data.result) {
          setGraphFour(res.data);
        }
      });
  }, []);

  return (
    <div className="w-full mb-20 mt-5 flex flex-col space-y-10 justify-between">
      <div className="flex w-full justify-center space-x-5 items-center">
        <div className="w-1/2 shadow-lg p-5 rounded-2xl flex justify-center items-center">
          {graphOne !== null ? (
            <PieChart data={graphOne} />
          ) : (
            <div className="text-center">
              <Spinner aria-label="Center-aligned spinner example" size="xl" />
            </div>
          )}
        </div>
        <div className="w-1/2 shadow-lg p-5 rounded-2xl flex justify-center items-center">
          {graphTwo !== null ? (
            <RadarChart data={graphTwo} />
          ) : (
            <div className="text-center">
              <Spinner aria-label="Center-aligned spinner example" size="xl" />
            </div>
          )}
        </div>
      </div>

      <div className="flex w-full justify-center space-x-5 items-center">
        <div className="w-1/2 shadow-lg p-5 rounded-2xl flex justify-center items-center">
          {graphThree !== null ? (
            <RadarChart data={graphThree} />
          ) : (
            <div className="text-center">
              <Spinner aria-label="Center-aligned spinner example" size="xl" />
            </div>
          )}
        </div>
        <div className="w-1/2 shadow-lg p-5 rounded-2xl flex justify-center items-center">
          {graphFour !== null ? (
            <PolarAreaChart data={graphFour} />
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

export default GraphSection;
