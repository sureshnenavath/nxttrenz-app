import {Link} from 'react-router-dom'
import {FaRegStar} from 'react-icons/fa'
import CartContext from '../../context/CartContext' // 👈 Import the context

import './index.css'

function ProductCard(props) {
  const {productData} = props
  const {title, brand, imageUrl, rating, price, id} = productData

  return (
    <CartContext.Consumer>
      {value => {
        const {addCartItem} = value

        const onClickAddToCart = () => {
          const productWithQuantity = {...productData, quantity: 1}
          addCartItem(productWithQuantity)
        }

        return (
          <li className="product-item">
            <Link to={`/products/${id}`} className="link-item">
              <img src={imageUrl} alt="product" className="thumbnail" />

              <div className="title-rating-container">
                <h1 className="title">{title}</h1>
                <div className="rating-container">
                  <p className="rating">{rating}</p>
                  <FaRegStar className="star" />
                </div>
              </div>
              <p className="brand">by {brand}</p>
            </Link>
            <div className="product-details">
              <p className="price">Rs {price}/-</p>
              <button
                type="button"
                className="add-to-cart-btn"
                onClick={onClickAddToCart}
              >
                Add to Cart
              </button>
            </div>

            {/* 👇 Add To Cart Button */}
          </li>
        )
      }}
    </CartContext.Consumer>
  )
}

export default ProductCard
