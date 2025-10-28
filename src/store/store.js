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

export const useCategoryStore = create((set) => ({
  categories: ["음료", "간식 & 디저트", "식사 대체 & 간편식", "조리 재료"],
  selected: new Set(),
  maxSelected: 1,
  toggleCategory: (c) =>
    set((state) => {
      const next = new Set(state.selected);
      if (next.has(c)) {
        next.delete(c);
        return { selected: next };
      }
      if (state.maxSelected === 1) {
        return { selected: new Set([c]) };
      }
      next.add(c);
      return { selected: next };
    }),
  clearSelected: () => set({ selected: new Set() }),
}));
