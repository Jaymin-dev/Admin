export const SET_SIDEBAR = 'SET_SIDEBAR'
export const SET_UN_FOLDABLE_SIDEBAR = 'SET_UN_FOLDABLE_SIDEBAR'

export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR'

export const REGISTER_USER_REQUEST = 'REGISTER_USER_REQUEST'
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS'
export const REGISTER_USER_ERROR = 'REGISTER_USER_ERROR'

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
  login: { ...block },
  register: { ...block },
}

export const UserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SIDEBAR:
      return { ...state, sidebarShow: payload }
    case SET_UN_FOLDABLE_SIDEBAR:
      return { ...state, sidebarUnFoldable: payload }

    case LOGIN_USER_REQUEST:
      return { ...state, login: { ...state.login, loading: true, error: '' } }
    case LOGIN_USER_SUCCESS:
      return { ...state, login: { ...state.login, success: true, error: '', loading: false } }
    case LOGIN_USER_ERROR:
      return { ...state, login: { ...state.login, error: payload, loading: false } }

    case REGISTER_USER_REQUEST:
      return { ...state, register: { ...state.register, loading: true, error: '' } }
    case REGISTER_USER_SUCCESS:
      return { ...state, register: { ...state.register, success: true, error: '', loading: false } }
    case REGISTER_USER_ERROR:
      return { ...state, register: { ...state.register, error: payload, loading: false } }

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
