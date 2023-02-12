import React from "react";
import project1 from "../../img/project 1.png";
import project2 from "../../img/project 2.png";
import project3 from "../../img/project 3.png";
import project4 from "../../img/project 4.png";
import project5 from "../../img/project 5.png";
import project6 from "../../img/project 6.png";

const PhotoShowcase = () => {
  return (
    <div className="container mt-40">
      <div>
        <h2 className="text-center text-secondary font-bold text-[15px] leading-5 tracking-[7%]">
          Photo Showcase
        </h2>
        <h3 className="text-center text-heading-one leading-[65px] text-[50px] font-normal">
          Recent Project Gallery
        </h3>
        <div className="grid grid-cols-3 gap-6 mt-10 mb-20">
          <div>
            <img
              src={project1}
              alt=""
              className="object-cover w-full h-full rounded-xl"
            />
          </div>
          <div>
            <img
              src={project2}
              alt=""
              className="object-cover w-full h-full rounded-xl"
            />
          </div>
          <div>
            <img
              src={project3}
              alt=""
              className="object-cover w-full h-full rounded-xl"
            />
          </div>
          <div>
            <img
              src={project4}
              alt=""
              className="object-cover w-full h-full rounded-xl"
            />
          </div>
          <div>
            <img
              src={project5}
              alt=""
              className="object-cover w-full h-full rounded-xl"
            />
          </div>
          <div>
            <img
              src={project6}
              alt=""
              className="object-cover w-full h-full rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoShowcase;
