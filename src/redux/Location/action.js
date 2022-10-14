import {
  GET_LOCATION_USER_LIST_REQUEST,
  RESET_FLAGS_LOCATION,
  RESET_BLOCK_LOCATION,
} from './reducer'

export const getLocationUserList = (payload) => ({ type: GET_LOCATION_USER_LIST_REQUEST, payload })

export const resetBlockLocation = (payload) => ({
  type: RESET_BLOCK_LOCATION,
  payload,
})

export const resetFlagsLocation = (payload) => ({
  type: RESET_FLAGS_LOCATION,
  payload,
})
