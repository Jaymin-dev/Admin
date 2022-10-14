import React from 'react'

const filterType = {
  SELECT_COLUMN_FILTER: SelectColumnFilter,
}

function SelectColumnFilter({ column: { filterValue, setFilter, preFilteredRows, id } }) {
  const options = React.useMemo(() => {
    const options = new Set()
    preFilteredRows.forEach((row) => {
      options.add(row.values[id])
    })
    return [...options.values()]
  }, [id, preFilteredRows])

  return (
    <select
      value={filterValue}
      style={{
        border: 'none',
        borderBottom: '1px solid #a9a9a980',
        color: '#2c384af2',
        cursor: 'pointer',
      }}
      onChange={(e) => {
        setFilter(e.target.value || undefined)
      }}
    >
      <option value="">All</option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}

export { filterType }
