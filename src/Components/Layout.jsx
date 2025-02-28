import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet /> {/* This is where MainPage or ShopPage will render */}
    </div>
  );
}
