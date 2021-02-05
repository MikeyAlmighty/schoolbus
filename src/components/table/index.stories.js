import React from 'react'
import Table from './'

export default {
  title: 'Table/ Table',
  component: Table,
  parameters: {
    docs: {
      description: {
        component:
          'A table component for use with [@lessondesk/react-table-context](https://github.com/fullfacing/react-table-context).',
      },
    },
  },
}

const defaultArgs = {
  headers: ['header1', 'header2', 'header3'],
  data: [
    { id: '1', cell2: 'cell2', cell3: 'cell3' },
    { id: '2', cell2: 'cell2', cell3: 'cell3' },
    { id: '3', cell2: 'cell2', cell3: 'cell3' },
    { id: '4', cell2: 'cell2', cell3: 'cell3' },
    { id: '5', cell2: 'cell2', cell3: 'cell3' },
    { id: '6', cell2: 'cell2', cell3: 'cell3' },
  ],
  rowFormatter: ({ id, cell2, cell3 }, i) => ({
    key: id,
    cells: [id, cell2, cell3]
  })
}

export const Base = args => <Table {...args} />
Base.args = defaultArgs

export const Selected = () => (
  <Table 
    {...defaultArgs}
    selected={[defaultArgs.data[1], defaultArgs.data[2], defaultArgs.data[4]]}
  />
)