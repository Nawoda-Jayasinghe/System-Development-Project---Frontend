import React from "react";
import { MapPinIcon, PhoneIcon, AtSymbolIcon } from "@heroicons/react/24/solid";
import Header from "../Dashboard/Header";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import axios from "axios";
import UpcomingProjects from "./UpcomingProjects";

const Profile = () => {
  const token = useSelector((state) => state.auth.token);
  const decodedToken = jwt_decode(token);
  const [user, setUser] = useState(null);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3500/users/${decodedToken?.UserInfo.useerId}`)
      .then((res) => {
        if (res.data.result) {
          setUser(res.data.user);
        }
      });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:3500/projects").then((res) => {
      setProjects(res.data);
    });
  }, []);

  return (
    <div className="w-full flex flex-col justify-start items-center min-h-screen bg-[#F3F4FF]">
      <div className="flex w-11/12 justify-between items-center mt-12">
        <h2 className="font-bold text-4xl leading-10 text-[#303972]">
          Profile
        </h2>
        <Header />
      </div>

      <div className="flex w-11/12 space-x-5 justify-between items-start mt-12">
        <div className="w-8/12 bg-white rounded-xl overflow-hidden relative">
          <div className="w-full h-[15vh] profile-bg"></div>
          <div className="absolute top-[10%] left-[3%] bg-white w-[120px] h-[120px] rounded-full flex justify-center items-center">
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b0b4c759-ad9c-4425-a9f4-ab89e2fd9837/de8cefl-35c0bc59-59b9-42ab-b19f-5c73828bb78e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2IwYjRjNzU5LWFkOWMtNDQyNS1hOWY0LWFiODllMmZkOTgzN1wvZGU4Y2VmbC0zNWMwYmM1OS01OWI5LTQyYWItYjE5Zi01YzczODI4YmI3OGUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.81ixeN9b4cfDmfBlskK9CUyAMDtRhYNU7lfwTI8WI5Q"
              alt="profile"
              className="w-28 h-28 rounded-full"
            />
          </div>
          <div className=" mt-[12%] mx-[4%]">
            <p className="text-heading-two text-3xl leading-10 font-bold">
              {user?.firstName} {user?.lastName}
            </p>
            <p className="text-[#A098AE] text-base font-semibold leading-7">
              {user?.roles === "Employee" ? "Member" : user?.roles}
            </p>
            <div className="flex space-x-10 mt-10">
              <div className="flex space-x-3">
                <div className="w-7 h-7 rounded-full flex justify-center items-center bg-[#FB7D5B]">
                  <MapPinIcon className="h-4 w-4 text-white" />
                </div>
                <p className="text-heading-two text-sm font-semibold leading-7">
                  {user?.city}
                </p>
              </div>
              <div className="flex space-x-3">
                <div className="w-7 h-7 rounded-full flex justify-center items-center bg-[#FB7D5B]">
                  <PhoneIcon className="h-4 w-4 text-white" />
                </div>
                <p className="text-heading-two text-sm font-semibold leading-7">
                  {user?.phone}
                </p>
              </div>
              <div className="flex space-x-3">
                <div className="w-7 h-7 rounded-full flex justify-center items-center bg-[#FB7D5B]">
                  <AtSymbolIcon className="h-5 w-5 text-white" />
                </div>
                <p className="text-heading-two text-sm font-semibold leading-7">
                  {user?.email}
                </p>
              </div>
            </div>
            <p className="text-heading-two font-bold text-2xl leading-9 mt-10">
              About:
            </p>
            <p className="pb-10 text-heading-two font-normal text-base leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="pb-10 text-heading-two font-normal text-base leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor. consectetur adipiscing elit, sed do eiusmod tempor.
              adipiscing elit, sed do eiusmod tempor
            </p>
          </div>
        </div>
        <div className="w-4/12 mb-10">
          <UpcomingProjects />
        </div>
      </div>
    </div>
  );
};

export default Profile;
