import { all } from 'redux-saga/effects'

import UsersSaga from './Auth/saga'
import ManageUsersSaga from './ManageUsers/saga'
import RiderwiseSaga from './Riderwise/saga'
import DriverRatingSaga from './DriverRating/saga'
import RidewiseSaga from './Ridewise/saga'
import LocationSaga from './Location/saga'
import SharedUsageSaga from './SharedUsage/saga'
import DaywiseSaga from './SharedUsage copy/saga'

export function* sagas() {
  yield all([
    UsersSaga,
    ManageUsersSaga,
    RiderwiseSaga,
    DriverRatingSaga,
    RidewiseSaga,
    LocationSaga,
    SharedUsageSaga,
    DaywiseSaga,
  ])
}
