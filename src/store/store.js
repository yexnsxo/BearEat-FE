import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useKeywordStore = create(
  persist(
    (set) => ({
      keywords: ["제로", "저당", "무설탕", "유기농", "유산균", "프로틴"],
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
    }),
    {
      name: "keyword-storage",
      partialize: (state) => ({
        selected: Array.from(state.selected),
      }),

      onRehydrateStorage: () => (state) => {
        if (state) {
          state.selected = new Set(state.selected);
        }
      },
    }
  )
);

export const usePriceStore = create(
  persist(
    (set) => ({
      price: [1000, 100000],
      setPrice: (val) => set({ price: val }),
    }),
    {
      name: "price-storage",
    }
  )
);

export const useCategoryStore = create(
  persist(
    (set) => ({
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
    }),
    {
      name: "category-storage",
      partialize: (state) => ({
        selected: Array.from(state.selected),
      }),
      onRehydrateStorage: () => (state) => {
        if (state) state.selected = new Set(state.selected);
      },
    }
  )
);

export const useDetailCategoryStore = create(
  persist(
    (set, get) => ({
      data: {
        "간식 & 디저트": [
          "과자& \n 베이커리",
          "떡",
          "잼& \n 시럽",
          "유제품 \n (치즈, 요거트)",
          "다이어트\n 식품",
        ],
        "식사 대체 & 간편식": [
          "냉동 식품",
          "간편조리 식품",
          "라면/면류",
          "반찬",
          "닭가슴살",
        ],
        "조리 재료": ["통조림", "양념", "드레싱", "농산물", "반찬"],
      },
      selected: new Set(),
      maxSelected: 3,
      getDetailsByCategory: (category) => {
        const data = get().data;
        return data[category] ?? [];
      },
      toggleDetailCategory: (dc) =>
        set((state) => {
          const next = new Set(state.selected);
          if (next.has(dc)) {
            next.delete(dc);
            return { selected: next };
          }
          if (next.size >= state.maxSelected) {
            alert("최대 3개 선택 가능");
            return state;
          }
          next.add(dc);
          return { selected: next };
        }),
      clearSelected: () => set({ selected: new Set() }),
    }),
    {
      name: "detail-category-storage",
      partialize: (state) => ({
        selected: Array.from(state.selected),
      }),
      onRehydrateStorage: () => (state) => {
        if (state) state.selected = new Set(state.selected);
      },
    }
  )
);
