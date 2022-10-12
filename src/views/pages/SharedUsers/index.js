import React, { useEffect } from 'react'
import Table from 'src/components/Table'
import { useDispatch, useSelector } from 'react-redux'
import {
  sharedUsageLoadingSelector,
  sharedUsageSelector,
} from '../../../redux/SharedUsage/selectors'
import { getSharedUsage } from '../../../redux/SharedUsage/action'

const SharedUsers = () => {
  const header = [
    {
      Header: 'Driver Name',
      accessor: 'name',
    },
    {
      Header: 'Owner Name',
      accessor: 'owner_name',
    },
    {
      Header: 'Phone Number',
      accessor: 'mobile',
    },
    {
      Header: 'Used Timing',
      accessor: 'to_timing',
    },
    {
      Header: 'To',
      accessor: 'to_location',
    },
    {
      Header: 'From',
      accessor: 'from_location',
    },
  ]

  const dispatch = useDispatch()

  const sharedUsage = useSelector(sharedUsageSelector)
  const sharedUsageLoading = useSelector(sharedUsageLoadingSelector)

  useEffect(() => {
    dispatch(getSharedUsage())
  }, [])

  return (
    <div className="bg-white p-4">
      <Table columns={header} loading={sharedUsageLoading} data={sharedUsage} search />
    </div>
  )
}
export default SharedUsers
