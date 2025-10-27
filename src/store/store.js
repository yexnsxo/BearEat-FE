import { create } from "zustand";

export const useKeywordStore = create((set) => ({
  keywords: ["무가당", "단백질", "유산균", "울랄라", "어쩌고", "키워드"],
  selected: new Set(),
  maxSelected: 3,
  toggleKeyword: (kw) =>
    set((state) => {
      const next = new Set(state.selected);
      if (next.has(kw)) {
        next.delete(kw);
        return { selected: next };
      }
      if (next.size >= state.maxSelected) {
        alert("최대 3개 선택 가능");
        return state;
      }
      next.add(kw);
      return { selected: next };
    }),
  clearSelected: () => set({ selected: new Set() }),
}));

export const usePriceStore = create((set) => ({
  price: [1000, 100000], // [min, max]
  setPrice: (val) => set({ price: val }),
}));
