import React, { useEffect, useState } from "react";
import model from "../img/model.png";
import arrow from "../img/arrow.png";
import { FaEraser } from "react-icons/fa";
import Before from "./Before";
import { useRecoilState, useRecoilValue } from "recoil";
import { fileState, flagState } from "../atoms/state";
import After from "./After";
const Content = () => {
  const file = useRecoilValue(fileState);
  return (
    <div className="bg-content px-10">
      <div className="pt-[15vh]">
        <p className="text-gray-700 font-semibold text-5xl">Erase Image</p>
        <p className="text-gray-700 font-semibold text-3xl">Background</p>
      </div>
      <div className="flex items-center">
        <img
          src={model}
          alt=""
          className={`w-[40%] duration-500 animation ${file && "w-[0%]"} `}
        />
        <img
          src={arrow}
          alt=""
          className={`w-[20%] durattion-500 animation ${
            file && "w-[0%] hidden"
          }`}
        />
        <Card />
      </div>
    </div>
  );
};

const Card = () => {
  const [flag, setFlag] = useRecoilState(flagState);
  const file = useRecoilValue(fileState);
  useEffect(() => {
    if (!file) return;
    const interval = setTimeout(() => {
      setFlag(true);
    }, 600);
    return () => {
      clearInterval(interval);
    };
  }, [file]);
  useEffect(() => {
      if(!file || !flag) return;

  },[file,flag])
  return (
    <div
      className={`bg-white w-full ml-10 ${
        flag ? "h-[500px]" : "h-[300px]"
      } shadow-2xl rounded-xl flex justify-center items-center flex-col animation`}
    >
      <div>
        <FaEraser className="text-4xl text-gray-700" />
      </div>
      <p className="text-xl text-gray-700 font-semibold mb-5">
        Erase Background
      </p>
      {!file && <Before />}
      {file && flag && <After />}
    </div>
  );
};

export default Content;
