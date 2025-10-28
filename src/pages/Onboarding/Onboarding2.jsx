import React from "react";
import Progress2 from "@/assets/Progress2.svg?react";
import { useNavigate } from "react-router-dom";
import ReturnArrow from "@/assets/ReturnArrow.svg?react";
import NextButton from "@/components/Onboarding/NextButton";
import { usePriceStore } from "@/store/store";
import * as Slider from "@radix-ui/react-slider";

const Onboarding2 = () => {
  const navigate = useNavigate();
  const price = usePriceStore((s) => s.price);
  const setPrice = usePriceStore((s) => s.setPrice);
  const fmt = (n) => new Intl.NumberFormat("ko-KR").format(n) + "원";

  return (
    <div className="flex items-center justify-center">
      <div className="w-[390px] flex flex-col items-center justify-center bg-white">
        <div className="relative flex justify-center items-center mt-[58px]">
          <ReturnArrow
            onClick={() => navigate(-1)}
            className="absolute -left-30 top-1/2 -translate-y-1/2 cursor-pointer"
          />
          <Progress2 />
        </div>
        <h1 className="font-[bold] text-navy-700 text-[30px] mt-[92px] w-full pl-[53px]">
          원하시는
          <br />
          <span className="text-primary">가격대</span>를 알려주세요
        </h1>
        <div className="mt-[180px] w-[277px]">
          <Slider.Root
            value={price} // [min,max]
            onValueChange={setPrice} // (val) => setPrice(val)
            min={1000}
            max={100000}
            step={100}
            className="relative flex items-center select-none touch-none w-full h-6"
          >
            <Slider.Track className="bg-gray-200 relative grow rounded-full h-1">
              <Slider.Range className="absolute h-full bg-gray-400 rounded-full" />
            </Slider.Track>

            {/* 손잡이를 두 개 렌더링 => dual-thumb */}
            <Slider.Thumb className="block w-5 h-5 bg-primary rounded-full shadow outline-none focus:ring-2 focus:ring-primary-300" />
            <Slider.Thumb className="block w-5 h-5 bg-primary rounded-full shadow outline-none focus:ring-2 focus:ring-primary-300" />
          </Slider.Root>
          <div className="mt-3 flex justify-between text-navy-700 font-bold">
            <span>{fmt(price[0])}</span>
            <span>{fmt(price[1])}</span>
          </div>
        </div>
        <div className="mt-[116px] w-full flex justify-end pr-6">
          <NextButton ment="다음" direction="onboarding3" />
        </div>
      </div>
    </div>
  );
};

export default Onboarding2;
