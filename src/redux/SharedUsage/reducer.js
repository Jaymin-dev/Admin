export const GET_SHARED_USAGE_REQUEST = 'GET_SHARED_USAGE_REQUEST'
export const GET_SHARED_USAGE_SUCCESS = 'GET_SHARED_USAGE_SUCCESS'
export const GET_SHARED_USAGE_ERROR = 'GET_SHARED_USAGE_ERROR'

export const RESET_BLOCK_SHARED_USAGE = 'RESET_BLOCK_SHARED_USAGE'
export const RESET_FLAGS_SHARED_USAGE = 'RESET_FLAGS_SHARED_USAGE'

const block = {
  loading: false,
  error: '',
  success: false,
}

const initialState = {
  sharedUsage: {
    ...block,
    tableData: [],
  },
}

export const SharedUsageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_SHARED_USAGE_REQUEST:
      return { ...state, sharedUsage: { ...state.sharedUsage, loading: true } }
    case GET_SHARED_USAGE_SUCCESS:
      return {
        ...state,
        sharedUsage: {
          ...state.sharedUsage,
          tableData: payload,
          loading: false,
          success: true,
          error: '',
        },
      }
    case GET_SHARED_USAGE_ERROR:
      return {
        ...state,
        sharedUsage: { ...state.sharedUsage, loading: false, error: payload },
      }

    //reset block with flag and data
    case RESET_BLOCK_SHARED_USAGE:
      return {
        ...state,
        [payload.blockType]: {
          ...state[payload.blockType],
          ...initialState[payload.blockType],
        },
      }

    //reset only flags(block)
    case RESET_FLAGS_SHARED_USAGE:
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
