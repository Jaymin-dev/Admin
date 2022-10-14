import React, { useEffect, useState } from 'react'
import { CFormSelect } from '@coreui/react'
import { useDispatch, useSelector } from 'react-redux'
import { manageUsersSelector } from '../../redux/ManageUsers/selectors'
import { getManageUsers } from '../../redux/ManageUsers/action'

const SelectDriver = ({ setSelectedDriver }) => {
  const driverData = useSelector(manageUsersSelector)
  const [driverOptions, setDriverOptions] = useState([])
  const [value, setValue] = useState()
  const dispatch = useDispatch()

  useEffect(() => {
    if (!driverData.length) dispatch(getManageUsers())
  }, [driverData])

  useEffect(() => {
    if (setSelectedDriver) setSelectedDriver(value)
  }, [value])
  useEffect(() => {
    const data = driverData.map((val) => {
      return {
        label: val.name,
        value: val.id,
      }
    })
    setDriverOptions(data)
  }, [driverData])

  return (
    <CFormSelect
      onChange={({ target: { value } }) => setValue(value)}
      aria-label="Default select example"
      options={[
        {
          label: 'Select driver',
          value: '',
        },
        ...driverOptions,
      ]}
    />
  )
}

export default SelectDriver
