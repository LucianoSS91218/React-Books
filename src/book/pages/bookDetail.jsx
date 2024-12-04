import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layout";
import { useBooks } from "../store zustand/Store";

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
      <aside
        onDoubleClick={() => {
          setIsEditing(item?.id);
        }}
      >
        <h2>{item?.title}</h2>
        <div>{item?.author}</div>
        <div>{item?.completed ? "Completado" : "No terminado"}</div>
        <div>{item?.cover ? <img src={item.cover} width="400" /> : ""}</div>
        <div>{item?.intro}</div>
        <div>{item?.review}</div>
      </aside>
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
