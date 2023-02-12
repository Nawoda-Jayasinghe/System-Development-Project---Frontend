import React from "react";
import { PlayIcon } from "@heroicons/react/24/solid";
const VideoSection = () => {
  return (
    <div className="w-full video-bg min-h-screen mt-40 flex justify-center items-center">
      <a
        href="https://www.youtube.com/watch?v=FX5oLVgvsGY&t=94s"
        target="_blank"
        className="w-40 h-40 outer-circle-bg rounded-full flex justify-center items-center"
        rel="noreferrer"
      >
        <div className="w-28 h-28 rounded-full bg-white flex justify-center items-center">
          <PlayIcon className="h-10 w-10 text-primary" />
        </div>
      </a>
    </div>
  );
};

export default VideoSection;
