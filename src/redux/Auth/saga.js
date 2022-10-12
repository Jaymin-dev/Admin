import { all, call, put, takeLatest } from 'redux-saga/effects'

import { Axios } from '../../api/axios'
import { getSimplifiedError } from '../../utils/error'
import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
} from './reducer'
import { resetBlockUsers } from './action'

async function loginUser(payload) {
  return await Axios.get('/admin_login.php', { params: { flag: 'login', ...payload } })
}
function* handleLoginUser({ payload }) {
  try {
    const response = yield call(loginUser, payload)
    if (!response.status) {
      yield put({
        type: LOGIN_USER_ERROR,
        payload: response.message,
      })
    } else {
      yield put({
        type: LOGIN_USER_SUCCESS,
      })
      localStorage.setItem('isLogin', 'true')
      localStorage.setItem('user', JSON.stringify(response))
      yield put(
        resetBlockUsers({
          blockType: 'login',
        }),
      )
      window.location.reload()
    }
  } catch (error) {
    yield put({
      type: LOGIN_USER_ERROR,
      payload: getSimplifiedError(error),
    })
  }
}

async function registerUser(payload) {
  return await Axios.get('/add_user.php', { params: { flag: 'userRegister', ...payload } })
}
function* handleRegisterUser({ payload }) {
  try {
    const response = yield call(registerUser, payload)
    if (!response.status) {
      yield put({
        type: REGISTER_USER_SUCCESS,
      })
      yield put(
        resetBlockUsers({
          blockType: 'register',
        }),
      )
      window.location.reload()
    }
  } catch (error) {
    yield put({
      type: REGISTER_USER_ERROR,
      payload: getSimplifiedError(error),
    })
  }
}

export default all([
  takeLatest(LOGIN_USER_REQUEST, handleLoginUser),
  takeLatest(REGISTER_USER_REQUEST, handleRegisterUser),
])
