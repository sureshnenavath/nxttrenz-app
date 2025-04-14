// Write your code here
import {useContext} from 'react'
import CartContext from '../../context/CartContext'

const CartSummary = () => {
  const {cartList} = useContext(CartContext)
  const totalPrice = cartList.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  )
  return (
    <div>
      <h1>Order Total: {totalPrice}</h1>
      <p>{cartList.length} items in cart</p>
      <button>Checkout</button>
    </div>
  )
}
export default CartSummary
