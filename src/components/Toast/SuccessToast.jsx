import { Toast } from "flowbite-react";
import React from "react";
import { CheckIcon } from "@heroicons/react/24/solid";

const SuccessToast = ({ description, isVisible }) => {
  return (
    <div className={`w-full relative ${isVisible ? "block" : "hidden"}`}>
      <div className="absolute top-[15%] left-[40%] right-0 mt-5">
        <Toast>
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
            <CheckIcon className="h-5 w-5" />
          </div>
          <div className="ml-3 text-sm font-normal">{description}</div>
          <Toast.Toggle />
        </Toast>
      </div>
    </div>
  );
};

export default SuccessToast;
