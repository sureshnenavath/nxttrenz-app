import {useState, useCallback, useMemo} from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import CartContext from './context/CartContext'
import {ThemeProvider} from './context/ThemeContext'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import ProductItemDetails from './components/ProductItemDetails'
import Cart from './components/Cart'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [cartList, setCartList] = useState([])

  const addCartItem = useCallback(product => {
    setCartList(prevCartList => {
      const existingItem = prevCartList.find(item => item.id === product.id)
      if (existingItem) {
        return prevCartList.map(item =>
          item.id === product.id
            ? {...item, quantity: item.quantity + product.quantity}
            : item,
        )
      }
      return [...prevCartList, product]
    })
  }, [])

  const removeCartItem = useCallback(id => {
    setCartList(prevCartList => prevCartList.filter(item => item.id !== id))
  }, [])

  const removeAllCartItems = useCallback(() => {
    setCartList([])
  }, [])

  const incrementCartItemQuantity = useCallback(id => {
    setCartList(prevCartList =>
      prevCartList.map(item =>
        item.id === id ? {...item, quantity: item.quantity + 1} : item,
      ),
    )
  }, [])

  const decrementCartItemQuantity = useCallback(id => {
    setCartList(prevCartList =>
      prevCartList
        .map(item =>
          item.id === id ? {...item, quantity: item.quantity - 1} : item,
        )
        .filter(item => item.quantity > 0),
    )
  }, [])

  const contextValue = useMemo(
    () => ({
      cartList,
      addCartItem,
      removeCartItem,
      removeAllCartItems,
      incrementCartItemQuantity,
      decrementCartItemQuantity,
    }),
    [
      cartList,
      addCartItem,
      removeCartItem,
      removeAllCartItems,
      incrementCartItemQuantity,
      decrementCartItemQuantity,
    ],
  )

  return (
    <ThemeProvider>
      <CartContext.Provider value={contextValue}>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/products"
            element={
              <ProtectedRoute>
                <Products />
              </ProtectedRoute>
            }
          />
          <Route
            path="/products/:id"
            element={
              <ProtectedRoute>
                <ProductItemDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found" replace />} />
        </Routes>
        <Footer />
      </CartContext.Provider>
    </ThemeProvider>
  )
}

export default App
