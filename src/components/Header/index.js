import Cookies from 'js-cookie'
import {Link, withRouter} from 'react-router-dom'
// import {GiHamburgerMenu} from 'react-icons/gi'
import './index.css'

const Header = props => {
  const {history} = props
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  const {activeTab} = props
  const activeHome = activeTab !== 'CART' ? 'active' : ''
  const activeCart = activeTab !== 'HOME' ? 'active' : ''

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dpm4p4bpe/image/upload/v1658937817/Frame_274formimg_qvvp69.png"
            alt="website logo"
          />
        </Link>
        <Link to="/" className="heading-link">
          <p className="heading">Tasty Kitchens</p>
        </Link>

        <ul className="nav-menu">
          <li className="nav-menu-item">
            <Link to="/" className={`nav-link ${activeHome}`}>
              Home
            </Link>
          </li>
          <li className="nav-menu-item">
            <Link to="/cart" className={`nav-link ${activeCart}`}>
              Cart
            </Link>
          </li>
          <button
            type="button"
            onClick={onClickLogout}
            className="logout-desktop-btn"
          >
            Logout
          </button>
        </ul>
        {/* <div>
          <button type="button" className="hamburger-btn">
            <GiHamburgerMenu
              size={25}
              className="hamburger"
              //   onClick={onClickMobileNavMenu}
            />
          </button>
        </div> */}
      </div>
    </nav>
  )
}

export default withRouter(Header)
