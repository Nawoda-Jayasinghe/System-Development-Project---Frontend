import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate  = useNavigate();

  const handleChange = (path) => {
      navigate(path)
  }
  return (
    <div className="header-bg mt-[73px] h-[90vh] w-full flex items-center">
      <div className="container">
        <p className="text-white font-bold leading-5 text-sm">
          Get Started Today...
        </p>
        <h3 className="text-white lg:w-5/12 text-6xl font-normal leading-[70px] mt-4">
          Fundraising For The Human.
        </h3>
        <div className="mt-4">
          <p className="text-white lg:w-5/12 text-[15px] font-light leading-6">
          Make a difference in your community and change lives by volunteering with us. Join a team of dedicated individuals and contribute your time and skills to make a positive impact.
          </p>
        </div>
        <div className="mt-6 flex space-x-5">
          <button onClick={() => handleChange('donationForm')} className="py-4 px-7 text-white bg-secondary hover:bg-secondary-shade transition ease-in-out rounded-md text-[15px] leading-5 font-semibold tracking-[7%]">
            Donate Now
          </button>
          <button onClick={() => handleChange('membershiForm')} className="py-4 px-12 text-white bg-transparent transition ease-in-out border-2 border-secondary hover:bg-secondary rounded-md text-[15px] leading-5 font-semibold tracking-[7%]">
            Join Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
