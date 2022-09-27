import React from 'react'
import TableNew from 'src/components/TableNew'

const SharedUsers = () => {
  const header = [
    {
      Header: 'Driver Name',
      accessor: 'driver_name',
    },
    {
      Header: 'Owner Name',
      accessor: 'owner_name',
    },
    {
      Header: 'Phone Number',
      accessor: 'phone',
    },
    {
      Header: 'Used Timing',
      accessor: 'used_timing',
    },
    {
      Header: 'To',
      accessor: 'to',
    },
    {
      Header: 'From',
      accessor: 'from',
    },
  ]
  const tableData = [
    {
      driver_name: 'Cody Wagner',
      owner_name: 'Leah Ramos',
      phone: '(320) 899-4101',
      used_timing: '5hr',
      to: 'UK',
      from: 'New York',
    },
    {
      driver_name: 'Ruben Lewis',
      owner_name: 'Cody Wagner',
      phone: '(320) 879-0258',
      used_timing: '8hr',
      to: 'UK',
      from: 'Chin',
    },
    {
      driver_name: 'Ruben Lewis',
      owner_name: 'Cody Wagner',
      phone: '(320) 879-0258',
      used_timing: '8hr',
      to: 'UK',
      from: 'Chin',
    },
    {
      driver_name: 'Cody Wagner',
      owner_name: 'Leah Ramos',
      phone: '(320) 899-4101',
      used_timing: '5hr',
      to: 'UK',
      from: 'New York',
    },
  ]
  return (
    <div className="bg-white p-4">
      <TableNew columns={header} data={tableData} search />
    </div>
  )
}
export default SharedUsers
