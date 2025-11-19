import React from "react";

const Label = ({ text }) => {
  return (
    <div className="inline-flex w-fit justify-center items-center text-[12px] rounded-[5px] px-[7px] py-[5px] bg-gray-100 text-gray-500">
      # {text}
    </div>
  );
};

export default Label;
