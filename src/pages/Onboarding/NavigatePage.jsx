import React from "react";
import LogoColor from "../../assets/LogoColor.svg?react";
import { Link } from "react-router-dom";
import PlusIcon from "../../assets/plusIcon.svg?react";
import RightArrow from "../../assets/RightArrow.svg?react";
import { useState, useEffect } from "react";

const NavigatePage = () => {
  const [fadeIn, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 100);
    return () => {
      clearTimeout(fadeTimer);
    };
  });

  return (
    <div
      className={`flex justify-center transition-opacity duration-500 ${
        fadeIn ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="relative min-h-screen flex flex-col justify-center items-center w-[390px]">
        <div className="text-navy-700 font-bold text-[30px] leading-tight mb-12 mt-18 -ml-10">
          <div>나에게 꼭 맞는</div>
          <div className="inline-flex items-center justify-center">
            건강식품
            <PlusIcon className="w-6 h-6 -ml-[3px] -mt-3" />
            <span className="ml-2">찾으러가기</span>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[76.9vw] h-[35.54vh] flex justify-center items-center">
          <div className="absolute w-[300px] h-[25vh] -z-10 bg-primary blur-[8rem] rounded-full pointer-events-none animate-pulse bg-linear-to-b from-primary-300 to-primary" />
          <LogoColor />
        </div>
        <Link
          to="/survey"
          className="mt-auto mb-30 text-navy-700 font-[bold] flex justify-center items-center gap-1.5 -mr-60"
        >
          시작하기
          <RightArrow />
        </Link>
      </div>
    </div>
  );
};

export default NavigatePage;
