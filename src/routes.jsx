import App from "./App";
import Navbar from "./Components/Navbar";
import MainPage from "./Components/MainPage";
import ShopPage from "./Components/Shop";

const routes = [
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <MainPage />
      </>
    ),
  },
  {
    path: "/shop",
    element: (
      <>
        <Navbar />
        <ShopPage />
      </>
    ),
  },
];

export default routes;