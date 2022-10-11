export const GET_RIDER_USER_LIST_REQUEST = 'GET_RIDER_USER_LIST_REQUEST'
export const GET_RIDER_USER_LIST_SUCCESS = 'GET_RIDER_USER_LIST_SUCCESS'
export const GET_RIDER_USER_LIST_ERROR = 'GET_RIDER_USER_LIST_ERROR'

export const RESET_BLOCK_RIDER_WISE = 'RESET_BLOCK_RIDER_WISE'
export const RESET_FLAGS_RIDER_WISE = 'RESET_FLAGS_RIDER_WISE'

const block = {
  loading: false,
  error: '',
  success: false,
}

const initialState = {
  riderWise: {
    ...block,
    tableData: [],
  },
}

export const RiderWiseReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_RIDER_USER_LIST_REQUEST:
      return { ...state, riderWise: { ...state.riderWise, loading: true } }
    case GET_RIDER_USER_LIST_SUCCESS:
      return {
        ...state,
        riderWise: { tableData: payload, loading: false, success: true, error: '' },
      }
    case GET_RIDER_USER_LIST_ERROR:
      return {
        ...state,
        riderWise: { ...state.riderWise, loading: false, error: payload },
      }

    //reset block with flag and data
    case RESET_BLOCK_RIDER_WISE:
      return {
        ...state,
        [payload.blockType]: {
          ...state[payload.blockType],
          ...initialState[payload.blockType],
        },
      }

    //reset only flags(block)
    case RESET_FLAGS_RIDER_WISE:
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
