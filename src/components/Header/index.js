import {Link} from 'react-router-dom'
import {useContext} from 'react'
import CartContext from '../../context/CartContext'
import './index.css'

function Header() {
  const {cartList} = useContext(CartContext)
  const cartItemsCount = cartList.reduce(
    (total, item) => total + item.quantity,
    0,
  )

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <Link to="/" className="nav-logo">
          <h1>Nxt Trendz</h1>
        </Link>
        <ul className="nav-menu">
          <li className="nav-menu-item">
            <Link to="/products" className="nav-link">
              Products
            </Link>
          </li>
          <li className="nav-menu-item">
            <Link to="/cart" className="nav-link">
              Cart
              {cartItemsCount > 0 && (
                <span className="cart-count-badge">{cartItemsCount}</span>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
