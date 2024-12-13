import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layout";

import { useBooks } from "../store zustand/Store";
import "./bookDetail.css";
import FormUpdate from "../pages/FormUpdate.jsx";
export default function BookDetail() {
  const [item, setItem] = useState({});
  const params = useParams();
  const { getItem } = useBooks();

  const [isEditing, setIsEditing] = useState("");
  useEffect(() => {

    const example = getItem(params.bookId);
    setItem(example);
  }, [isEditing]);

  return (
    <Layout>
      <section
        onDoubleClick={() => {
          setIsEditing(item?.id);
        }}
      >
        <h2>{item?.title}</h2>
        <div style={{ fontSize: "30px", textDecoration: "underline" }}>
          {item?.author}
        </div>
        <br />
        <section>
          Generos: {item ? item.genres?.map((a) => a).join(" ") : ""}
        </section>
        <br />
        <div>{item?.completed ? "Completado" : "No terminado"}</div>
        <br />
        <div className="padreimagen">
          {item?.cover ? <img src={item.cover} width="400" /> : ""}
        </div>
        <br />
        <div id="intro">
          <i>{item?.intro}</i>
        </div>
        <br />
        <p>{item?.review}</p>
      </section>
      <br />
      <br />
      <br />
      <br />
      {isEditing ? (
        <>
          <FormUpdate
            {...item}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
          />
        </>
      ) : (
        ""
      )}
    </Layout>
  );
}
