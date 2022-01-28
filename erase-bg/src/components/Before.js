import React from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { fileState } from "../atoms/state";

const Before = () => {
  const [file,setFile] = useRecoilState(fileState);
  const handleChange = (e) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setFile(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <form>
      <label
        htmlFor="fileUpload"
        className="btn mt-8 px-8 hover:px-12 flex items-center space-x-2"
      >
        <FaCloudUploadAlt className="text-2xl" /> <span>Upload Image</span>
      </label>
      <input
        type="file"
        id="fileUpload"
        className="hidden"
        onChange={handleChange}
        accept="image/*"
      />
    </form>
  );
};

export default Before;
