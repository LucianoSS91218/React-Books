import Book from "../components/book";
import Layout from "../components/layout";
import { useBooks } from "../store zustand/Store.js";

export default function Home() {
  const booksContainer = {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  };

  const { books } = useBooks();

  return (
    <Layout>
      <div style={booksContainer}>
        {books.map((item) => (
          <Book key={item.id} item={item} />
        ))}
      </div>
    </Layout>
  );
}
