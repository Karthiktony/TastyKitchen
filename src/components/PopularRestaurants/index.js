import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {AiOutlineLeftSquare, AiOutlineRightSquare} from 'react-icons/ai'

import RestaurantHeader from '../RestaurantHeader'
import RestaurantCard from '../RestaurantCard'
import NotFound from '../NotFound'
import Carousel from '../Carousel'

import './index.css'

const sortByOptions = [
  {
    id: 0,
    displayText: 'Highest',
    value: 'Highest',
  },
  {
    id: 2,
    displayText: 'Lowest',
    value: 'Lowest',
  },
]

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class PopularRestaurants extends Component {
  state = {
    restaurantList: [],
    activeOptionId: sortByOptions[1].displayText,
    apiStatus: apiStatusConstants.initial,
    activePage: 1,
    maxPages: 0,
  }

  componentDidMount() {
    this.getRestaurants()
  }

  getRestaurants = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const {activeOptionId, activePage} = this.state

    const limit = 9
    const offset = (activePage - 1) * limit
    const url = `https://apis.ccbp.in/restaurants-list?offset=${offset}&limit=${limit}&sort_by_rating=${activeOptionId}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      //   console.log(fetchedData)
      const maxItems = fetchedData.total
      const maxPages = (maxItems % 9) + 1
      const updatedData = fetchedData.restaurants.map(restaurant => ({
        costForTwo: restaurant.cost_for_two,
        cuisine: restaurant.cuisine,
        groupByTime: restaurant.group_by_time,
        hasOnlineDelivery: restaurant.has_online_delivery,
        hasTableBooking: restaurant.has_table_booking,
        id: restaurant.id,
        imageUrl: restaurant.image_url,
        isDeliveringNow: restaurant.is_delivering_now,
        location: restaurant.location,
        menuType: restaurant.menu_type,
        name: restaurant.name,
        opensAt: restaurant.opens_at,
        userRating: restaurant.user_rating,
        rating: restaurant.user_rating.rating,
        totalReviews: restaurant.user_rating.total_reviews,
      }))
      this.setState({
        maxPages,
        restaurantList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  changeSortBy = activeOptionId => {
    this.setState({activeOptionId}, this.getRestaurants)
  }

  onClickRightArrow = () => {
    const {activePage} = this.state
    if (activePage < 4) {
      this.setState(
        prevState => ({
          activePage: prevState.activePage + 1,
        }),
        this.getRestaurants,
      )
    }
  }

  onClickLeftArrow = () => {
    const {activePage} = this.state
    if (activePage > 1) {
      this.setState(
        prevState => ({
          activePage: prevState.activePage - 1,
        }),
        this.getRestaurants,
      )
    }
  }

  renderLoadingView = () => (
    <div className="products-loader-container">
      <Loader type="Oval" color="#F7931E" height="50" width="50" />
    </div>
  )

  renderFailureView = () => <NotFound />

  renderRestaurantListView = () => {
    const {restaurantList, activeOptionId} = this.state

    return (
      <>
        <RestaurantHeader
          activeOptionId={activeOptionId}
          sortByOptions={sortByOptions}
          changeSortBy={this.changeSortBy}
        />
        <hr className="hr-line" />
        <ul className="restaurant-list">
          {restaurantList.map(eachRestaurant => (
            <RestaurantCard
              eachRestaurant={eachRestaurant}
              key={eachRestaurant.id}
            />
          ))}
        </ul>
      </>
    )
  }

  renderRestaurants = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderRestaurantListView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const {activePage, maxPages} = this.state
    return (
      <div>
        <Carousel />
        <div className="all-restaurant-responsive-container">
          {this.renderRestaurants()}
          <div className="restaurant-navigation">
            <button
              type="button"
              className="arrow-button"
              onClick={this.onClickLeftArrow}
              testid="pagination-left-button"
            >
              <AiOutlineLeftSquare size={35} style={{color: '#64748B'}} />
            </button>
            <span testid="active-page-number">{activePage}</span> of {maxPages}
            <button
              type="button"
              className="arrow-button"
              onClick={this.onClickRightArrow}
              testid="pagination-right-button"
            >
              <AiOutlineRightSquare size={35} style={{color: '#64748B'}} />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default PopularRestaurants
