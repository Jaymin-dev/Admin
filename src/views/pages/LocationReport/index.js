import React, { useEffect, useState } from 'react'
import Table from '../../../components/Table'
import { useDispatch, useSelector } from 'react-redux'
import { getLocationUserList } from '../../../redux/Location/action'
import {
  locationUsersListLoadingSelector,
  locationUsersListSelector,
} from '../../../redux/Location/selectors'
import { CButton } from '@coreui/react'
import dayjs from 'dayjs'

const LocationReport = () => {
  const handleClick = () => {
    window.open('https://www.google.com/maps', '_blank')
  }

  const dispatch = useDispatch()
  const locationUsersList = useSelector(locationUsersListSelector)
  const locationUsersListLoading = useSelector(locationUsersListLoadingSelector)
  const [tableData, setTableData] = useState(locationUsersList)

  useEffect(() => {
    dispatch(getLocationUserList())
  }, [])

  useEffect(() => {
    const data = locationUsersList.map((l) => {
      return {
        ...l,
        date_time: dayjs(l.location_time).format('DD/MM/YYYY'),
        view: (
          <CButton shape="rounded-pill" color="light" size="sm" onClick={handleClick}>
            View
          </CButton>
        ),
      }
    })
    setTableData(data)
  }, [locationUsersList])

  const header = [
    {
      Header: 'Owner Name',
      accessor: 'name',
    },
    {
      Header: ' Location date time',
      accessor: 'date_time',
    },
    {
      Header: 'Location address',
      accessor: 'address',
    },
    {
      Header: 'Action',
      accessor: 'view',
    },
  ]

  return (
    <div className="bg-white p-4">
      <Table columns={header} data={tableData} loading={locationUsersListLoading} />
    </div>
  )
}

export default LocationReport
