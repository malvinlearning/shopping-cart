import { createContext, useState, useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import MainPage from "./MainPage";
import ShopPage from "./Shop";

// Create Context to Share Products Data
export const ProductsContext = createContext();

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json") // Fetching from public folder
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, // Navbar is inside Layout
      children: [
        { path: "/", element: <MainPage /> },
        { path: "/shop", element: <ShopPage /> },
      ],
    },
  ]);

  return (
    <ProductsContext.Provider value={products}>
      <RouterProvider router={router} />
    </ProductsContext.Provider>
  );
};

export default App;