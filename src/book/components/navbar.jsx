import { Link } from "react-router-dom";
import "./Navbar.css";
export default function NavBar() {
  const linkStyle = {
    padding: "10px",
    fontSize: "22px",
    textDecoration: "none",
    color: "#090909",
  };

  const linkStyleTwo = {
    padding: "10px",
    fontSize: "23px",
    textDecoration: "none",
    color: "#fcfcfc",
    fontWeight: "800",
  };

  const navContainerStyle = {
    backgroundColor: "#038285",
    padding: "10px",
    display: "flex",
    justifyContent: "space-around",
  };

  return (
    <div style={navContainerStyle} className="navbar">
      <Link to="/" style={linkStyle}>
        HOME
      </Link>
      <Link to="/create" style={linkStyleTwo}>
        Create
      </Link>
    </div>
  );
}
