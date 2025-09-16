import {Link, useNavigate} from 'react-router-dom'
import {useContext} from 'react'
import Cookies from 'js-cookie'
import {FiSun, FiMoon} from 'react-icons/fi'
import CartContext from '../../context/CartContext'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

function Header() {
  const {cartList} = useContext(CartContext)
  const {theme, toggleTheme} = useContext(ThemeContext)
  const cartItemsCount = cartList.reduce(
    (total, item) => total + item.quantity,
    0,
  )
  const themeAriaLabel =
    theme === 'dark' ? 'Disable dark mode' : 'Enable dark mode'
  const navigate = useNavigate()

  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    navigate('/login')
  }

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
          <li className="nav-menu-item">
            <button
              type="button"
              className="theme-toggle-btn"
              onClick={toggleTheme}
              aria-pressed={theme === 'dark'}
              aria-label={themeAriaLabel}
            >
              {theme === 'dark' ? (
                <>
                  <FiMoon className="theme-icon" />
                  <span className="theme-label">Dark</span>
                </>
              ) : (
                <>
                  <FiSun className="theme-icon" />
                  <span className="theme-label">Light</span>
                </>
              )}
            </button>
          </li>
          <li className="nav-menu-item">
            <button
              type="button"
              className="logout-desktop-btn"
              onClick={onClickLogout}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
