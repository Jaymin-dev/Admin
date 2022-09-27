import React from 'react'
import TableNew from '../../../components/TableNew'
import { CFormSelect } from '@coreui/react'

const RiderWiseReport = () => {
  const header = [
    {
      Header: 'Driver Name',
      accessor: 'driver_name',
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
      accessor: 'temperature',
    },
    {
      Header: 'Duration',
      accessor: 'duration',
    },
  ]
  const tableData = [
    {
      driver_name: 'Ruben Lewis',
      distance: '5',
      speed: '62',
      temperature: '25',
      duration: '28',
    },

    {
      driver_name: 'Cody Wagner',
      distance: '95',
      speed: '80',
      temperature: '996',
      duration: '47',
    },
    {
      driver_name: 'Leah Ramos',
      distance: '36',
      speed: '15',
      temperature: '254',
      duration: '22',
    },
    {
      driver_name: 'Ruben Lewis',
      distance: '5',
      speed: '62',
      temperature: '25',
      duration: '28',
    },

    {
      driver_name: 'Cody Wagner',
      distance: '95',
      speed: '80',
      temperature: '996',
      duration: '47',
    },
    {
      driver_name: 'Leah Ramos',
      distance: '36',
      speed: '15',
      temperature: '254',
      duration: '22',
    },
  ]
  return (
    <div className="bg-white p-4">
      <TableNew columns={header} data={tableData} search />
    </div>
  )
}

export default RiderWiseReport
