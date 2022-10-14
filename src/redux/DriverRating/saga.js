import { all, call, put, takeLatest } from 'redux-saga/effects'

import { Axios } from '../../api/axios'
import { getSimplifiedError } from '../../utils/error'
import {
  GET_DRIVER_RATING_LIST_SUCCESS,
  GET_DRIVER_RATING_LIST_ERROR,
  GET_DRIVER_RATING_LIST_REQUEST,
} from './reducer'
import { resetFlagsDriverRating } from './action'

async function getDriverRating(payload) {
  return await Axios.get('/get_driver_rating.php', payload)
}
function* handleGetDriverRating({ payload }) {
  try {
    const response = yield call(getDriverRating, payload)
    if (response) {
      yield put({
        type: GET_DRIVER_RATING_LIST_SUCCESS,
        payload: response.rating,
      })
      yield put(
        resetFlagsDriverRating({
          blockType: 'driverRating',
        }),
      )
    }
  } catch (error) {
    yield put({
      type: GET_DRIVER_RATING_LIST_ERROR,
      error: getSimplifiedError(error),
    })
  }
}

export default all([takeLatest(GET_DRIVER_RATING_LIST_REQUEST, handleGetDriverRating)])
