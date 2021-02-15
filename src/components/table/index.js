import React from 'react'

import Flex from '../flex'
import Loader from '../loader'
import TableActions from './table-actions'
import SortingCaret from './sorting-caret'
import EmptyRow from './empty-row'
import { EmptyText, StyledTable, Th, TableRow, Td } from './styles'

const getSortingDirection = (sorting, key) => {
  if (sorting?.[key]) {
    return sorting[key] === 'asc' ? 'dsc' : 'asc'
  }
  return 'asc'
}

function renderHeader (header, i, props) {
  if (typeof header === 'object' && header !== null) {
    const { sorting, setSorting } = props
    const { key = header.title, title, sortable = false, width } = header

    if (!key) {
      throw new Error('key and title required')
    }

    const direction = getSortingDirection(sorting, key)

    return (
      <Th key={`${title}${i}`} width={width}>
        {title}
        {sortable && (
          <SortingCaret
            sorting={sorting[key] && direction}
            onClick={() => setSorting({ [key]: direction })}
          />
        )}
      </Th>
    )
  }

  if (React.isValidElement(header)) return header
  if (typeof header === 'function') {
    return header({ i, props })
  }
  return <Th key={`${header}${i}`}>{header}</Th>
}

const Table = props => {
  const {
    data,
    rowFormatter,
    headers,
    setPageSize,
    pageSize,
    page,
    setPage,
    isLoading,
    style,
    tableActionsStyles,
    containerStyles,
    meta,
    showEmpty,
    emptyText,
    emptyTable,
    variant,
    withPagination
  } = props

  const isEmpty = Array.isArray(data) && data.length === 0
  const hasPagination = withPagination && setPageSize && setPage && !isEmpty

  return (
    <div style={containerStyles}>
      <Flex alignItems='flex-start' justifyContent='center' style={style}>
        {isLoading && <Loader noPadding />}

        {!isLoading && isEmpty && !showEmpty && (emptyText 
          ? <EmptyText>{emptyText}</EmptyText> 
          : emptyTable)}

        {!isLoading && (!isEmpty || showEmpty) && (
          <StyledTable variant={variant}>
            <thead>
              <tr>
                {headers.map((header, index) =>
                  renderHeader(header, index, props)
                )}
              </tr>
            </thead>
            <tbody>
              {isEmpty 
                ? <EmptyRow colspan={headers.length} />  
                : data.map((row, index) => {
                  const formattedRow = rowFormatter(row, index, props)
                  const { selected } = props
                  const { key, cells, onClick } = formattedRow

                  const isSelected = selected?.some(row2 => {
                    const { key: key2 } = rowFormatter(row2, index, props)
                    return key === key2
                  })

                  return (
                    <TableRow
                      key={key}
                      onClick={onClick}
                      selected={isSelected}
                      // Adding selected classname since styled-components don't support &:first-of-type inside of the component
                      // https://stackoverflow.com/a/62514547
                      {...(isSelected && { className: 'selected' })}
                    >
                      {cells.map((cell, i) => {
                        if (typeof cell === 'function') {
                          return cell({ key: cell.toString, i, row, props, isSelected })
                        }
                        return <Td key={`${cell}${i}`}>{cell}</Td>
                      })}
                    </TableRow>
                  )
                })
              }
            </tbody>
          </StyledTable>
        )}
      </Flex>

      {hasPagination ? (
        <TableActions
          containerStyle={tableActionsStyles}
          count={meta.count}
          setPageSize={setPageSize}
          pageSize={pageSize}
          page={page}
          setPage={setPage}
        />
      ) : null}
    </div>
  )
}

Table.defaultProps = {
  showEmpty: false,
  page: 0,
  headers: [],
  data: [],
  withPagination: true
}

export default Table
