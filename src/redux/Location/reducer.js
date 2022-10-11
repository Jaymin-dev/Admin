export const GET_LOCATION_USER_LIST_REQUEST = 'GET_LOCATION_USER_LIST_REQUEST'
export const GET_LOCATION_USER_LIST_SUCCESS = 'GET_LOCATION_USER_LIST_SUCCESS'
export const GET_LOCATION_USER_LIST_ERROR = 'GET_LOCATION_USER_LIST_ERROR'

export const RESET_BLOCK_LOCATION = 'RESET_BLOCK_LOCATION'
export const RESET_FLAGS_LOCATION = 'RESET_FLAGS_LOCATION'

const block = {
  loading: false,
  error: '',
  success: false,
}

const initialState = {
  location: {
    ...block,
    tableData: [],
  },
}

export const LocationReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_LOCATION_USER_LIST_REQUEST:
      return { ...state, location: { ...state.location, loading: true } }
    case GET_LOCATION_USER_LIST_SUCCESS:
      return {
        ...state,
        location: { tableData: payload, loading: false, success: true, error: '' },
      }
    case GET_LOCATION_USER_LIST_ERROR:
      return {
        ...state,
        location: { ...state.location, loading: false, error: payload },
      }

    //reset block with flag and data
    case RESET_BLOCK_LOCATION:
      return {
        ...state,
        [payload.blockType]: {
          ...state[payload.blockType],
          ...initialState[payload.blockType],
        },
      }

    //reset only flags(block)
    case RESET_FLAGS_LOCATION:
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
