import { SET_SIDEBAR, RESET_BLOCK_USER, RESET_FLAGS_USER, SET_UN_FOLDABLE_SIDEBAR } from './reducer'

export const setSidebar = (payload) => ({ type: SET_SIDEBAR, payload })
export const setUnFoldableSidebar = (payload) => ({ type: SET_UN_FOLDABLE_SIDEBAR, payload })

export const resetBlockManageUsers = (payload) => ({
  type: RESET_BLOCK_USER,
  payload,
})

export const resetFlagsManageUsers = (payload) => ({
  type: RESET_FLAGS_USER,
  payload,
})
