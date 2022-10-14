import { CButton, CCol } from '@coreui/react'
import React, { useEffect } from 'react'
import AddUserDialogBox from 'src/components/AddUserDialogBox'
import Table from 'src/components/Table'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import {
  addUsersSelector,
  manageUsersLoadingSelector,
  manageUsersSelector,
} from '../../../redux/ManageUsers/selectors'
import {
  addManageUsers,
  getManageUsers,
  resetFlagsManageUsers,
} from '../../../redux/ManageUsers/action'
import dayjs from 'dayjs'
import { userDataSelector } from '../../../redux/Auth/selectors'
const header = [
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Mobile no',
    accessor: 'mobile',
  },
  {
    Header: 'Email ID',
    accessor: 'email_id',
  },
  {
    Header: 'Date created',
    accessor: 'date_time',
  },
]
// const tableDataRow =
const ManageUsers = () => {
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false)
  const tableDataRow = useSelector(manageUsersSelector)
  const manageUsersLoading = useSelector(manageUsersLoadingSelector)
  const [tableData, setTableData] = React.useState([])
  const userData = useSelector(userDataSelector)
  const addUsers = useSelector(addUsersSelector)
  const alert = useAlert()

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
    const payload = {
      ...data,
      date_created: new Date(),
      last_modified: new Date(),
      isActive: 0,
      owner_id: userData.id,
      latitude: 1,
      longitude: 1,
      location_time: 1,
      userData,
    }
    dispatch(addManageUsers(payload))
  }

  useEffect(() => {
    // dispatch(getManageUsers({ search_data: userData.username }))
    dispatch(getManageUsers())
  }, [])

  useEffect(() => {
    if (addUsers.success) {
      setOpen(false)
      dispatch(
        resetFlagsManageUsers({
          blockType: 'addUsers',
        }),
      )
    }
  }, [addUsers.success])

  useEffect(() => {
    if (addUsers.error) alert.error(addUsers.error)
  }, [addUsers.error])

  useEffect(() => {
    const data = tableDataRow.map((l) => {
      return {
        ...l,
        date_time: dayjs(l.date_time).format('DD/MM/YYYY'),
      }
    })
    setTableData(data)
  }, [tableDataRow])

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
        loading={manageUsersLoading}
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
