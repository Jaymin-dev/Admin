import React from 'react'
import TableNew from '../../../components/TableNew'

const DriverRatingReport = () => {
  const header = [
    {
      Header: 'Driver Name',
      accessor: 'driver_name',
    },
    {
      Header: 'Call Duration',
      accessor: 'call_duration',
    },
    {
      Header: 'Vehicle Speed',
      accessor: 'speed',
    },
    {
      Header: 'Honking',
      accessor: 'honking',
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
  const tableData = [
    {
      driver_name: 'Cody Wagner',
      call_duration: '5',
      speed: '80',
      honking: '996',
      braking: '2',
      avg: '25',
    },
    {
      driver_name: 'Ruben Lewis',
      call_duration: '74',
      speed: '85',
      honking: '8520',
      braking: '122',
      avg: '28',
    },
    {
      driver_name: 'Leah Ramos',
      call_duration: '87',
      speed: '85',
      honking: '558',
      braking: '122',
      avg: '28',
    },
  ]
  return (
    <div className="bg-white p-4">
      <TableNew columns={header} data={tableData} search />
    </div>
  )
}
export default DriverRatingReport
