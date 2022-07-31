import {Link} from 'react-router-dom'
import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <img
      alt="not found"
      src="https://res.cloudinary.com/dpnobkqmw/image/upload/v1634290874/erroring_1_q4upqy.png"
    />
    <h1 className="pageNotFound">Page Not Found</h1>
    <p className="desc">
      We are sorry, the page you requested could not be found <br />
      Please Go back to home screen
    </p>
    <Link to="/">
      <button type="button" className="home-btn ">
        Home Page
      </button>
    </Link>
  </div>
)

export default NotFound
