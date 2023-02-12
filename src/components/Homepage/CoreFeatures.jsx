import React from "react";
import { Link } from "react-router-dom";
import feature1 from "../../img/core-features-1.png";
import feature2 from "../../img/core-features-2.png";
import feature3 from "../../img/core-features-3.png";
import feature4 from "../../img/core-features-4.png";
import feature5 from "../../img/core-features-5.png";
import feature6 from "../../img/core-features-6.png";

const CoreFeatures = () => {
  return (
    <div className="container mt-40">
      <div>
        <h2 className="text-center text-secondary font-bold text-[15px] leading-5 tracking-[7%]">
          Our Goals
        </h2>
        <h3 className="text-center text-heading-one leading-[65px] text-[50px] font-normal">
          Help The Poor Throughout us
        </h3>
        <div className="grid grid-cols-3 gap-10 mt-10">
          <div className="flex flex-col space-y-3 shadow-xl rounded-xl py-5 px-10">
            <img src={feature6} alt="" className="h-12 w-12" />
            <p className="text-heading-one font-bold text-2xl leading-10">
              Safe Water
            </p>
            <p className="text-[#5F7BAE] font-medium leading-5 text-[15px]">
            Join our efforts to conserve water and protect the environment by volunteering for our Save Water... 
            </p>
            <Link
              to=""
              className="text-[15px] text-[#F697D9] leading-4 font-bold"
            >
              Read More {"> >"}
            </Link>
          </div>
          <div className="flex flex-col space-y-3 shadow-xl rounded-xl py-5 px-10">
            <img src={feature5} alt="" className="h-12 w-12" />
            <p className="text-heading-one font-bold text-2xl leading-10">
              Make Donation
            </p>
            <p className="text-[#5F7BAE] font-medium leading-5 text-[15px]">
            Make a difference in your community by donating to our volunteer organization. Every donation...
            </p>
            <Link
              to=""
              className="text-[15px] text-[#F697D9] leading-4 font-bold"
            >
              Read More {"> >"}
            </Link>
          </div>
          <div className="flex flex-col space-y-3 shadow-xl rounded-xl py-5 px-10">
            <img src={feature4} alt="" className="h-12 w-12" />
            <p className="text-heading-one font-bold text-2xl leading-10">
              Build Home
            </p>
            <p className="text-[#5F7BAE] font-medium leading-5 text-[15px]">
            Join us in building a home for a deserving family in need by volunteering for our housing project...
            </p>
            <Link
              to=""
              className="text-[15px] text-[#F697D9] leading-4 font-bold"
            >
              Read More {"> >"}
            </Link>
          </div>
          <div className="flex flex-col space-y-3 shadow-xl rounded-xl py-5 px-10">
            <img src={feature3} alt="" className="h-12 w-12" />
            <p className="text-heading-one font-bold text-2xl leading-10">
              AID for children
            </p>
            <p className="text-[#5F7BAE] font-medium leading-5 text-[15px]">
            Volunteer to make a difference in the lives of children in need by joining our aid program. Our program...
            </p>
            <Link
              to=""
              className="text-[15px] text-[#F697D9] leading-4 font-bold"
            >
              Read More {"> >"}
            </Link>
          </div>
          <div className="flex flex-col space-y-3 shadow-xl rounded-xl py-5 px-10">
            <img src={feature2} alt="" className="h-12 w-12" />
            <p className="text-heading-one font-bold text-2xl leading-10">
              Smile Session
            </p>
            <p className="text-[#5F7BAE] font-medium leading-5 text-[15px]">
            Make someone's day by volunteering for our Smile Session program. Our program focuses on bringing joy...
            </p>
            <Link
              to=""
              className="text-[15px] text-[#F697D9] leading-4 font-bold"
            >
              Read More {"> >"}
            </Link>
          </div>
          <div className="flex flex-col space-y-3 shadow-xl rounded-xl py-5 px-10">
            <img src={feature1} alt="" className="h-12 w-12" />
            <p className="text-heading-one font-bold text-2xl leading-10">
              Food Campus
            </p>
            <p className="text-[#5F7BAE] font-medium leading-5 text-[15px]">
            Join our efforts to combat hunger by volunteering for our Food Campus program. Our program focuses...
            </p>
            <Link
              to=""
              className="text-[15px] text-[#F697D9] leading-4 font-bold"
            >
              Read More {"> >"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreFeatures;
