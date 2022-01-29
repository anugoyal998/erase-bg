import React, { useEffect } from "react";
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
    <div className="bg-content px-2 sm:px-10 h-screen overflow-y-scroll scrollbar-hide">
      <div className="pt-[10vh] sm:pt-[15vh]">
        <p className="text-gray-700 font-semibold text-3xl sm:text-5xl">
          Erase Image
        </p>
        <p className="text-gray-700 font-semibold text-xl sm:text-3xl">
          Background
        </p>
      </div>
      <div className="flex items-center flex-col lg:flex-row">
        <img
          src={model}
          alt=""
          className={`duration-500 animation ${
            file ? "w-0" : "w-[70%] sm:w-[60%] lg:w-[40%]"
          }`}
        />
        <img
          src={arrow}
          alt=""
          className={`durattion-500 animation hidden lg:inline-flex ${
            file ? "w-0" : "w-[20%]"
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
    if (!file || !flag) return;
  }, [file, flag]);
  return (
    <div
      className={`bg-white w-screen sm:w-[80vw] lg:w-full ${
        flag ? "h-[400px] sm:h-[500px]" : "h-[300px]"
      }  ${
        file ? "ml-0" : "lg:ml-10"
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
