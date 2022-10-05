import React from 'react'
import Table from '../../../components/Table'
import SelectDriver from '../../../components/SelectDriver'

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

  return (
    <div className="bg-white p-4">
      <Table actions={<SelectDriver />} search columns={header} data={tableData} />
    </div>
  )
}

export default DayWiseReport
