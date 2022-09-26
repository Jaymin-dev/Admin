import React from 'react'
import TableNew from 'src/components/TableNew'

const ManageUsers = () => {
  const header = [
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Mobile no',
      accessor: 'mobile_no',
    },
    {
      Header: 'Email ID',
      accessor: 'email',
    },
    {
      Header: 'Date created',
      accessor: 'date',
    },
  ]
  const tableData = [
    {
      name: 'Leah Ramos',
      mobile_no: '(320) 899-4101',
      email: 'leah.ramos@example.com',
      date: '2/4/1964',
    },
    {
      name: 'Cody Wagner',
      mobile_no: '(659) 590-6871',
      email: 'cody.wagner@example.com',
      date: '11/3/1974',
    },
    {
      name: 'Ruben Lewis',
      mobile_no: '(989) 295-5975',
      email: 'ruben.lewis@example.com',
      date: '1/5/1997',
    },
  ]
  return (
    <div className="bg-white p-4">
      <TableNew columns={header} data={tableData} />
    </div>
  )
}
export default ManageUsers
