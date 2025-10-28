import { useEffect, useState } from "react";
import React from "react";
import LogoColor from "@/assets/LogoColor.svg?react";

const Loading = () => {
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
      <div className="relative min-h-screen flex flex-col justify-center items-center w-[390px] bg-white">
        <div className="absolute top-105 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[76.9vw] h-[35.54vh] flex flex-col justify-center items-center">
          <div>
            <div className="absolute w-[300px] h-[25vh] -z-10 bg-primary blur-[8rem] rounded-full pointer-events-none animate-pulse bg-linear-to-b from-primary-300 to-primary" />
            <LogoColor />
          </div>
          <div className="font-[SemiBold] text-navy-700 text-[20px] mt-[100px]">
            조건에 맞는 건강 식품을
            <br />
            찾는 중 입니다...
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
