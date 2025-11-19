import React from "react";

const Button2 = ({ category, selected, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={`flex justify-center items-center rounded-[15px] w-[297px] h-[50px] text-[20px] cursor-pointer ${
          selected
            ? "bg-primary text-white font-[Bold]"
            : "bg-gray-100 text-gray-500 font-[SemiBold]"
        }`}
      >
        {category}
      </button>
    </div>
  );
};

export default Button2;
