import '../styles/MainPage.css';
export default function MainPage({products}) {
    return (
        <section>
            <div>
                {products.slice(0, 4).map((product) => (
                    <div key={product.id} className="card">
                        <h4>{product.name}</h4>
                        <img src={product.image} alt="" />
                        <h4>${product.price}</h4>
                    </div>
                ))}
            </div>
        </section>
        
    )
}