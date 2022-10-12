export const GET_DAY_WISE_REQUEST = 'GET_DAY_WISE_REQUEST'
export const GET_DAY_WISE_SUCCESS = 'GET_DAY_WISE_SUCCESS'
export const GET_DAY_WISE_ERROR = 'GET_DAY_WISE_ERROR'

export const RESET_BLOCK_DAY_WISE = 'RESET_BLOCK_DAY_WISE'
export const RESET_FLAGS_DAY_WISE = 'RESET_FLAGS_DAY_WISE'

const block = {
  loading: false,
  error: '',
  success: false,
}

const initialState = {
  daywise: {
    ...block,
    tableData: [],
  },
}

export const DaywiseReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DAY_WISE_REQUEST:
      return { ...state, daywise: { ...state.daywise, loading: true } }
    case GET_DAY_WISE_SUCCESS:
      return {
        ...state,
        daywise: {
          ...state.daywise,
          tableData: payload,
          loading: false,
          success: true,
          error: '',
        },
      }
    case GET_DAY_WISE_ERROR:
      return {
        ...state,
        daywise: { ...state.daywise, loading: false, error: payload },
      }

    //reset block with flag and data
    case RESET_BLOCK_DAY_WISE:
      return {
        ...state,
        [payload.blockType]: {
          ...state[payload.blockType],
          ...initialState[payload.blockType],
        },
      }

    //reset only flags(block)
    case RESET_FLAGS_DAY_WISE:
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
