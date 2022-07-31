import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Header from '../Header'

import PopularRestaurants from '../PopularRestaurants'
import Footer from '../Footer'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <Header />
      <PopularRestaurants />
      <Footer />
    </>
  )
}

export default Home
