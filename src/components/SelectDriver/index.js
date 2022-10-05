import React, { useEffect, useState } from 'react'
import { CFormSelect } from '@coreui/react'
import { useSelector } from 'react-redux'
import { manageUsersSelector } from '../../redux/ManageUsers/selectors'

const SelectDriver = () => {
  const driverData = useSelector(manageUsersSelector)

  const [driverOptions, setDriverOptions] = useState([])

  useEffect(() => {
    const data = driverData.map((val) => {
      return {
        label: val.name,
        value: val.name,
      }
    })
    setDriverOptions(data)
  }, [driverData])
  return (
    <CFormSelect
      aria-label="Default select example"
      options={['Select driver', ...driverOptions]}
    />
  )
}

export default SelectDriver
