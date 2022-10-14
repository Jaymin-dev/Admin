import { GET_DAY_WISE_REQUEST, RESET_BLOCK_DAY_WISE, RESET_FLAGS_DAY_WISE } from './reducer'

export const getDaywise = (payload) => ({ type: GET_DAY_WISE_REQUEST, payload })

export const resetBlockDaywise = (payload) => ({
  type: RESET_BLOCK_DAY_WISE,
  payload,
})

export const resetFlagsDaywise = (payload) => ({
  type: RESET_FLAGS_DAY_WISE,
  payload,
})
