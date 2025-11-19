import React from "react";

const Button4 = ({ keyword, selected, onClick }) => {
  return (
    <div className="">
      <button
        onClick={onClick}
        className={`flex justify-center items-center rounded-[10px] px-[15px] py-[9px] text-[14px] cursor-pointer ${
          selected
            ? "bg-primary text-white font-[Bold]"
            : "bg-gray-100 text-gray-500 font-[SemiBold]"
        }`}
      >
        {keyword}
      </button>
    </div>
  );
};

export default Button4;
