import { useContext } from "react";
import { ProductsContext } from "./App";
import "../styles/Cart.css";

export default function Cart({ closeCart }) {
  const { cart } = useContext(ProductsContext); // Get cart items

  return (
    <aside className="show">
      <div>
        <h1>Cart</h1>
        <h1 className='close' onClick={closeCart}>X</h1>
      </div>

      {cart.length > 0 ? (
        <div className="cart-items">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <h4>{item.product.name}</h4>
              <img src={item.product.image} alt={item.product.name} />
              <h4>${item.product.price}</h4>
              <p>Quantity: {item.quantity}</p> {/* Show quantity */}
            </div>
          ))}
          <button>Check Out</button>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </aside>
  );
}