import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

export const useFilters = create()(
  devtools(
    persist((set, get) => ({
      filter: "drama",
      setFilter: (genre) => set({ filter: genre }),
      filterBooks: (books) => {
        const getstate = get().filter;
        return books.filter((book) => {
          return getstate === "all" || book.genres.includes(getstate);
        });
      },
    }))
  )
);
