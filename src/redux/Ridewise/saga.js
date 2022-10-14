import { all, call, put, takeLatest } from 'redux-saga/effects'

import { Axios } from '../../api/axios'
import { getSimplifiedError } from '../../utils/error'
import {
  GET_RIDE_WISE_USER_LIST_SUCCESS,
  GET_RIDE_WISE_USER_LIST_ERROR,
  GET_RIDE_WISE_USER_LIST_REQUEST,
} from './reducer'
import { resetFlagsRidewise } from './action'

async function getRideWise(payload = {}) {
  return await Axios.get('/get_ride_list.php', { params: { flag: 'getRide', ...payload } })
}
function* handleGetRideWise({ payload }) {
  try {
    const response = yield call(getRideWise, payload)
    if (response) {
      yield put({
        type: GET_RIDE_WISE_USER_LIST_SUCCESS,
        payload: response.rideDetails,
      })
      yield put(
        resetFlagsRidewise({
          blockType: 'ridewise',
        }),
      )
    }
  } catch (error) {
    yield put({
      type: GET_RIDE_WISE_USER_LIST_ERROR,
      error: getSimplifiedError(error),
    })
  }
}

export default all([takeLatest(GET_RIDE_WISE_USER_LIST_REQUEST, handleGetRideWise)])
