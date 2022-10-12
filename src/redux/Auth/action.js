import {
  SET_SIDEBAR,
  RESET_BLOCK_USER,
  RESET_FLAGS_USER,
  SET_UN_FOLDABLE_SIDEBAR,
  LOGIN_USER_REQUEST,
  REGISTER_USER_REQUEST,
} from './reducer'

export const setSidebar = (payload) => ({ type: SET_SIDEBAR, payload })
export const setUnFoldableSidebar = (payload) => ({ type: SET_UN_FOLDABLE_SIDEBAR, payload })

export const login = (payload) => ({ type: LOGIN_USER_REQUEST, payload })
export const register = (payload) => ({ type: REGISTER_USER_REQUEST, payload })

export const resetBlockUsers = (payload) => ({
  type: RESET_BLOCK_USER,
  payload,
})

export const resetFlagsUsers = (payload) => ({
  type: RESET_FLAGS_USER,
  payload,
})
