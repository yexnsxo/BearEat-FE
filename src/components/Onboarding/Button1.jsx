import React from "react";

const Button1 = ({ keyword, selected, onClick }) => {
  return (
    <div className="">
      <button
        onClick={onClick}
        className={`flex justify-center items-center rounded-[15px] w-[135px] h-[50px] text-[20px] cursor-pointer ${
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

export default Button1;
