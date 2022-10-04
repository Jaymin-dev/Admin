import {
  GET_MANAGE_USER_REQUEST,
  RESET_BLOCK_MANAGE_USER,
  RESET_FLAGS_MANAGE_USER,
} from './reducer'

export const getManageUsers = (payload) => ({ type: GET_MANAGE_USER_REQUEST, payload })

export const resetBlockManageUsers = (payload) => ({
  type: RESET_BLOCK_MANAGE_USER,
  payload,
})

export const resetFlagsManageUsers = (payload) => ({
  type: RESET_FLAGS_MANAGE_USER,
  payload,
})
