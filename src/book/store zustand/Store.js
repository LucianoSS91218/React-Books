import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

const getBooksLS = () => {
  return JSON.parse(window.localStorage.getItem("books")) || [];
};

const updateLocalStorage = (state) => {
  window.localStorage.setItem("books", JSON.stringify(state));
};

export const useBooks = create()(
  devtools(
    persist(
      (set, get) => ({
        books: getBooksLS(),
        createItem: (newest) => {
          const getstate = get().books;

          const temp = [...getstate];

          temp.unshift(newest);

          updateLocalStorage([...temp]);
          set(() => ({
            books: [...temp],
          }));
        },

        getItem: (id) => {
          const getstate = get().books;
          const item = getstate.find((item) => item.id === id);
          return item;
        },

        updateItem: ({
          id,
          title,
          author,
          completed,
          cover,
          intro,
          review,
        }) => {
          const getstate = get().books;
          const editedBook = getstate.map((book) => {
            if (book.id === id) {
              return {
                ...book,
                title,
                author,
                completed,
                cover,
                intro,
                review,
              };
            }
            return book;
          });

          const temp = [...editedBook];
          updateLocalStorage([...temp]);
          set(() => ({
            books: [...temp],
          }));
        },
      }),
      {
        name: "books",
      }
    )
  )
);
