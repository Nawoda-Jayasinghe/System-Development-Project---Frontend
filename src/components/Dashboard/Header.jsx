import React from "react";
import { BellIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";
import { useEffect,useState } from "react";
import { useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import axios from "axios";

const Header = () => {
  const token = useSelector((state) => state.auth.token);
  const decodedToken = jwt_decode(token);
  const [user,setUser] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3500/users/${decodedToken?.UserInfo.useerId}`).then(res =>{
      if(res.data.result){
        setUser(res.data.user)
      }
    })
  }, []);

  return (
    <div className="flex space-x-5">
      <div className="bg-white w-10 h-10 flex justify-center items-center rounded-full">
        <BellIcon className="h-5 w-5 text-[#A098AE]" />
      </div>
      <div className="bg-white w-10 h-10 flex justify-center items-center rounded-full">
        <Cog6ToothIcon className="h-5 w-5 text-[#A098AE]" />
      </div>
      <div className="flex">
        <div className="flex flex-col items-end justify-center">
          <p className="text-[#303972] font-semibold text-sm leading-5">
            {user?.firstName} {user?.lastName.charAt(0)}
          </p>
          <p className="text-[#A098AE] font-normal text-sm leading-5">{user?.roles === "Employee" ? "Member" : user?.roles}</p>
        </div>
        <div className="flex items-center justify-center ml-3">
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b0b4c759-ad9c-4425-a9f4-ab89e2fd9837/de8cefl-35c0bc59-59b9-42ab-b19f-5c73828bb78e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2IwYjRjNzU5LWFkOWMtNDQyNS1hOWY0LWFiODllMmZkOTgzN1wvZGU4Y2VmbC0zNWMwYmM1OS01OWI5LTQyYWItYjE5Zi01YzczODI4YmI3OGUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.81ixeN9b4cfDmfBlskK9CUyAMDtRhYNU7lfwTI8WI5Q"
            alt="profile"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
