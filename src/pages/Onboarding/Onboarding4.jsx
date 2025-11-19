import React from "react";
import ProgressBar from "@/components/Onboarding/ProgressBar";
import { useCategoryStore, useDetailCategoryStore } from "@/store/store";
import Button3 from "@/components/Onboarding/Button3";
import NextButton from "@/components/Onboarding/NextButton";

const Onboarding4 = () => {
  const categorySelected = useCategoryStore((s) => s.selected);
  const detailSelected = useDetailCategoryStore((s) => s.selected);
  const getDetailsByCategory = useDetailCategoryStore(
    (s) => s.getDetailsByCategory
  );
  const toggleDetailCategory = useDetailCategoryStore(
    (s) => s.toggleDetailCategory
  );

  const selectedCategory = [...categorySelected][0];
  const detailList = selectedCategory
    ? getDetailsByCategory(selectedCategory)
    : [];
  return (
    <div className="w-screen flex items-center justify-center bg-white">
      <div className="w-[390px] flex flex-col items-center justify-center">
        <ProgressBar step={4} />
        <h1 className="font-[bold] w-full pl-[53px] text-navy-700 text-[30px] mt-[92px]">
          식품의
          <span className="text-primary"> 세부 카테고리</span>를<br />
          선택해주세요
        </h1>
        <div className="flex flex-col relative">
          <div className="grid grid-cols-3 gap-4 mt-[54px]">
            {detailList.map((keyword, id) => {
              return (
                <Button3
                  key={`keyword-${id}-${keyword}`}
                  keyword={keyword}
                  selected={detailSelected.has(keyword)}
                  onClick={() => toggleDetailCategory(keyword)}
                />
              );
            })}
          </div>
          <div className="absolute -bottom-[25px] right-2 text-gray-300 text-[13px] font-[SemiBold]">
            최대 3개 선택 가능
          </div>
        </div>
        <div className="mt-[132px] w-full px-6 flex justify-end">
          <NextButton ment="다음" direction="onboarding5" />
        </div>
      </div>
    </div>
  );
};

export default Onboarding4;
