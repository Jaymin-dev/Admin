import React, { useEffect, useState } from 'react'
import Table from '../../../components/Table'
import './styles.scss'
import { CFormSelect } from '@coreui/react'
import { useDispatch, useSelector } from 'react-redux'
import {
  driverRatingUsersListLoadingSelector,
  driverRatingUsersListSelector,
} from '../../../redux/DriverRating/selectors'
import { getDriverRatingList } from '../../../redux/DriverRating/action'

const DriverRatingReport = () => {
  const dispatch = useDispatch()

  const header = [
    {
      Header: 'Driver Name',
      accessor: 'name',
    },
    {
      Header: 'Call Duration',
      accessor: 'calls',
    },
    {
      Header: 'Vehicle Speed',
      accessor: 'speed',
    },
    {
      Header: 'Honking',
      accessor: 'honking',
      // Filter: filterType.SELECT_COLUMN_FILTER,
      // filter: 'equals',
    },
    {
      Header: 'Braking',
      accessor: 'braking',
    },
    {
      Header: 'Avg',
      accessor: 'avg',
    },
  ]

  const driverRatingUsersList = useSelector(driverRatingUsersListSelector)
  const driverRatingUsersListLoading = useSelector(driverRatingUsersListLoadingSelector)

  const [data, setData] = useState(driverRatingUsersList)
  const [filterVal, setFilterVal] = useState('Honking select')

  useEffect(() => {
    if (filterVal !== 'Honking select') {
      return setData(driverRatingUsersList.filter((v) => v.honking === filterVal))
    }
    setData(driverRatingUsersList)
  }, [filterVal])

  useEffect(() => {
    setData(driverRatingUsersList)
  }, [driverRatingUsersList])

  useEffect(() => {
    dispatch(getDriverRatingList())
  }, [])

  const Filter = () => {
    const options = driverRatingUsersList.map((val) => val.honking)
    return (
      <CFormSelect
        aria-label="Default select example"
        options={['Honking select', ...[...new Set(options)]]}
        value={filterVal}
        onChange={(e) => {
          setFilterVal(e.target.value || undefined)
        }}
      />
    )
  }
  return (
    <div className="bg-white p-4">
      <Table
        columns={header}
        data={data}
        loading={driverRatingUsersListLoading}
        search
        actions={<Filter />}
      />
    </div>
  )
}
export default DriverRatingReport
