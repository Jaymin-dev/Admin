import { all } from 'redux-saga/effects'

import AuthSaga from './ManageUsers/saga'

export function* sagas() {
  yield all([AuthSaga])
}
