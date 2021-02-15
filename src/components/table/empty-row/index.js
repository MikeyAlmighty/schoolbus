import React from 'react'

import { TableRow, Td } from '../styles'

const EmptyRow = (props) => (
  <TableRow {...props}>
    <Td center>
      No data
    </Td>
  </TableRow>
)

export default EmptyRow