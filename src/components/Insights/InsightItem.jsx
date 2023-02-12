import React from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { Spinner } from "flowbite-react";

const InsightItem = ({
  title,
  itemOneImge,
  itemOneTitle,
  itemOnePercentage,
  itemTwoImge,
  itemTwoTitle,
  itemTwoPercentage,
  itemThreeImge,
  itemThreeTitle,
  itemThreePercentage,
}) => {
  return (
    <div className="flex bg-white rounded-xl py-10 px-10 flex-col w-11/12 justify-center items-start mt-10">
      {itemOneTitle !== undefined &&
      itemTwoTitle !== undefined &&
      itemThreeTitle !== undefined ? (
        <>
          <p className="text-heading-two font-medium text-lg leading-9">
            {title}
          </p>
          <div className="flex w-full space-x-5">
            <div className="w-full flex space-x-4 items-center mt-10">
              <img
                src={itemOneImge}
                alt="project cover"
                className="object-cover h-28 w-28 rounded-xl"
              />
              <div className="flex flex-col">
                <p className="text-heading-two font-bold text-base leading-8">
                  {itemOneTitle}
                </p>
                <div className="flex justify-center items-center space-x-3 mt-2">
                  <ArrowUpRightIcon className="h-10 w-10 font-bold text-login-color" />
                  <div className="flex flex-col">
                    <p className="text-heading-two font-bold text-base leading-8">
                      {itemOnePercentage}
                    </p>
                    <p className="text-[#A098AE] font-normal text-xs leading-5">
                      {title === "Best team member to assign work"
                        ? "Task Engagement"
                        : "Donor Engagement"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex space-x-4 items-center mt-10">
              <img
                src={itemTwoImge}
                alt="project cover"
                className="object-cover h-28 w-28 rounded-xl"
              />
              <div className="flex flex-col">
                <p className="text-heading-two font-bold text-base leading-8">
                  {itemTwoTitle}
                </p>
                <div className="flex justify-center items-center space-x-3 mt-2">
                  <ArrowUpRightIcon className="h-10 w-10 font-bold text-login-color" />
                  <div className="flex flex-col">
                    <p className="text-heading-two font-bold text-base leading-8">
                      {itemTwoPercentage}
                    </p>
                    <p className="text-[#A098AE] font-normal text-xs leading-5">
                      {title === "Best team member to assign work"
                        ? "Task Engagement"
                        : "Donor Engagement"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex space-x-4 items-center mt-10">
              <img
                src={itemThreeImge}
                alt="project cover"
                className="object-cover h-28 w-28 rounded-xl"
              />
              <div className="flex flex-col">
                <p className="text-heading-two font-bold text-base leading-8">
                  {itemThreeTitle}
                </p>
                <div className="flex justify-center items-center space-x-3 mt-2">
                  <ArrowUpRightIcon className="h-10 w-10 font-bold text-login-color" />
                  <div className="flex flex-col">
                    <p className="text-heading-two font-bold text-base leading-8">
                      {itemThreePercentage}
                    </p>
                    <p className="text-[#A098AE] font-normal text-xs leading-5">
                      {title === "Best team member to assign work"
                        ? "Task Engagement"
                        : "Donor Engagement"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="text-center">
          <Spinner aria-label="Center-aligned spinner example" size="xl" />
        </div>
      )}
    </div>
  );
};

export default InsightItem;
