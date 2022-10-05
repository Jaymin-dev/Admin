import React from 'react'
import Table from '../../../components/Table'
import { filterType } from '../../../components/Table/helper.jsx'

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
      Filter: filterType.SELECT_COLUMN_FILTER,
      filter: 'equals',
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
      honking: 'Very good',
      braking: '2',
      avg: '25',
    },
    {
      driver_name: 'Ruben Lewis',
      call_duration: '74',
      speed: '85',
      honking: 'Good',
      braking: '122',
      avg: '28',
    },
    {
      driver_name: 'Leah Ramos',
      call_duration: '87',
      speed: '85',
      honking: 'Average',
      braking: '122',
      avg: '28',
    },
    {
      driver_name: 'Ruben Cody',
      call_duration: '96',
      speed: '366',
      honking: 'Bad',
      braking: '22',
      avg: '28',
    },
  ]
  return (
    <div className="bg-white p-4">
      <Table columns={header} data={tableData} search />
    </div>
  )
}
export default DriverRatingReport
