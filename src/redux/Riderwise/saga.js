import { all, call, put, takeLatest } from 'redux-saga/effects'

import { Axios } from '../../api/axios'
import { getSimplifiedError } from '../../utils/error'
import {
  GET_RIDER_USER_LIST_SUCCESS,
  GET_RIDER_USER_LIST_ERROR,
  GET_RIDER_USER_LIST_REQUEST,
} from './reducer'
import { resetFlagsRiderwise } from './action'

async function getRiderWiseUsers(payload) {
  return await Axios.get('/get_rider_list.php/?flag=getRiderList', payload)
}
function* handleGetRiderWise({ payload }) {
  try {
    const response = yield call(getRiderWiseUsers, payload)
    if (response) {
      yield put({
        type: GET_RIDER_USER_LIST_SUCCESS,
        payload: response.riders,
      })
      yield put(
        resetFlagsRiderwise({
          blockType: 'riderWise',
        }),
      )
    }
  } catch (error) {
    yield put({
      type: GET_RIDER_USER_LIST_ERROR,
      error: getSimplifiedError(error),
    })
  }
}

export default all([takeLatest(GET_RIDER_USER_LIST_REQUEST, handleGetRiderWise)])
