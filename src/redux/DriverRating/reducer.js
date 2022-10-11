export const GET_DRIVER_RATING_LIST_REQUEST = 'GET_DRIVER_RATING_LIST_REQUEST'
export const GET_DRIVER_RATING_LIST_SUCCESS = 'GET_DRIVER_RATING_LIST_SUCCESS'
export const GET_DRIVER_RATING_LIST_ERROR = 'GET_DRIVER_RATING_LIST_ERROR'

export const RESET_BLOCK_DRIVER_RATING = 'RESET_BLOCK_DRIVER_RATING'
export const RESET_FLAGS_DRIVER_RATING = 'RESET_FLAGS_DRIVER_RATING'

const block = {
  loading: false,
  error: '',
  success: false,
}

const initialState = {
  driverRating: {
    ...block,
    tableData: [],
  },
}

export const DriverRatingReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DRIVER_RATING_LIST_REQUEST:
      return { ...state, driverRating: { ...state.driverRating, loading: true } }
    case GET_DRIVER_RATING_LIST_SUCCESS:
      return {
        ...state,
        driverRating: { tableData: payload, loading: false, success: true, error: '' },
      }
    case GET_DRIVER_RATING_LIST_ERROR:
      return {
        ...state,
        driverRating: { ...state.driverRating, loading: false, error: payload },
      }

    //reset block with flag and data
    case RESET_BLOCK_DRIVER_RATING:
      return {
        ...state,
        [payload.blockType]: {
          ...state[payload.blockType],
          ...initialState[payload.blockType],
        },
      }

    //reset only flags(block)
    case RESET_FLAGS_DRIVER_RATING:
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
