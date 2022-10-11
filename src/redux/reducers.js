import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

// we will connect our reducers here
import { ManageUsersReducer } from './ManageUsers/reducer'
import { UserReducer } from './User/reducer'
import { RiderWiseReducer } from './Riderwise/reducer'
import { DriverRatingReducer } from './DriverRating/reducer'
import { RidewiseReducer } from './Ridewise/reducer'
import { LocationReducer } from './Location/reducer'

const appReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    manageUsers: ManageUsersReducer,
    riderWise: RiderWiseReducer,
    user: UserReducer,
    driverRating: DriverRatingReducer,
    ridewise: RidewiseReducer,
    location: LocationReducer,
  })

const createRootReducer = (history) => (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined
  }
  return appReducer(history)(state, action)
}

export default createRootReducer
