import React from "react";
import { FaEraser } from "react-icons/fa";
import { useRecoilState, useRecoilValue } from "recoil";
import { fileState } from "../atoms/state";

const Navbar = () => {
  const [file,setFile] = useRecoilState(fileState);
  const handleChange = (e) => {
    if (file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setFile(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <div className="flex px-4 py-2 justify-between items-center shadow-xl">
      <div className="animation hover:scale-125 cursor-pointer flex space-x-2 items-center">
        <FaEraser className="text-2xl text-gray-700" />
        <p className="text-gray-700 font-semibold">EraseBG</p>
      </div>
      <form>
        <label
          htmlFor="fileUpload"
          className={`btn px-2 sm:px-3 text-sm sm:text-base ${
            file && "cursor-not-allowed opacity-60"
          }`}
        >
          Erase Background
        </label>
        <input
          type="file"
          id="fileUpload"
          className="hidden"
          onChange={handleChange}
          accept="image/*"
          disabled={file ? true : false}
        />
      </form>
    </div>
  );
};

export default Navbar;
