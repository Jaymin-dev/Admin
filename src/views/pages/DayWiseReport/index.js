import React, { useState } from 'react'
import { CFormSelect } from '@coreui/react'
import TableNew from '../../../components/TableNew'

const DayWiseReport = () => {
  const header = [
    {
      Header: 'Date',
      accessor: 'date',
    },
    {
      Header: 'Distance',
      accessor: 'distance',
    },
    {
      Header: 'Duration',
      accessor: 'duration',
    },
    {
      Header: 'SOC',
      accessor: 'soc',
    },
  ]
  const tableData = [
    {
      date: '07/05/2022',
      distance: '12KM',
      duration: '80Hr',
      soc: '6.5',
    },
    {
      date: '06/04/2022',
      distance: '96KM',
      duration: '25Hr',
      soc: '3.1',
    },
    {
      date: '12/07/2022',
      distance: '78KM',
      duration: '150Hr',
      soc: '96',
    },
    {
      date: '07/05/2022',
      distance: '12KM',
      duration: '80Hr',
      soc: '6.5',
    },
  ]

  const [age, setAge] = useState('')

  const handleChange = (event) => {
    setAge(event.target.value)
  }

  return (
    <div className="bg-white p-4">
      <TableNew
        actions={
          <CFormSelect
            aria-label="Default select example"
            options={[
              'Select driver',
              { label: 'One', value: '1' },
              { label: 'Two', value: '2' },
              { label: 'Three', value: '3', disabled: true },
            ]}
          />
        }
        search
        columns={header}
        data={tableData}
      />
    </div>
  )
}

export default DayWiseReport
