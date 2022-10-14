import { all, call, put, takeLatest } from 'redux-saga/effects'
import Cookies from 'js-cookie'

import { Axios } from '../../api/axios'
import { getSimplifiedError } from '../../utils/error'
import {
  ADD_MANAGE_USER_ERROR,
  ADD_MANAGE_USER_REQUEST,
  ADD_MANAGE_USER_SUCCESS,
  GET_MANAGE_USER_ERROR,
  GET_MANAGE_USER_REQUEST,
  GET_MANAGE_USER_SUCCESS,
} from './reducer'
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

async function addManageUsers(payload = {}) {
  return await Axios.get('add_user.php/', { params: { flag: 'userRegister', ...payload } })
}
function* handleAddtManageUsers({ payload }) {
  const copyPayload = { ...payload }
  if (payload.userData) delete payload.userData
  try {
    const response = yield call(addManageUsers, payload)
    if (response.status) {
      yield put({
        type: ADD_MANAGE_USER_SUCCESS,
      })
    } else {
      yield put({
        type: GET_MANAGE_USER_REQUEST,
        // payload: { search_data: copyPayload.userData.username },
      })
      yield put({
        type: ADD_MANAGE_USER_ERROR,
        payload: response.Error,
      })
    }
  } catch (error) {
    yield put({
      type: GET_MANAGE_USER_REQUEST,
      // payload: { search_data: copyPayload.userData.username },
    })
    yield put({
      type: ADD_MANAGE_USER_ERROR,
      payload: getSimplifiedError(error),
    })
  }
}

export default all([
  takeLatest(GET_MANAGE_USER_REQUEST, handleGetManageUsers),
  takeLatest(ADD_MANAGE_USER_REQUEST, handleAddtManageUsers),
])
