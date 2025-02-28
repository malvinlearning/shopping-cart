import "../styles/ShopPage.css";

export default function ShopPage({ products }) {
  return (
    <section>
      <h2>Shop</h2>
      <div className="shop-grid">
        {products.map((product) => (
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
