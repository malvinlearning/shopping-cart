import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import MainPage from "./Components/MainPage";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json") // Fetching from public folder
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div>
      <Navbar />
      <MainPage products={products} />
    </div>
  );
};

export default App;
