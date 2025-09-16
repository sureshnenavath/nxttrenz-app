import Header from '../Header'
import CartListView from '../CartListView'
import CartSummary from '../CartSummary'
import {useCart} from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'
import Footer from '../Footer'

import './index.css'

function Cart() {
  const {cartList, removeAllCartItems} = useCart()
  const showEmptyView = cartList.length === 0
  const handleRemoveAllItems = () => {
    removeAllCartItems([])
  }

  return (
    <>
      <Header />
      <div className="cart-container">
        {showEmptyView ? (
          <EmptyCartView />
        ) : (
          <div className="cart-content-container">
            <div className="cart-remove">
              <h1 className="cart-heading">My Cart</h1>
              <button
                type="button"
                className="remove-all-button"
                onClick={handleRemoveAllItems}
              >
                Remove All
              </button>
            </div>
            <CartListView />
            <CartSummary />
          </div>
        )}
      </div>
      <Footer />
    </>
  )
}

export default Cart
