import {
  GET_RIDE_WISE_USER_LIST_REQUEST,
  RESET_BLOCK_RIDE_WISE,
  RESET_FLAGS_RIDE_WISE,
} from './reducer'

export const getRidewiseUserList = (payload) => ({ type: GET_RIDE_WISE_USER_LIST_REQUEST, payload })

export const resetBlockRidewise = (payload) => ({
  type: RESET_BLOCK_RIDE_WISE,
  payload,
})

export const resetFlagsRidewise = (payload) => ({
  type: RESET_FLAGS_RIDE_WISE,
  payload,
})
