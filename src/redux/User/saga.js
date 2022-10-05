// import { all, call, put, takeLatest } from 'redux-saga/effects'
//
// import { Axios } from '../../api/axios'
// import { getSimplifiedError } from '../../utils/error'
// import { GET_MANAGE_USER_ERROR, GET_MANAGE_USER_REQUEST, GET_MANAGE_USER_SUCCESS } from './reducer'
// import { resetFlagsManageUsers } from './action'
//
// async function manageUsers(payload) {
//   return await Axios.post('/manage-users/', payload)
// }
// function* handleGetManageUsers({ payload }) {
//   try {
//     const response = yield call(manageUsers, payload)
//     if (response) {
//       yield put({
//         type: GET_MANAGE_USER_SUCCESS,
//       })
//       yield put(
//         resetFlagsManageUsers({
//           blockType: 'manageUsers',
//         }),
//       )
//     }
//   } catch (error) {
//     yield put({
//       type: GET_MANAGE_USER_ERROR,
//       error: getSimplifiedError(error),
//     })
//   }
// }
//
// export default all([takeLatest(GET_MANAGE_USER_REQUEST, handleGetManageUsers)])
