import React from 'react'
import TableNew from '../../../components/TableNew'
import { CButton } from '@coreui/react'

const LocationReport = () => {
  const handleClick = () => {
    window.open('https://www.google.com/maps', '_blank')
  }

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
      Header: 'Action',
      accessor: 'view',
    },
  ]
  const tableData = [
    {
      driver_name: 'Cody Wagner',
      date_time: '12/05/2022',
      address: '1st Cross, Rammurthy nagar, Bangalore-560016',
      view: (
        <CButton shape="rounded-pill" color="light" size="sm" onClick={handleClick}>
          View
        </CButton>
      ),
    },
    {
      driver_name: 'Ruben Lewis',
      date_time: '12/05/2022',
      address: 'G. Calandriello, P. Papadimitratos, J.-P. Hubaux',
      view: (
        <CButton shape="rounded-pill" color="light" size="sm" onClick={handleClick}>
          View
        </CButton>
      ),
    },
    {
      driver_name: 'Cody Wagner',
      date_time: '12/05/2022',
      address: 'M. Gupta, N.S. Chaudhari, Anonymous roaming authentication',
      view: (
        <CButton shape="rounded-pill" color="light" size="sm" onClick={handleClick}>
          View
        </CButton>
      ),
    },
  ]
  return (
    <div className="bg-white p-4">
      <TableNew columns={header} data={tableData} />
    </div>
  )
}

export default LocationReport
