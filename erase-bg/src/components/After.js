import React, { useEffect, useState } from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { FaCloudDownloadAlt, FaCloudUploadAlt } from "react-icons/fa";
import { useRecoilValue } from "recoil";
import { fileState } from "../atoms/state";
import MyLoader from "./MyLoader";
import { url } from "../constants/url";
import axios from "axios";
import { handleDownload } from "../functions/handleDownload";

const After = () => {
  const file = useRecoilValue(fileState);
  const [img, setImg] = useState(null);
  useEffect(() => {
    if (!file) return;
    async function fetch() {
      try {
        const rsp = await axios.post(`${url}/erase`, { img: file });
        setImg(`data:image/png;base64,${rsp.data}`);
      } catch (error) {
        console.log(error);
        return;
      }
    }
    fetch();
  }, [file]);
  const handleDownloadClick = async () => {
    await handleDownload(img)
  };
  return (
    <>
      <div className="flex justify-center">
        <img src={file} alt="" className="w-[40%] h-[300px] bg-black" />
        <div className="flex items-center ml-10">
          <div className="h-full w-1 border-l-2 border-gray-700 ml-1"></div>
          <div>
            <BsArrowRightCircleFill className="text-gray-700 text-3xl bg-white -ml-[17px]" />
          </div>
        </div>
        {img ? (
          <div className="flex flex-col justify-center items-center ml-5">
            <img src={img} alt="" className="w-full h-[250px] border bg-transparent" />
            <div className="flex items-center justify-center space-x-3 px-10">
              <div
                className="btn mt-2 flex items-center justify-center space-x-2"
                onClick={handleDownloadClick}
              >
                <FaCloudDownloadAlt className="text-2xl" />{" "}
                <span>Download Image</span>
              </div>
              <div
                className="btn bg-white text-c1 border-2 border-c1 mt-2 flex items-center justify-center space-x-2"
                onClick={() => window.location.reload()}
              >
                <FaCloudUploadAlt className="text-2xl" />{" "}
                <span>Upload Again</span>
              </div>
            </div>
          </div>
        ) : (
          <MyLoader />
        )}
      </div>
    </>
  );
};

export default After;
