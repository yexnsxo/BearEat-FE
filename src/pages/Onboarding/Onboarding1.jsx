import Button1 from "../../components/Onboarding/button1";
import NextButton from "../../components/Onboarding/NextButton";
import { useKeywordStore } from "../../store/store";
import ProgressBar from "@/components/Onboarding/ProgressBar";

const Onboarding1 = () => {
  const keywords = useKeywordStore((s) => s.keywords);
  const selected = useKeywordStore((s) => s.selected);
  const toggleKeyword = useKeywordStore((s) => s.toggleKeyword);

  return (
    <div className="w-screen flex items-center justify-center bg-white">
      <div className="w-[390px] flex flex-col items-center justify-center">
        <ProgressBar step={1} />
        <h1 className="font-[bold] text-navy-700 text-[30px] mt-[92px]">
          선호하는
          <span className="text-primary"> 건강 키워드</span>를<br />
          선택해주세요
        </h1>
        <div className="flex flex-col relative">
          <div className="grid grid-cols-2 gap-4 mt-[54px]">
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
          <div className="absolute -bottom-[25px] right-2 text-gray-300 text-[13px] font-[SemiBold]">
            최대 3개 선택 가능
          </div>
        </div>
        <div className="mt-[120px] w-full px-6 flex justify-end">
          <NextButton ment="다음" direction="onboarding2" />
        </div>
      </div>
    </div>
  );
};

export default Onboarding1;
