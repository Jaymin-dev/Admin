import React, { useEffect, useState } from 'react'
import Table from '../../../components/Table'
import { useDispatch, useSelector } from 'react-redux'
import { getRiderWiseUserList } from '../../../redux/Riderwise/action'
import {
  riderWiseUsersListLoadingSelector,
  riderWiseUsersListSelector,
} from '../../../redux/Riderwise/selectors'

const RiderWiseReport = () => {
  const dispatch = useDispatch()
  const riderWiseUsersList = useSelector(riderWiseUsersListSelector)
  const riderWiseUsersListLoading = useSelector(riderWiseUsersListLoadingSelector)
  const [data, setData] = useState(riderWiseUsersList)

  useEffect(() => {
    setData(riderWiseUsersList)
  }, [riderWiseUsersList])
  const header = [
    {
      Header: 'Driver Name',
      accessor: 'name',
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
      Header: 'Temperature',
      accessor: 'temp',
    },
    // {
    //   Header: 'Duration',
    //   accessor: 'duration',
    // },
  ]

  useEffect(() => {
    dispatch(getRiderWiseUserList())
  }, [])

  return (
    <div className="bg-white p-4">
      <Table columns={header} data={data} search loading={riderWiseUsersListLoading} />
    </div>
  )
}

export default RiderWiseReport
