import React from "react";
import Logo from "@/assets/Logo.svg?react";
import { Link } from "react-router-dom";
import GoTo from "@/assets/GoTo.svg?react";

const ResultPage = () => {
  return (
    <div className="bg-primary min-h-screen flex justify-center items-center">
      <div className="relative w-[430px] flex flex-col justify-center items-center">
        <Logo className="animate-bounce mt-10 md:mt-[100px]" />
        <div className="text-white font-[Bold] text-[30px] text-center mt-2.5">
          추천 결과가 나왔어요!
          <br />
          보러 가볼까요?
        </div>
        <Link className="mt-[120px] w-full px-6 flex justify-end text-white font-[SemiBold] text-[23px] items-center gap-2">
          보러가기
          <GoTo />
        </Link>
      </div>
    </div>
  );
};

export default ResultPage;
