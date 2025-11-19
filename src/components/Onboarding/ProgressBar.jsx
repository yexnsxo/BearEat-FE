import React from "react";
import { useNavigate } from "react-router-dom";
import Progress1 from "@/assets/Progress1.svg?react";
import Progress2 from "@/assets/Progress2.svg?react";
import Progress3 from "@/assets/Progress3.svg?react";
import Progress4 from "@/assets/Progress4.svg?react";
import Progress5 from "@/assets/Progress5.svg?react";
import ReturnArrow from "@/assets/ReturnArrow.svg?react";

const ProgressBar = ({ step }) => {
  const navigate = useNavigate();

  const progressImg = {
    1: <Progress1 />,
    2: <Progress2 />,
    3: <Progress3 />,
    4: <Progress4 />,
    5: <Progress5 />,
  };

  const ProgressImg = progressImg[step];

  return (
    <div>
      <div className="relative mt-[58px]">
        <ReturnArrow
          onClick={() => navigate(-1)}
          className="absolute -left-30 top-1/2 -translate-y-1/2 cursor-pointer"
        />
        {ProgressImg}
      </div>
    </div>
  );
};

export default ProgressBar;
