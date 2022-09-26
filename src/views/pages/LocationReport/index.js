import React from 'react'
import TableNew from '../../../components/TableNew'

const LocationReport = () => {
  const header = [
    {
      Header: 'Owner Name',
      accessor: 'driver_name',
    },
    {
      Header: ' Location date time',
      accessor: 'date_time',
    },
    {
      Header: 'Location address',
      accessor: 'address',
    },
    {
      Header: 'View',
      accessor: 'view',
    },
  ]
  const tableData = [
    {
      driver_name: 'Cody Wagner',
      date_time: '12/05/2022',
      address: '1st Cross, Rammurthy nagar, Bangalore-560016',
      view: '5hr',
    },
    {
      driver_name: 'Ruben Lewis',
      date_time: '12/05/2022',
      address: 'G. Calandriello, P. Papadimitratos, J.-P. Hubaux',
      view: '5hr',
    },
    {
      driver_name: 'Cody Wagner',
      date_time: '12/05/2022',
      address: 'M. Gupta, N.S. Chaudhari, Anonymous roaming authentication',
      view: '5hr',
    },
  ]
  return (
    <div className="bg-white p-4">
      <TableNew columns={header} data={tableData} />
    </div>
  )
}

export default LocationReport
