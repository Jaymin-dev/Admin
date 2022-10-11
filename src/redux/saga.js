import { all } from 'redux-saga/effects'

import ManageUsersSaga from './ManageUsers/saga'
import RiderwiseSaga from './Riderwise/saga'
import DriverRatingSaga from './DriverRating/saga'
import RidewiseSaga from './Ridewise/saga'
import LocationSaga from './Location/saga'

export function* sagas() {
  yield all([ManageUsersSaga, RiderwiseSaga, DriverRatingSaga, RidewiseSaga, LocationSaga])
}
