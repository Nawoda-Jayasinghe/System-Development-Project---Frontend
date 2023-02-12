import React from "react";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import axios from "axios";

const ProjectsInHomePage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3500/projects").then((res) => {
      setProjects(res.data.filter((item) => !item.completed));
    });
  }, []);

  return (
    <div id="projects" className="container mb-10 mt-40">
      <h2 className="text-center text-secondary font-bold text-[15px] leading-5 tracking-[7%]">
        Ongoing Projects
      </h2>
      <h3 className="text-center text-heading-one leading-[65px] text-[50px] font-normal">
        Some Good Causes
      </h3>

      {/* start */}
      <div className="grid grid-cols-3 mt-10 gap-[30px]">
        {projects.map((project) => (
          <div className="w-full shadow-lg border border-gray-400 rounded-xl overflow-hidden pb-5">
            <img
              src={project.imgURL}
              alt="project"
              className="w-full h-[250px] object-cover object-center"
            />
            <div className="px-7">
              <p className="text-[15px] text-heading-one font-bold mt-5">
                {project.title}
              </p>
              <div className="flex space-x-1 items-center text-primary">
                <MapPinIcon className="h-3 w-3" />
                <p className="font-normal text-xs">{project.projectCategory}</p>
              </div>
              <p className="mt-3 text-[#96A8BA] font-medium text-xs text-truncate">
                {project.description}
              </p>
              <div className="mt-3">
                <p className="text-right text-[#6419E6] text-sm font-medium -mb-1">
                  {project.donorEnagement > 100 ? 100 : project.donorEnagement}%
                </p>
                <progress
                  className="progress progress-primary w-full"
                  value={project.donorEnagement}
                  max="100"
                ></progress>
              </div>
              <div className="flex justify-between items-center">
              <div>
                  <p className="text-heading-one font-medium text-[15px]">
                    Donation
                  </p>
                  <p className="text-[#6E869F] font-semibold text-[10px]">
                    {project.donations} LKR
                  </p>
                </div>
                <div>
                  <p className="text-heading-one font-medium text-[15px]">
                    Goal
                  </p>
                  <p className="text-[#6E869F] font-semibold text-[10px]">
                    {project.budget} LKR
                  </p>
                </div>
                
              </div>
            </div>
          </div>
        ))}{" "}
      </div>
      {/*  end  */}
    </div>
  );
};

export default ProjectsInHomePage;
