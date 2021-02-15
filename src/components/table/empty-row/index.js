import React from 'react'

import { TableRow, Td } from '../styles'

const EmptyRow = (props) => (
  <TableRow>
    <Td center {...props}>
      No data
    </Td>
  </TableRow>
)

export default EmptyRow