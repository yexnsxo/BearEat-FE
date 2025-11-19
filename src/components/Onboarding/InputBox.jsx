import React, { useState, useRef } from "react";
import SubmitBtn from "@/assets/SubmitBtn.svg?react";
import { usePurposeStore } from "@/store/store";

const InputBox = () => {
  const [value, setValue] = useState("");
  const addCustomPurpose = usePurposeStore((s) => s.addCustomPurpose);
  const [composing, setComposing] = useState(false);
  const submittingRef = useRef(false);

  const handleSubmit = () => {
    const v = value.trim();
    if (!v) return alert("값을 입력해주세요");
    addCustomPurpose(v);
    setValue("");
    submittingRef.current = false;
  };

  const handleKeyDown = (e) => {
    if (composing || e.isComposing || e.nativeEvent?.isComposing) return;

    if (e.key === "Enter") {
      e.preventDefault();
      e.stopPropagation();
      handleSubmit();
    }
  };
  return (
    <div className="w-[286px] px-2 h-[37px] rounded-[10px] shadow-[0_0_5px_rgba(149,149,149,0.25)] flex justify-start items-center focus-within:shadow-[0_0_5px_rgba(66,205,173,0.7)] ">
      <input
        className="outline-none border-none pl-1 placeholder:text-gray-300 text-[11px] font-[SemiBold] w-full"
        placeholder="직접 입력하기"
        value={value} // 🔹 여기!
        onCompositionStart={() => setComposing(true)}
        onCompositionEnd={() => setComposing(false)}
        onChange={(e) => setValue(e.target.value)} // 🔹 여기!
        onKeyDown={handleKeyDown}
      />
      <SubmitBtn
        onClick={handleSubmit}
        className="
          cursor-pointer
          [&_.bg]:fill-[#F2F2F2]
          [&_.icon]:fill-[#C0C0C0]
          hover:[&_.bg]:fill-[#42CDAD]
          hover:[&_.icon]:fill-[#ffffff]
        "
      />
    </div>
  );
};

export default InputBox;
