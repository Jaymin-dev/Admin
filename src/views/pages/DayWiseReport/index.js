import React, { useEffect, useState } from 'react'
import Table from '../../../components/Table'
import SelectDriver from '../../../components/SelectDriver'
import { useDispatch, useSelector } from 'react-redux'
import { getDaywise } from '../../../redux/SharedUsage copy/action'
import { daywiseLoadingSelector, daywiseSelector } from '../../../redux/SharedUsage copy/selectors'
import dayjs from 'dayjs'

const DayWiseReport = () => {
  const header = [
    {
      Header: 'Date',
      accessor: 'date_time',
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
  const dispatch = useDispatch()
  const daywiseData = useSelector(daywiseSelector)
  const daywiseLoading = useSelector(daywiseLoadingSelector)
  const [tableData, setTableData] = useState([])
  const [selectedDriver, setSelectedDriver] = useState()

  useEffect(() => {
    const data = daywiseData.map((l) => {
      return {
        ...l,
        date_time: dayjs(l.date_created).format('DD/MM/YYYY'),
      }
    })
    setTableData(data)
  }, [daywiseData])

  useEffect(() => {
    if (selectedDriver && selectedDriver !== 'Select driver') {
      dispatch(getDaywise({ data: selectedDriver }))
    } else {
      dispatch(getDaywise())
    }
  }, [selectedDriver])

  return (
    <div className="bg-white p-4">
      <Table
        actions={<SelectDriver setSelectedDriver={setSelectedDriver} />}
        search
        columns={header}
        data={tableData}
        loading={daywiseLoading}
      />
    </div>
  )
}

export default DayWiseReport
