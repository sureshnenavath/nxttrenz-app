import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import ProductItemDetails from './components/ProductItemDetails'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import CartContext from './context/CartContext'

import './App.css'

class App extends Component {
  state = {
    cartList: [],
  }
  componentDidMount() {
    const storedCart = localStorage.getItem('cartList')
    if (storedCart) {
      this.setState({cartList: JSON.parse(storedCart)})
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.cartList !== this.state.cartList) {
      localStorage.setItem('cartList', JSON.stringify(this.state.cartList))
    }
  }
  incrementCartItemQuantity = id => {
    this.setState(prevState => ({
      cartList: prevState.cartList.map(eachItem =>
        eachItem.id === id
          ? {...eachItem, quantity: eachItem.quantity + 1}
          : eachItem,
      ),
    }))
  }

  decrementCartItemQuantity = id => {
    this.setState(prevState => ({
      cartList: prevState.cartList
        .map(eachItem =>
          eachItem.id === id
            ? {...eachItem, quantity: eachItem.quantity - 1}
            : eachItem,
        )
        .filter(eachItem => eachItem.quantity > 0), // remove item if quantity becomes 0
    }))
  }

  //   TODO: Add your code for remove all cart items, increment cart item quantity, decrement cart item quantity, remove cart item

  addCartItem = product => {
    this.setState(prevState => {
      const isExisting = prevState.cartList.find(item => item.id === product.id)

      if (isExisting) {
        return {
          cartList: prevState.cartList.map(item =>
            item.id === product.id
              ? {...item, quantity: item.quantity + product.quantity}
              : item,
          ),
        }
      }

      return {cartList: [...prevState.cartList, product]}
    })
  }

  removeCartItem = id => {
    this.setState(prevState => ({
      cartList: prevState.cartList.filter(item => item.id !== id),
    }))
  }
  removeAllCartItems = newCartList => {
    this.setState({cartList: newCartList})
  }

  render() {
    const {cartList} = this.state

    return (
      <CartContext.Provider
        value={{
          cartList: this.state.cartList,
          addCartItem: this.addCartItem,
          removeCartItem: this.removeCartItem,
          removeAllCartItems: this.removeAllCartItems,
          incrementCartItemQuantity: this.incrementCartItemQuantity,
          decrementCartItemQuantity: this.decrementCartItemQuantity,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/products" component={Products} />
          <ProtectedRoute
            exact
            path="/products/:id"
            component={ProductItemDetails}
          />
          <ProtectedRoute exact path="/cart" component={Cart} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </CartContext.Provider>
    )
  }
}

export default App
