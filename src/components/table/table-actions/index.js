import React, { Component } from 'react'
import Flex from '../../flex'
import Select from '../../select/without-formik'

import {
  PageSizeDescription,
  PaginationButton,
  StyledIconButton,
  styleOverrides
} from './styles'

function createPageSizeText (page, pageSize, count) {
  const offset = page * pageSize
  const from = count > offset ? offset + 1 : offset
  const to = offset + Math.min(count - offset, pageSize)

  return `records | Showing ${from} - ${to} of ${count} entries`
}

const PAGINATION_OPTIONS = [
  { label: 10 },
  { label: 20 },
  { label: 50 },
]

class TableActions extends Component {
  static defaultProps = {
    containerStyle: {},
    pageSize: 10,
    page: 0,
    count: 0
  }

  render () {
    const {
      pageSize,
      setPageSize,
      page,
      setPage,
      containerStyle,
      count
    } = this.props

    const currentPage = page + 1

    const isFirstPage = page === 0
    const isLastPage = (page + 1) * pageSize >= count

    return (
      <Flex
        alignItems='center'
        justifyContent='space-between'
        m='2em 0 0.5em'
        style={containerStyle}
      >
        <Flex alignItems='center' justifyContent='center'>
          <Select
            value={PAGINATION_OPTIONS[0]}
            onChange={setPageSize}
            options={PAGINATION_OPTIONS}
            placeholder=''
            variant='secondary'
            width='4em'
            minWidth='4em'
            {...styleOverrides.select}
          />

          <PageSizeDescription>
            {createPageSizeText(page, pageSize, count)}
          </PageSizeDescription>
        </Flex>

        <Flex height='35px'>
          <StyledIconButton
            variant='clear'
            icon='ChevronLeft'
            disabled={isFirstPage}
            onClick={() => setPage(page - 1)}
          />

          <PaginationButton
            disabled={isFirstPage}
            type='button'
            onClick={() => setPage(page - 1)}
          >
            {isFirstPage ? '-' : currentPage - 1}
          </PaginationButton>

          <PaginationButton active type='button'>
            {currentPage}
          </PaginationButton>

          <PaginationButton
            disabled={isLastPage}
            type='button'
            onClick={() => setPage(page + 1)}
          >
            {isLastPage ? '-' : currentPage + 1}
          </PaginationButton>

          <StyledIconButton
            variant='clear'
            icon='ChevronRight'
            isRight
            disabled={isLastPage}
            onClick={() => setPage(page + 1)}
          />
        </Flex>
      </Flex>
    )
  }
}

export default TableActions
