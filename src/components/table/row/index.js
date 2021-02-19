import React from 'react'

import { TableRow, Td } from '../styles'

const Row = ({
  row,
  index,
  rowFormatter,
  formattedRow,
  tableProps,
  isChildRow,
  variant
}) => {
  const { selected, expanded } = tableProps
  const { key, cells, onClick, childRows = [] } = formattedRow

  const hasMatchingRow = (rows, key) => rows?.some(row2 => {
    const { key: key2 } = rowFormatter(row2, index, tableProps)
    return key === key2
  })

  const isSelected = !isChildRow && hasMatchingRow(selected, key)
  const isExpanded = !isChildRow && hasMatchingRow(expanded, key)

  return (
    <>
      <TableRow
        onClick={onClick}
        isSelected={isSelected}
        isChildRow={isChildRow}
        variant={variant}
        // Adding selected classname since styled-components don't support &:first-of-type inside of the component
        // https://stackoverflow.com/a/62514547
        {...(isSelected && { className: 'selected' })}
      >
        {isChildRow && <Td></Td>}
        {cells.map((cell, i) => {
          if (typeof cell === 'function') {
            return cell({ i, row, props: tableProps, isSelected })
          }
          if (typeof cell === 'object') {
            const { value, key = `${value}${i}`, ...otherProps  } = cell
            return <Td key={key} {...otherProps}>{value}</Td>
          }
          return <Td key={`${cell}${i}`}>{cell}</Td>
        })}
      </TableRow>
      {isExpanded && childRows?.map((row, index) => (
        <Row
          key={row?.key}
          row={row}
          index={index}
          formattedRow={row}
          rowFormatter={rowFormatter}
          tableProps={tableProps}
          variant={variant}
          isChildRow
        />
      ))}
    </>
  )
}

export default Row