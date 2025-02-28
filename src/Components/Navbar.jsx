import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";
import Icon from "@mdi/react";
import { mdiCartOutline } from "@mdi/js";

export default function Navbar() {
  return (
    <header>
      <nav>
        <img className="logo" src={logo} alt="Logo" />
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Icon className="icon" path={mdiCartOutline} size={1} />
      </nav>
    </header>
  );
}
