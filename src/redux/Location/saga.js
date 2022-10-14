import { all, call, put, takeLatest } from 'redux-saga/effects'

import { Axios } from '../../api/axios'
import { getSimplifiedError } from '../../utils/error'
import {
  GET_LOCATION_USER_LIST_SUCCESS,
  GET_LOCATION_USER_LIST_ERROR,
  GET_LOCATION_USER_LIST_REQUEST,
} from './reducer'
import { resetFlagsLocation } from './action'

async function getLocationUsers(payload) {
  return await Axios.get('/get_location_list.php', payload)
}
function* handleGetLocation({ payload }) {
  try {
    const response = yield call(getLocationUsers, payload)
    if (response) {
      yield put({
        type: GET_LOCATION_USER_LIST_SUCCESS,
        payload: response.location,
      })
      yield put(
        resetFlagsLocation({
          blockType: 'location',
        }),
      )
    }
  } catch (error) {
    yield put({
      type: GET_LOCATION_USER_LIST_ERROR,
      error: getSimplifiedError(error),
    })
  }
}

export default all([takeLatest(GET_LOCATION_USER_LIST_REQUEST, handleGetLocation)])
