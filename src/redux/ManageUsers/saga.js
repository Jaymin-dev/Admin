import { all, call, put, takeLatest } from 'redux-saga/effects'
import Cookies from 'js-cookie'

import { Axios } from '../../api/axios'
import { getSimplifiedError } from '../../utils/error'
import { GET_MANAGE_USER_ERROR, GET_MANAGE_USER_REQUEST, GET_MANAGE_USER_SUCCESS } from './reducer'
import { resetFlagsManageUsers } from './action'

async function manageUsers(payload = {}) {
  return await Axios.get('/add_user.php/', { params: { flag: 'getAllUser', ...payload } })
}
function* handleGetManageUsers({ payload }) {
  try {
    const response = yield call(manageUsers, payload)
    if (response.success) {
      yield put({
        type: GET_MANAGE_USER_SUCCESS,
        payload: response.user,
      })
      yield put(
        resetFlagsManageUsers({
          blockType: 'manageUsers',
        }),
      )
    }
  } catch (error) {
    yield put({
      type: GET_MANAGE_USER_ERROR,
      payload: getSimplifiedError(error),
    })
  }
}

export default all([takeLatest(GET_MANAGE_USER_REQUEST, handleGetManageUsers)])
