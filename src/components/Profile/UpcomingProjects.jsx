import React, { useState, useEffect } from "react";
import { CalendarIcon, ClockIcon } from "@heroicons/react/24/solid";
import axios from "axios";

const UpcomingProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3500/projects").then((res) => {
      setProjects(res.data);
    });
  }, []);

  return (
    <div className="w-full flex flex-col space-y-5">
      <div className="rounded-xl w-full bg-white">
        <div className="p-6">
          <p className="text-heading-two text-2xl leading-9 font-bold">
            Upcoming Projects
          </p>
          <p className="text-[#A098AE] font-normal text-sm leading-5">
            Thursday, 10th April , 2021
          </p>
        </div>
      </div>
      <div className="rounded-xl w-full bg-white border-l-[20px] border-login-color">
        <div className="p-6">
          <p className="text-heading-two text-xl leading-9 font-bold">
            {projects[0]?.title}
          </p>
          <p className="text-[#A098AE] font-normal text-sm leading-5">
            {projects[0]?.projectCategory}
          </p>
          <div className="flex items-center space-x-3 mt-5">
            <CalendarIcon className="h-4 w-4 text-[#FB7D5B]" />
            <p className="text-[#A098AE] font-normal text-sm leading-5">
              {projects[0]?.startingDate}
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <ClockIcon className="h-4 w-4 text-[#FCC43E]" />
            <p className="text-[#A098AE] font-normal text-sm leading-5">
              09.00 - 10.00 AM
            </p>
          </div>
        </div>
      </div>
      <div className="rounded-xl w-full bg-white border-l-[20px] border-[#FB7D5B]">
        <div className="p-6">
          <p className="text-heading-two text-xl leading-9 font-bold">
            {projects[1]?.title}
          </p>
          <p className="text-[#A098AE] font-normal text-sm leading-5">
            {projects[1]?.projectCategory}
          </p>
          <div className="flex items-center space-x-3 mt-5">
            <CalendarIcon className="h-4 w-4 text-[#FB7D5B]" />
            <p className="text-[#A098AE] font-normal text-sm leading-5">
              {projects[1]?.startingDate}
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <ClockIcon className="h-4 w-4 text-[#FCC43E]" />
            <p className="text-[#A098AE] font-normal text-sm leading-5">
              09.00 - 10.00 AM
            </p>
          </div>
        </div>
      </div>
      <div className="rounded-xl w-full bg-white border-l-[20px] border-[#FCC43E]">
        <div className="p-6">
          <p className="text-heading-two text-xl leading-9 font-bold">
            {projects[2]?.title}
          </p>
          <p className="text-[#A098AE] font-normal text-sm leading-5">
            {projects[2]?.projectCategory}
          </p>
          <div className="flex items-center space-x-3 mt-5">
            <CalendarIcon className="h-4 w-4 text-[#FB7D5B]" />
            <p className="text-[#A098AE] font-normal text-sm leading-5">
              {projects[2]?.startingDate}
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <ClockIcon className="h-4 w-4 text-[#FCC43E]" />
            <p className="text-[#A098AE] font-normal text-sm leading-5">
              09.00 - 10.00 AM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingProjects;
