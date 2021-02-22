import React from 'react'

import { TableRow, Td } from '../styles'

const EmptyRow = ({ emptyText = 'No data', ...otherProps}) => (
  <TableRow>
    <Td center {...props}>
      {emptyText}
    </Td>
  </TableRow>
)

export default EmptyRow