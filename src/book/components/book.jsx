import { Link } from "react-router-dom";
export default function Book({ item }) {
  const bookContainerStyle = {
    display: "flex",
    flexDirection: "column",
    width: "300px",
  };

  const bookInfoStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    textDecoration: "none",
    gap: "7px",
    title: {
      color: "#04b815",
    },
  };

  return (
    <div style={bookContainerStyle}>
      <Link to={`/view/${item.id}`} style={bookInfoStyle}>
        <img src={item.cover} width="200" />
        <div style={bookInfoStyle.title}>{item.title}</div>
      </Link>
    </div>
  );
}
