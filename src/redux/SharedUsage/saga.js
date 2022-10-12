import { all, call, put, takeLatest } from 'redux-saga/effects'
import { Axios } from '../../api/axios'
import { getSimplifiedError } from '../../utils/error'
import {
  GET_SHARED_USAGE_SUCCESS,
  GET_SHARED_USAGE_ERROR,
  GET_SHARED_USAGE_REQUEST,
} from './reducer'
import { resetFlagsSharedUsage } from './action'

async function sharedUsage(payload = {}) {
  return await Axios.get('/get_shared_usage.php', { params: { flag: 'getUsage', ...payload } })
}
function* handleGetSharedUsage({ payload }) {
  try {
    const response = yield call(sharedUsage, payload)
    if (response) {
      yield put({
        type: GET_SHARED_USAGE_SUCCESS,
        payload: response.Usage,
      })
      yield put(
        resetFlagsSharedUsage({
          blockType: 'sharedUsage',
        }),
      )
    }
  } catch (error) {
    yield put({
      type: GET_SHARED_USAGE_ERROR,
      payload: getSimplifiedError(error),
    })
  }
}

export default all([takeLatest(GET_SHARED_USAGE_REQUEST, handleGetSharedUsage)])
