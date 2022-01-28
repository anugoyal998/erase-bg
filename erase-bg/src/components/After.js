import React, { useEffect, useState } from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { useRecoilValue } from "recoil";
import { fileState } from "../atoms/state";
import MyLoader from "./MyLoader";
import {url} from '../constants/url'
import axios from "axios"

const After = () => {
    const file = useRecoilValue(fileState)
    const [img,setImg] = useState(null)
    useEffect(()=> {
      if(!file)return
      async function fetch(){
        try {
          const rsp = await axios.post(`${url}/erase`,{img: file})
          setImg(`data:image/jpeg;base64,${rsp.data}`)
        } catch (error) {
          console.log(error)
          return
        }
      }
      fetch()
    },[file])
  return (
    <>
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
    <img src={img} alt="" />
    </>
  );
};

export default After;
