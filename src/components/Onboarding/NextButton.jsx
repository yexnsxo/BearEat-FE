import React from "react";
import { Link } from "react-router-dom";
import RightArrow from "../../assets/RightArrow.svg?react";

const NextButton = ({ ment, direction }) => {
  return (
    <div>
      <Link
        to={`/${direction}`}
        className="text-navy-700 font-[bold] flex justify-center items-center gap-1.5 "
      >
        {ment}
        <RightArrow />
      </Link>
    </div>
  );
};

export default NextButton;
