import Header from '../Header'
import React from 'react';
import CartListView from '../CartListView'
import CartSummary from '../CartSummary'
import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'
import Footer from '../Footer'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      const showEmptyView = cartList.length === 0
      // TODO: Update the functionality to remove all the items in the cart
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
                    className="remove-all-button"
                    onClick={handleRemoveAllItems}
                  >
                    Remove All
                  </button>
                </div>
                <CartListView />
                {/* TODO: Add your code for Cart Summary here */}
                <CartSummary />
              </div>
            )}
          </div>
          <Footer />
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
