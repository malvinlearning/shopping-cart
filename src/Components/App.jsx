import { createContext, useState, useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import MainPage from "./MainPage";
import ShopPage from "./Shop";

// Create Context to Share Products Data
export const ProductsContext = createContext();

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]); // Cart state

  useEffect(() => {
    fetch("/products.json") // Fetching from public folder
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.product.id === product.id);

      if (existingItem) {
        return prevCart.map((item) => 
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { product, quantity: 1 }];
      }
    });
  };

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
    <ProductsContext.Provider value={{products, cart, addToCart}}>
      <RouterProvider router={router} />
    </ProductsContext.Provider>
  );
};

export default App;