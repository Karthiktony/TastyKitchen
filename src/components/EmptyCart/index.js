import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const EmptyCart = () => (
  <>
    <Header activeTab="CART" />
    <div className="emptycart-container">
      <img
        src="https://res.cloudinary.com/dpnobkqmw/image/upload/v1634289365/Layer_2_jt1ls9.png"
        alt="success"
        className="cart-empty-image"
      />
      <h1 className="no-order">No Order Yet!</h1>
      <p className="cart-desc">
        Your cart is empty. Add something from the menu.
      </p>
      <Link to="/">
        <button type="button" className="emptyCart-btn">
          Order Now
        </button>
      </Link>
    </div>
  </>
)

export default EmptyCart
