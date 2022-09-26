import React from 'react'
import TableNew from '../../../components/TableNew'

const RideWiseReport = () => {
  const header = [
    {
      Header: 'RideNo',
      accessor: 'rideNo',
    },
    {
      Header: 'Distance',
      accessor: 'distance',
    },
    {
      Header: 'Speed',
      accessor: 'Speed',
    },
    {
      Header: 'Duration',
      accessor: 'duration',
    },
  ]
  const tableData = [
    {
      rideNo: '5452',
      distance: '12KM',
      Speed: '80Hr',
      duration: '6.5',
    },
    {
      rideNo: '545',
      distance: '57KM',
      Speed: '69Hr',
      duration: '85',
    },
    {
      rideNo: '2022',
      distance: '88KM',
      Speed: '176Hr',
      duration: '89',
    },
  ]
  return (
    <div className="bg-white p-4">
      <TableNew columns={header} data={tableData} />
    </div>
  )
}

export default RideWiseReport
