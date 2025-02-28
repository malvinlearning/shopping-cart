import '../styles/Cart.css';

export default function Cart({ closeCart }) {
    return (
        <aside className="show">
            <div>
                <h1>Cart</h1>
                <h1 className='close' onClick={closeCart}>X</h1>
            </div>
            
            <button>Check Out</button>
        </aside>
    );
}
