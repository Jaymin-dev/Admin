import Cookies from 'js-cookie'

export const GET_MANAGE_USER_REQUEST = 'GET_MANAGE_USER_REQUEST'
export const GET_MANAGE_USER_SUCCESS = 'GET_MANAGE_USER_SUCCESS'
export const GET_MANAGE_USER_ERROR = 'GET_MANAGE_USER_ERROR'

export const RESET_BLOCK_MANAGE_USER = 'RESET_BLOCK_MANAGE_USER'
export const RESET_FLAGS_MANAGE_USER = 'RESET_FLAGS_MANAGE_USER'

const block = {
  loading: false,
  error: '',
  success: false,
}

const initialState = {
  manageUsers: { ...block },
}

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MANAGE_USER_REQUEST:
      return { ...state, manageUsers: { ...state.manageUsers, loading: true } }
    case GET_MANAGE_USER_SUCCESS:
      return {
        ...state,
        manageUsers: { ...state.manageUsers, loading: false, success: true, error: '' },
      }
    case GET_MANAGE_USER_ERROR:
      return {
        ...state,
        manageUsers: { ...state.manageUsers, loading: false, error: action.error },
      }

    //reset block with flag and data
    case RESET_BLOCK_MANAGE_USER:
      return {
        ...state,
        [action.payload.blockType]: {
          ...state[action.payload.blockType],
          ...initialState[action.payload.blockType],
        },
      }

    //reset only flags(block)
    case RESET_FLAGS_MANAGE_USER:
      return {
        ...state,
        [action.payload.blockType]: {
          ...state[action.payload.blockType],
          ...block,
        },
      }

    default:
      return state
  }
}
