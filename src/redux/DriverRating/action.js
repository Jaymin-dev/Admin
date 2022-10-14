import {
  GET_DRIVER_RATING_LIST_REQUEST,
  RESET_BLOCK_DRIVER_RATING,
  RESET_FLAGS_DRIVER_RATING,
} from './reducer'

export const getDriverRatingList = (payload) => ({ type: GET_DRIVER_RATING_LIST_REQUEST, payload })

export const resetBlockDriverRating = (payload) => ({
  type: RESET_BLOCK_DRIVER_RATING,
  payload,
})

export const resetFlagsDriverRating = (payload) => ({
  type: RESET_FLAGS_DRIVER_RATING,
  payload,
})
