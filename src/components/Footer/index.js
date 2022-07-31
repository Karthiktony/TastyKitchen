import {
  FaPinterestSquare,
  FaInstagram,
  FaTwitter,
  FaFacebookSquare,
} from 'react-icons/fa'

import './index.css'

const Footer = () => (
  <div className="footer-container ">
    <div className="main-logo-container ">
      <img
        src="https://res.cloudinary.com/dpnobkqmw/image/upload/v1634365426/Frame_275_nyzym3.png"
        alt="website-footer-logo"
        className="footer-image "
      />
      <h1 className="tastyKitchen-footer">Tasty Kitchens</h1>
    </div>
    <p className="footer-desc">
      The only thing we are serious about is food. Contact us on
    </p>
    <div>
      <FaPinterestSquare
        className="footer-icon"
        testid="pintrest-social-icon"
      />
      <FaInstagram className="footer-icon" testid="instagram-social-icon" />
      <FaTwitter className="footer-icon" testid="twitter-social-icon" />
      <FaFacebookSquare className="footer-icon" testid="facebook-social-icon" />
    </div>
  </div>
)

export default Footer
