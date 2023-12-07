import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
const ExitButton = ({ destination = "/" }) => {
  return (
    <div className="flex ">
      <Link
        to={destination}
        className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-full"
      >
        <BsArrowLeft className="text-2xl" />
      </Link>
    </div>
  );
};

export default ExitButton;
