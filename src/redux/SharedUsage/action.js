import {
  GET_SHARED_USAGE_REQUEST,
  RESET_BLOCK_SHARED_USAGE,
  RESET_FLAGS_SHARED_USAGE,
} from './reducer'

export const getSharedUsage = (payload) => ({ type: GET_SHARED_USAGE_REQUEST, payload })

export const resetBlockSharedUsage = (payload) => ({
  type: RESET_BLOCK_SHARED_USAGE,
  payload,
})

export const resetFlagsSharedUsage = (payload) => ({
  type: RESET_FLAGS_SHARED_USAGE,
  payload,
})
