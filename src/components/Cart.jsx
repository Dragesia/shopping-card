import { useNavigate } from "react-router-dom";

function CartItem({ cart, setCart, item }) {
    const itemCount = cart.filter((i) => (i === item)).length;

    function handleDecrease() {
        let isDeleted = false;
        setCart(cart.filter(i => {
            if (!isDeleted && i.id === item.id) {
                isDeleted = true;
                return false;
            } else return true;
        }))
    }

    function handleIncrease() {
        setCart([...cart, item]);
    }

    return (
        <div className="cart-item">
            <img src={item.link} alt={item.name} />
            <div className="cart-item-info">
                <p className="cart-name">{item.name}</p>
                <div className="quantity-input">
                    <button onClick={handleDecrease} className="decr">-</button>
                    <div className="itemcount">{itemCount}</div>
                    <button onClick={handleIncrease} className="incr">+</button>
                </div>
                <div className="price">{item.price}</div>
            </div>
        </div>
    )
}

export default function Cart({ isOpen, cart, setCart, handleClose }) {
    const navigate = useNavigate();

    let subtotal = 0;
    cart.forEach(item => {
        subtotal += item.price;
    });

    const uniqCart = [...new Set(cart)];

    return (
        <>
            <div className="cart" style={{width: isOpen ? '600px' : '0', padding: isOpen ? '100px 70px 0 70px' : '0'}}>
                <button onClick={handleClose} className="cart-close">x</button>
                <h1>Your Bag</h1>
                <div className="items">
                    {uniqCart.map(item => <CartItem cart={cart} setCart={setCart} item={item} key={item.id}/>)}
                    {cart.length === 0 && <p>Your bag is empty.</p>}
                </div>
                <div className="cart-buttons">
                    {cart.length !== 0 && <p className="subtotal">Subtotal: ${subtotal.toFixed(2)}</p>}
                    {cart.length !== 0 && <button className="checkout">CHECKOUT</button>}
                    {cart.length === 0 && <button className='browse-products' onClick={() => {navigate('/catalog'); handleClose();}}>BROWSE PRODUCTS</button>}
                </div>
            </div>
        
            {isOpen && <div className="modal" onClick={handleClose}></div>}
        </>
        
    )
}