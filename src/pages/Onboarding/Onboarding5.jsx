import React from "react";
import ProgressBar from "@/components/Onboarding/ProgressBar";
import Button4 from "@/components/Onboarding/Button4";
import { useCategoryStore, usePurposeStore } from "@/store/store";
import NextButton from "@/components/Onboarding/NextButton";
import InputBox from "@/components/Onboarding/InputBox";

const Onboarding5 = () => {
  const categorySelected = useCategoryStore((s) => s.selected);
  const selectedCategory = [...categorySelected][0];

  const data = usePurposeStore((s) => s.data);
  const defaultData = usePurposeStore((s) => s.defaultData);
  const customPurposes = usePurposeStore((s) => s.customPurposes);

  const detailList = selectedCategory
    ? [...defaultData, ...(data[selectedCategory] ?? []), ...customPurposes]
    : [];
  const detailSelected = usePurposeStore((s) => s.selected);
  const togglePurpose = usePurposeStore((s) => s.togglePurpose);

  return (
    <div className="w-screen flex items-center justify-center bg-white">
      <div className="w-[390px] flex flex-col items-center justify-center">
        <ProgressBar step={5} />
        <h1 className="font-[bold] w-full pl-[53px] text-navy-700 text-[30px] mt-[92px]">
          건강식품
          <span className="text-primary"> 구매 목적</span>을<br />
          알려주세요
        </h1>
        <div className="flex flex-col relative">
          <div className="flex flex-wrap w-[300px] gap-3 mt-[54px]">
            {detailList.map((keyword, id) => {
              return (
                <Button4
                  key={`keyword-${id}-${keyword}`}
                  keyword={keyword}
                  selected={detailSelected.has(keyword)}
                  onClick={() => togglePurpose(keyword)}
                />
              );
            })}
            <InputBox />
          </div>
          <div className="absolute -bottom-[25px] right-4 text-gray-300 text-[13px] font-[SemiBold]">
            최대 3개 선택 가능
          </div>
        </div>
        <div className="mt-[121px] w-full px-6 flex justify-end">
          <NextButton ment="다음" direction="check" />
        </div>
      </div>
    </div>
  );
};

export default Onboarding5;
