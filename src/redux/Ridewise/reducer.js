export const GET_RIDE_WISE_USER_LIST_REQUEST = 'GET_RIDE_WISE_USER_LIST_REQUEST'
export const GET_RIDE_WISE_USER_LIST_SUCCESS = 'GET_RIDE_WISE_USER_LIST_SUCCESS'
export const GET_RIDE_WISE_USER_LIST_ERROR = 'GET_RIDE_WISE_USER_LIST_ERROR'

export const RESET_BLOCK_RIDE_WISE = 'RESET_BLOCK_RIDE_WISE'
export const RESET_FLAGS_RIDE_WISE = 'RESET_FLAGS_RIDE_WISE'

const block = {
  loading: false,
  error: '',
  success: false,
}

const initialState = {
  ridewise: {
    ...block,
    tableData: [],
  },
}

export const RidewiseReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_RIDE_WISE_USER_LIST_REQUEST:
      return { ...state, ridewise: { ...state.ridewise, loading: true } }
    case GET_RIDE_WISE_USER_LIST_SUCCESS:
      return {
        ...state,
        ridewise: { tableData: payload, loading: false, success: true, error: '' },
      }
    case GET_RIDE_WISE_USER_LIST_ERROR:
      return {
        ...state,
        ridewise: { ...state.ridewise, loading: false, error: payload },
      }

    //reset block with flag and data
    case RESET_BLOCK_RIDE_WISE:
      return {
        ...state,
        [payload.blockType]: {
          ...state[payload.blockType],
          ...initialState[payload.blockType],
        },
      }

    //reset only flags(block)
    case RESET_FLAGS_RIDE_WISE:
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
