import React from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { useRecoilValue } from "recoil";
import { fileState } from "../atoms/state";
import MyLoader from "./MyLoader";

const After = () => {
    const file = useRecoilValue(fileState)
  return (
    <div className="flex justify-center">
      <img src={file} alt="" className="w-[40%] h-[300px]" />
      <div className="flex items-center mx-5">
        <div className="h-full w-1 border-l-2 border-gray-700 ml-1"></div>
        <div>
          <BsArrowRightCircleFill className="text-gray-700 text-3xl bg-white -ml-[17px]" />
        </div>
      </div>
      <MyLoader />
    </div>
  );
};

export default After;
