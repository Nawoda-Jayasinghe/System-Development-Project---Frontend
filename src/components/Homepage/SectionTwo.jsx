import React from "react";
import { Link } from "react-router-dom";
import sectionOneImage from "../../img/section01.png";

const SectionTwo = () => {
  return (
    <div className="container my-28">
      <div className="flex items-center justify-center">
        <div className="w-1/2 ">
          <div className="w-full flex justify-center items-center">
            <img
              src={sectionOneImage}
              class="w-3/4 h-full rounded-md"
              alt="section one"
            />
          </div>
        </div>
        <div className="w-1/2">
          <h2 className="text-secondary tracking-[7%] text-[15px] leading-5 font-bold">
            About Us
          </h2>
          <h3 className="text-heading-one font-normal text-5xl leading-[65px]">
            Your Support Is Powerfull
          </h3>
          <p className="mt-4 text-description-one font-light text-[15px] leading-7">
          Our organization is dedicated to making a positive impact in our community through volunteerism. We believe that everyone has something to contribute, and that small actions can lead to big changes. 
          </p>
          <br />
          <p className="text-description-one font-light text-[15px] leading-7">
          We bring together volunteers of all ages, backgrounds, and abilities to work towards a common goal: to improve the lives of those around us.  We are proud to be a part of such a dedicated and compassionate community, and we hope you will join us in making a difference.
          </p>
          <br />
          
          <Link to="/donationForm">
            <button className="mt-10 py-4 px-7 text-white bg-primary hover:bg-primary-shade transition ease-in-out rounded-md text-[15px] leading-5 font-semibold tracking-[7%]">
              Donate Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
