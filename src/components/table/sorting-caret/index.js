import React from 'react'
import { CaretContainer, CaretDown, CaretUp } from './styles'

const SortingCaret = ({ sorting, ...otherProps }) => {
  return (
    <CaretContainer {...otherProps}>
      <CaretUp active={sorting === 'asc'} />
      <CaretDown active={sorting === 'dsc'} />
    </CaretContainer>
  )
}

export default SortingCaret
