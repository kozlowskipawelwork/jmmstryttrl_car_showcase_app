"use client";

import React from "react";
import Image from "next/image";

interface StyledButtonProps {
  title: string;
  handleClick: () => void;
}

const StyledButton = ({ title, handleClick }: StyledButtonProps) => {
  return (
    <button
      type={"button"}
      disabled={false}
      onClick={handleClick}
      className={`custom-btn bg-black hover:bg-gray-800 text-gray-200 font-extrabold py-2 px-4 rounded transition-all duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-110 shadow-lg hover:shadow-2xl`}
    >
      <span className={`flex-1`}></span>
      {title}
    </button>
  );
};

export default StyledButton;
