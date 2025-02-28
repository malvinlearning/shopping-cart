import { useContext } from "react";
import { ProductsContext } from "./App";
import "../styles/MainPage.css";

export default function MainPage() {
  const products = useContext(ProductsContext); // Get products from context

  return (
    <section>
      <h2>Featured Products</h2>
      <div className="product-grid">
        {products.slice(0, 4).map((product) => (
          <div key={product.id} className="card">
            <h4>{product.name}</h4>
            <img src={product.image} alt={product.name} />
            <h4>${product.price}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
