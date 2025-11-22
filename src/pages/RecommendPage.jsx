import React from "react";
import { RecommendCard } from "@/components/Recommend/RecommendCard";
import { RefreshCw, Sparkles } from "lucide-react";

const RecommendPage = () => {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-muted/20">
        <div className="w-[390px] flex flex-col items-center justify-center bg-white px-4 py-8">
          <div className="w-full flex flex-col justify-start mb-6 text-start animate-fade-in">
            <h1 className="text-3xl font-[Bold] text-navy-700 text-[30px] mb-1">
              추천 제품
            </h1>
            <p className="text-gray-500 font-[SemiBold] text-[16px]">
              선택하신 조건에 맞는 제품을 찾았어요
            </p>
            <p className="text-gray-300 font-[Medium] text-[11px]">
              제품 정보는 실제와 다를 수 있습니다
            </p>
          </div>
          <RecommendCard />
          <div className="w-full mt-6 space-y-3 animate-fade-in">
            <button
              variant="outline"
              className="flex justify-center items-center cursor-pointer w-full h-10 border-2 shadow-[0_0_10px_rgba(149,149,149,0.25)] border-gray-300/50 hover:bg-gray-100/50 py-6 rounded-xl font-semibold transition-all bg-transparent text-foreground"
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              다시 추천 받기
            </button>
            <button
              variant="outline"
              className="flex justify-center cursor-pointer items-center w-full h-10 border-2 shadow-[0_0_10px_rgba(79,238,175,0.25)] border-primary/30 hover:bg-primary/5 hover:border-primary/50 py-6 rounded-xl font-semibold transition-all bg-transparent text-foreground"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              새로 추천 받기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendPage;
