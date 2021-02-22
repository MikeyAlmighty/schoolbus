import React from 'react'

import { TableRow, Td } from '../styles'

const EmptyRow = ({ emptyText = 'No data', ...otherProps }) => (
  <TableRow>
    <Td center {...otherProps}>
      {emptyText}
    </Td>
  </TableRow>
)

export default EmptyRow