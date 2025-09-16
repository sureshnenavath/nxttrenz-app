import {useContext} from 'react'
import CartContext from '../../context/CartContext'
import './index.css'

function CartSummary() {
  const {cartList} = useContext(CartContext)
  const totalPrice = cartList.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  )

  return (
    <div className="cart-summary-wrapper">
      <div className="cart-summary-container">
        <h1 className="order-total-title">
          Order Total: <span className="total-price">₹{totalPrice}/-</span>
        </h1>
        <p className="item-count">{cartList.length} items in cart</p>
        <button type="button" className="checkout-button">
          Checkout
        </button>
      </div>
    </div>
  )
}

export default CartSummary
