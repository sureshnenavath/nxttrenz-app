import React, {useContext} from 'react'

const CartContext = React.createContext()

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartContext.Provider')
  }
  return context
}

export default CartContext
