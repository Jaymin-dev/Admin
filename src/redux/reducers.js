import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

// we will connect our reducers here
import { ManageUsersReducer } from './ManageUsers/reducer'
import { UserReducer } from './User/reducer'

const appReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    manageUsers: ManageUsersReducer,
    user: UserReducer,
  })

const createRootReducer = (history) => (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined
  }
  return appReducer(history)(state, action)
}

export default createRootReducer
