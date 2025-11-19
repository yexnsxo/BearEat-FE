import React from "react";

const Button3 = ({ keyword, selected, onClick }) => {
  return (
    <div className="">
      <button
        onClick={onClick}
        className={`flex justify-center items-center rounded-[30px] w-[79px] h-[77px] whitespace-pre-line text-[12px] cursor-pointer ${
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

export default Button3;
