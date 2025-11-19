import React from "react";
import NextButton from "@/components/Onboarding/NextButton";
import { useCategoryStore } from "@/store/store";
import Button2 from "@/components/Onboarding/Button2";
import ProgressBar from "@/components/Onboarding/ProgressBar";

const Onboarding3 = () => {
  const categories = useCategoryStore((c) => c.categories);
  const selected = useCategoryStore((c) => c.selected);
  const toggleCategory = useCategoryStore((c) => c.toggleCategory);

  const [category] = selected;
  const nextDirection = category === "음료" ? "onboarding5" : "onboarding4";

  return (
    <div className="flex items-center justify-center">
      <div className="w-[390px] flex flex-col items-center justify-center bg-white">
        <ProgressBar step={3} />
        <h1 className="font-[bold] text-navy-700 w-full pl-[53px] text-[30px] mt-[92px]">
          원하시는
          <span className="text-primary"> 식품 종류</span>를<br /> 선택해주세요
        </h1>
        <div className="flex flex-col relative">
          <div className="flex flex-col gap-4 mt-10">
            {categories.map((category, id) => {
              return (
                <Button2
                  key={`category-${id}-${category}`}
                  category={category}
                  selected={selected.has(category)}
                  onClick={() => toggleCategory(category)}
                />
              );
            })}
          </div>
          <div className="absolute -bottom-[25px] right-2 text-gray-300 text-[13px] font-[SemiBold]">
            중복 선택 불가
          </div>
        </div>
        <div className="mt-[68px] w-full px-6 flex justify-end">
          <NextButton ment="다음" direction={nextDirection} />
        </div>
      </div>
    </div>
  );
};

export default Onboarding3;
