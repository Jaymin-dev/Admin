import React from 'react'
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

const TableNew = ({ columns = [], data = [] }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  })
  return (
    <div className="main-table-wrapper">
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
