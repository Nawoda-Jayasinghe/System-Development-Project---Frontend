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
            src="https://images.unsplash.com/photo-1484800089236-7ae8f5dffc8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
            alt="profile"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
