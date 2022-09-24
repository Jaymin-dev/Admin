import React from 'react'
import { CNavItem } from '@coreui/react'
import { ReactComponent as ManageUsersIcon } from './assets/Icons/manage-user.svg'
import { ReactComponent as SharedUsersIcon } from './assets/Icons/shared-users.svg'
import { ReactComponent as DriverRatingIcon } from './assets/Icons/driver-rating-report.svg'
import { ReactComponent as RiderwiseReport } from './assets/Icons/riderwise-report.svg'
import { ReactComponent as DaywiseReportIcon } from './assets/Icons/day-wise-report.svg'
import { ReactComponent as RidewiseReportIcon } from './assets/Icons/ridewise-report.svg'
import { ReactComponent as LocationReportIcon } from './assets/Icons/location-report.svg'

const _nav = [
  {
    component: CNavItem,
    name: 'Manage Users',
    to: '/dashboard',
    Icon: <ManageUsersIcon className="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Shared Users',
    to: '/shared-users',
    Icon: <SharedUsersIcon className="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Driver rating report',
    to: '/driver-rating-report',
    Icon: <DriverRatingIcon className="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Riderwise report',
    to: '/riderwise-report',
    Icon: <RiderwiseReport className="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Daywise report',
    to: '/daywise-report',
    Icon: <DaywiseReportIcon className="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Ridewise report',
    to: '/ridewise-report',
    Icon: <RidewiseReportIcon className="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Location report',
    to: '/location-report',
    Icon: <LocationReportIcon className="nav-icon" />,
  },

  // {
  //   component: CNavGroup,
  //   name: 'Pages',
  //   icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Login',
  //       to: '/login',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Register',
  //       to: '/register',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Error 404',
  //       to: '/404',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Error 500',
  //       to: '/500',
  //     },
  //   ],
  // },
]

export default _nav
