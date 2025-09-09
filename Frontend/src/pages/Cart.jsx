import CartItem from "../components/CartItem"
import { ShoppingCart } from 'lucide-react'
import { useState } from "react"
const Cart = () => {
    const [cartItems, setCartItems] = useState([{
        name: "CHING CHONG",
        price: 20,
        quantity: 1
    }])
  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <ShoppingCart />
          <p>You cart is empty</p>
          <button>Order Now</button>
        </div>
      ) : (
        <div>
          <div className="cart-content">
            <div className="cart-items">
              {cartItems.map((item) => (
                <CartItem />
              ))}
            </div>
          </div>
          <div className="cart-summary">
              <div>
                <span>Total:</span>
                <span>${calculateTotal()}</span>
              </div>
          </div>
          <button>
            Proceed To Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
