import React from "react";
import { FaEraser } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex px-4 py-2 justify-between items-center shadow-xl">
      <div className="animation hover:scale-125 cursor-pointer flex space-x-2 items-center">
        <FaEraser className="text-2xl text-gray-700" />
        <p className="text-gray-700 font-semibold">EraseBG</p>
      </div>
      <div className="btn">Erase Background</div>
    </div>
  );
};

export default Navbar;
