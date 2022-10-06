import { CButton, CCol } from '@coreui/react'
import React from 'react'
import AddUserDialogBox from 'src/components/AddUserDialogBox'
import Table from 'src/components/Table'
import { useDispatch, useSelector } from 'react-redux'
import { manageUsersSelector } from '../../../redux/ManageUsers/selectors'
import { addManageUsers } from '../../../redux/ManageUsers/action'
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
// const tableDataRow =
const ManageUsers = () => {
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false)
  const tableDataRow = useSelector(manageUsersSelector)
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
    dispatch(addManageUsers(data))
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
      <Table
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
