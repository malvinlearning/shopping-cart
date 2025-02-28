import { useContext } from "react";
import { ProductsContext } from "./App";
import "../styles/MainPage.css";

export default function MainPage() {
  const { products, addToCart } = useContext(ProductsContext); // Get products & addToCart function
  
  return (
    <section className="mainPage-section">
      <h2>Featured Products</h2>
      <div className="product-grid">
        {products.slice(0, 4).map((product) => (
          <div key={product.id} className="card">
            <h4>{product.name}</h4>
            <img src={product.image} alt={product.name} />
            <div className="price-button">
              <h4>${product.price}</h4>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
