import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";
import Icon from "@mdi/react";
import { mdiCartOutline } from "@mdi/js";
import Cart from "./Cart";
import { useState } from "react";

export default function Navbar() {
  const [cartOpen, setCartOpen] = useState(false);

  const toggleCart = () => setCartOpen((prevState) => !prevState);

  // Close cart function
  const closeCart = () => setCartOpen(false);

  return (
    <header>
      <nav>
        <img className="logo" src={logo} alt="Logo" />
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <button onClick={toggleCart} className="cart-button">
          <Icon className="icon" path={mdiCartOutline} size={1} />
        </button>
        {cartOpen && <Cart closeCart={closeCart} />}
      </nav>
    </header>
  );
}
