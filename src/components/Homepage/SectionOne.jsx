import React from "react";
import iconOne from "../../img/Group - 1.png";
import iconTwo from "../../img/Group - 2.png";
import iconThree from "../../img/Group - 3.png";
import iconFour from "../../img/Group - 4.png";

const SectionOne = () => {
  return (
    <div
      id="about"
      className="container flex justify-center items-center mt-32"
    >
      <div className="flex w-10/12 justify-between items-center">
        <div className="flex flex-col items-center justify-center">
          <img src={iconFour} alt="icon" className="w-[115px] h-[115px]" />
          <p className="mt-5 text-black font-bold text-5xl">12k+</p>
          <p className="text-black text-sm leading-5 mt-2 font-light">
            Total Volunteers
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={iconThree} alt="icon" className="w-[115px] h-[115px]" />
          <p className="mt-5 text-black font-bold text-5xl">80+</p>
          <p className="text-black text-sm leading-5 mt-2 font-light">
            Projects
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={iconTwo} alt="icon" className="w-[115px] h-[115px]" />
          <p className="mt-5 text-black font-bold text-5xl">10k+</p>
          <p className="text-black text-sm leading-5 mt-2 font-light">
            Poor People Saved
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={iconOne} alt="icon" className="w-[115px] h-[115px]" />
          <p className="mt-5 text-black font-bold text-5xl">50+</p>
          <p className="text-black text-sm leading-5 mt-2 font-light">
            Districts
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
