import { CButton, CCol } from '@coreui/react'
import React from 'react'
import AddUserDialogBox from 'src/components/AddUserDialogBox'
import TableNew from 'src/components/TableNew'
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
const tableDataRow = [
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
const ManageUsers = () => {
  const [open, setOpen] = React.useState(false)
  const [tableData, setTableData] = React.useState([...tableDataRow])

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  const addNewUser = (data) => {
    setTableData([
      ...tableData,
      {
        ...data,
        date: new Date().toLocaleDateString(),
      },
    ])
    setOpen(false)
  }
  return (
    <div className="bg-white p-4">
      <AddUserDialogBox
        addNewUser={addNewUser}
        handleClose={handleClose}
        open={open}
        handleClickOpen={handleClickOpen}
      />
      <TableNew
        columns={header}
        data={tableData}
        search
        actions={
          <CButton onClick={handleClickOpen} color="primary" className="px-4">
            Add User
          </CButton>
        }
        h
      />
    </div>
  )
}
export default ManageUsers
