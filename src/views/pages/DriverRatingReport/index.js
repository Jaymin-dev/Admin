import React, { useEffect, useState } from 'react'
import Table from '../../../components/Table'
import './styles.scss'
import { CFormSelect } from '@coreui/react'

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

  const [data, setData] = useState(tableData)
  const [filterVal, setFilterVal] = useState('Honking select')

  useEffect(() => {
    if (filterVal !== 'Honking select') {
      return setData(tableData.filter((v) => v.honking === filterVal))
    }
    setData(tableData)
  }, [filterVal])

  const Filter = () => {
    const options = tableData.map((val) => val.honking)
    return (
      <CFormSelect
        aria-label="Default select example"
        options={['Honking select', ...options]}
        value={filterVal}
        onChange={(e) => {
          setFilterVal(e.target.value || undefined)
        }}
      />
    )
  }
  return (
    <div className="bg-white p-4">
      <Table columns={header} data={data} search actions={<Filter />} />
    </div>
  )
}
export default DriverRatingReport
