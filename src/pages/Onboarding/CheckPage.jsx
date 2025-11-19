import React from "react";
import {
  useKeywordStore,
  usePriceStore,
  useCategoryStore,
  useDetailCategoryStore,
  usePurposeStore,
} from "@/store/store";
import Label from "@/components/Onboarding/Label";
import Menu from "@/components/Onboarding/Menu";
import { Link } from "react-router-dom";

const CheckPage = () => {
  const rawSelectedKeyword = useKeywordStore((s) => s.selected);
  const selectedKeyword = [...rawSelectedKeyword];
  const minPrice = usePriceStore((p) => p.price[0]);
  const maxPrice = usePriceStore((p) => p.price[1]);
  const selectedCategory = useCategoryStore((s) => s.selected);
  const selectedDetailCategory = useDetailCategoryStore((s) => s.selected);
  const selectedCategories = [...selectedCategory, ...selectedDetailCategory];
  const rawSelectedPurposes = usePurposeStore((s) => s.selected);
  const selectedPurposes = [...rawSelectedPurposes];
  return (
    <div className="w-screen flex items-center justify-center bg-white">
      <div className="w-[390px] flex flex-col items-center justify-center">
        <h1 className="w-full pl-[53px] font-[bold] text-navy-700 text-[30px] mt-[92px]">
          선택하신 항목이 맞나요?
        </h1>
        <div className="flex flex-col gap-[25px] mt-10">
          <div className="flex flex-col w-[280px] gap-1">
            <Menu menu={"건강키워드"} />
            <div className="flex flex-wrap gap-[9px]">
              {selectedKeyword.map((s) => (
                <div key={s}>
                  <Label text={s} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <Menu menu={"가격"} />
            <div className="text-gray-500 text-[13px] font-[Medium]">
              {minPrice}원 ~ {maxPrice}원
            </div>
          </div>
          <div className="flex flex-col gap-1 w-[280px]">
            <Menu menu={"식품 카테고리"} />
            <div className="flex flex-wrap gap-[9px]">
              {selectedCategories.map((s) => (
                <div key={s}>
                  <Label text={s} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-1 w-[280px]">
            <Menu menu={"구매 목적"} />
            <div className="flex flex-wrap gap-[9px]">
              {selectedPurposes.map((s) => (
                <div key={s}>
                  <Label text={s} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 mt-10">
          <button className="w-[284px] h-10 bg-primary text-white font-[SemiBold] rounded-[10px] cursor-pointer">
            네 맞아요
          </button>
          <Link
            to={"/onboarding1"}
            className="flex justify-center items-center w-[284px] h-10 bg-gray-100 text-gray-500 font-[SemiBold] rounded-[10px] cursor-pointer"
          >
            아니요 다시 선택할래요
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckPage;
