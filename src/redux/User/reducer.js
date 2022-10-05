import Cookies from 'js-cookie'

export const SET_SIDEBAR = 'SET_SIDEBAR'
export const SET_UN_FOLDABLE_SIDEBAR = 'SET_UN_FOLDABLE_SIDEBAR'

export const RESET_BLOCK_USER = 'RESET_BLOCK_MANAGE_USER'
export const RESET_FLAGS_USER = 'RESET_FLAGS_MANAGE_USER'

const block = {
  loading: false,
  error: '',
  success: false,
}

const initialState = {
  sidebarShow: true,
  sidebarUnFoldable: false,
}

export const UserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SIDEBAR:
      return { ...state, sidebarShow: payload }
    case SET_UN_FOLDABLE_SIDEBAR:
      return { ...state, sidebarUnFoldable: payload }

    //reset block with flag and data
    case RESET_BLOCK_USER:
      return {
        ...state,
        [payload.blockType]: {
          ...state[payload.blockType],
          ...initialState[payload.blockType],
        },
      }

    //reset only flags(block)
    case RESET_FLAGS_USER:
      return {
        ...state,
        [payload.blockType]: {
          ...state[payload.blockType],
          ...block,
        },
      }

    default:
      return state
  }
}
