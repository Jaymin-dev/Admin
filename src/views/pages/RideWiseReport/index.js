import React, { useEffect, useState } from 'react'
import Table from '../../../components/Table'
import SelectDriver from '../../../components/SelectDriver'
import { useDispatch, useSelector } from 'react-redux'
import { getRidewiseUserList } from '../../../redux/Ridewise/action'
import {
  ridewiseUsersListLoadingSelector,
  ridewiseUsersListSelector,
} from '../../../redux/Ridewise/selectors'
import { getDaywise } from '../../../redux/SharedUsage copy/action'

const RideWiseReport = () => {
  const dispatch = useDispatch()
  const ridewiseUsersList = useSelector(ridewiseUsersListSelector)
  const ridewiseUsersListLoading = useSelector(ridewiseUsersListLoadingSelector)
  const [data, setData] = useState(ridewiseUsersList)
  const [selectedDriver, setSelectedDriver] = useState()

  useEffect(() => {
    setData(ridewiseUsersList)
  }, [ridewiseUsersList])

  useEffect(() => {
    if (selectedDriver && selectedDriver !== 'Select driver') {
      dispatch(getRidewiseUserList({ data: selectedDriver }))
    } else {
      dispatch(getRidewiseUserList())
    }
  }, [selectedDriver])

  const header = [
    {
      Header: 'RideNo',
      accessor: 'driver_id',
    },
    {
      Header: 'Distance',
      accessor: 'distance',
    },
    {
      Header: 'Speed',
      accessor: 'speed',
    },
    {
      Header: 'Duration',
      accessor: 'duration',
    },
  ]

  return (
    <div className="bg-white p-4">
      <Table
        columns={header}
        loading={ridewiseUsersListLoading}
        data={data}
        search
        actions={<SelectDriver setSelectedDriver={setSelectedDriver} />}
      />
    </div>
  )
}

export default RideWiseReport
