import { all, call, put, takeLatest } from 'redux-saga/effects'
import { Axios } from '../../api/axios'
import { getSimplifiedError } from '../../utils/error'
import { GET_DAY_WISE_SUCCESS, GET_DAY_WISE_ERROR, GET_DAY_WISE_REQUEST } from './reducer'
import { resetFlagsDaywise } from './action'

async function Daywise(payload = {}) {
  return await Axios.get('/get_daywise_list.php', { params: { ...payload } })
}
function* handleGetDaywise({ payload }) {
  try {
    const response = yield call(Daywise, payload)
    if (response) {
      yield put({
        type: GET_DAY_WISE_SUCCESS,
        payload: response.dayWise,
      })
      yield put(
        resetFlagsDaywise({
          blockType: 'daywise',
        }),
      )
    }
  } catch (error) {
    yield put({
      type: GET_DAY_WISE_ERROR,
      payload: getSimplifiedError(error),
    })
  }
}

export default all([takeLatest(GET_DAY_WISE_REQUEST, handleGetDaywise)])
