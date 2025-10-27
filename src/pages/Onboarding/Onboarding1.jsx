import Button1 from "../../components/Onboarding/button1";
import Progress1 from "../../assets/Progress1.svg?react";
import ReturnArrow from "../../assets/ReturnArrow.svg?react";
import { Link, useNavigate } from "react-router-dom";
import NextButton from "../../components/Onboarding/NextButton";
import useKeywordStore from "../../store/store";

const Onboarding1 = () => {
  const keywords = useKeywordStore((s) => s.keywords);
  const selected = useKeywordStore((s) => s.selected);
  const toggleKeyword = useKeywordStore((s) => s.toggleKeyword);

  const navigate = useNavigate();

  return (
    <div className="w-screen flex items-center justify-center">
      <div className="w-[390px]">
        <div className="relative flex justify-center items-center mt-[58px]">
          <ReturnArrow
            onClick={() => navigate(-1)}
            className="absolute left-6 top-1/2 -translate-y-1/2 cursor-pointer"
          />
          <Progress1 />
        </div>
        <h1 className="font-[bold] text-navy-700 text-[30px] mt-[92px] ml-[42px]">
          선호하는
          <br /> <span className="text-primary">건강 키워드</span>를
          선택해주세요
        </h1>
        <div className="flex flex-col relative">
          <div className="grid grid-cols-2 gap-4 ml-[52px] mt-[54px]">
            {keywords.map((keyword, id) => {
              return (
                <Button1
                  key={`keyword-${id}-${keyword}`}
                  keyword={keyword}
                  selected={selected.has(keyword)}
                  onClick={() => toggleKeyword(keyword)}
                />
              );
            })}
          </div>
          <div className="absolute -bottom-[25px] right-8 text-gray-300 text-[13px] font-[SemiBold]">
            최대 3개 선택 가능
          </div>
        </div>
        <div className="mt-[83px] -mr-[280px]">
          <NextButton ment="다음" direction="onboarding2" />
        </div>
      </div>
    </div>
  );
};

export default Onboarding1;
