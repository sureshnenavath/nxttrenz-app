import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import CartContext from './context/CartContext'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import ProductItemDetails from './components/ProductItemDetails'
import Cart from './components/Cart'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'
import './App.css'

class App extends Component {
  state = {cartList: []}

  addCartItem = product => {
    this.setState(prevState => {
      const existingItem = prevState.cartList.find(
        item => item.id === product.id,
      )
      if (existingItem) {
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

  removeAllCartItems = () => {
    this.setState({cartList: []})
  }

  incrementCartItemQuantity = id => {
    this.setState(prevState => ({
      cartList: prevState.cartList.map(item =>
        item.id === id ? {...item, quantity: item.quantity + 1} : item,
      ),
    }))
  }

  decrementCartItemQuantity = id => {
    this.setState(prevState => ({
      cartList: prevState.cartList
        .map(item =>
          item.id === id ? {...item, quantity: item.quantity - 1} : item,
        )
        .filter(item => item.quantity > 0),
    }))
  }

  getContextValue = () => {
    const {cartList} = this.state
    return {
      cartList,
      addCartItem: this.addCartItem,
      removeCartItem: this.removeCartItem,
      removeAllCartItems: this.removeAllCartItems,
      incrementCartItemQuantity: this.incrementCartItemQuantity,
      decrementCartItemQuantity: this.decrementCartItemQuantity,
    }
  }

  render() {
    return (
      <CartContext.Provider value={this.getContextValue()}>
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
          <Redirect to="/not-found" />
        </Switch>
      </CartContext.Provider>
    )
  }
}

export default App
