import React from "react";
import { Link } from "react-router-dom";

const VolunteerSection = () => {
  return (
    <div className="cta-bg w-full min-h-[50vh] mt-40 flex justify-center items-center">
      <div className="container">
        <div className="flex flex-col space-y-16 justify-center items-center w-full">
          <p className="text-white text-[50px] leading-10 font-normal">
            Become A Proud Volunteer!
          </p>
          <div className="flex space-x-5">
            <Link
              to="/membershiForm"
              className="py-4 px-7 text-white bg-secondary hover:bg-secondary-shade transition ease-in-out rounded-md text-[15px] leading-5 font-semibold tracking-[7%]"
            >
              Apply Now
            </Link>
            <Link
              to="/donationForm"
              className="py-4 px-7 text-white bg-primary hover:bg-primary-shade transition ease-in-out rounded-md text-[15px] leading-5 font-semibold tracking-[7%]"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerSection;
