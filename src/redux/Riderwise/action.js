import {
  GET_RIDER_USER_LIST_REQUEST,
  RESET_BLOCK_RIDER_WISE,
  RESET_FLAGS_RIDER_WISE,
} from './reducer'

export const getRiderWiseUserList = (payload) => ({ type: GET_RIDER_USER_LIST_REQUEST, payload })

export const resetBlockRiderwise = (payload) => ({
  type: RESET_BLOCK_RIDER_WISE,
  payload,
})

export const resetFlagsRiderwise = (payload) => ({
  type: RESET_FLAGS_RIDER_WISE,
  payload,
})
