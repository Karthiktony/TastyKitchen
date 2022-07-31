import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const PaymentSuccessful = () => (
  <>
    <Header activeTab="CART" />
    <div className="payment-container">
      <img
        src="https://res.cloudinary.com/dpnobkqmw/image/upload/v1634289466/Vector_ifhuwg.png"
        alt="success"
      />
      <h1 className="payment">Payment Successful</h1>
      <p className="payment-desc">
        Thank you for ordering <br />
        Your payment is successfully completed.
      </p>
      <Link to="/">
        <button type="button" className="homepage-btn">
          Go To Home Page
        </button>
      </Link>
    </div>
  </>
)

export default PaymentSuccessful
