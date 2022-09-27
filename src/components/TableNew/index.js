import React, { useState } from 'react'
import { useTable } from 'react-table'
import './styles.scss'
import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'

const TableNew = ({ columns = [], data = [], search, actions }) => {
  const [tableData, setTableData] = useState(data)

  const handleChange = ({ target: { value } }) => {
    const searchRec = data.filter((val) => {
      return Object.keys(val).filter((k) => {
        return val[k]?.toLowerCase().includes(value?.toLowerCase())
      }).length
    })
    setTableData(searchRec)
  }

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data: tableData,
  })
  return (
    <div className="main-table-wrapper">
      <div className="d-flex justify-content-end align-items-center flex-wrap w-100 mb-4">
        {search && (
          <Paper
            component="form"
            sx={{
              p: '2px 4px',
              display: 'flex',
              alignItems: 'center',
              maxWidth: 300,
              width: '100%',
            }}
          >
            <IconButton type="button" sx={{ p: '5px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search..."
              inputProps={{ 'aria-label': 'search google maps' }}
              onChange={handleChange}
            />
          </Paper>
        )}
        {actions && <div className="pl-3">{actions}</div>}
      </div>
      <CTable {...getTableProps()}>
        <CTableHead>
          {headerGroups.map((headerGroup, headerGroupsIndex) => (
            <CTableRow {...headerGroup.getHeaderGroupProps()} key={headerGroupsIndex}>
              {headerGroup.headers.map((column, i) => (
                <CTableHeaderCell {...column.getHeaderProps()} key={`${i}--${headerGroupsIndex}`}>
                  {column.render('Header')}
                </CTableHeaderCell>
              ))}
            </CTableRow>
          ))}
        </CTableHead>
        <CTableBody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row)
            return (
              <CTableRow {...row.getRowProps()} key={i}>
                {row.cells.map((cell, getRowProps) => {
                  return (
                    <CTableDataCell {...cell.getCellProps()} key={getRowProps}>
                      {cell.render('Cell')}
                    </CTableDataCell>
                  )
                })}
              </CTableRow>
            )
          })}
        </CTableBody>
      </CTable>
    </div>
  )
}

export default TableNew
