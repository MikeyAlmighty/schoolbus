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
  variant: 'default',
  headers: [{ title: 'header1', width: '1em' }, 'header2', 'header3'],
  data: [
    { id: '1', cell2: 'cell2', cell3: 'cell3', childInfo: [{ id: '1', description: 'Enim qui id sunt pariatur.'}] },
    { id: '2', cell2: 'cell2', cell3: 'cell3', childInfo: [{ id: '2', description: 'Aliqua ipsum id deserunt esse.'}] },
    { id: '3', cell2: 'cell2', cell3: 'cell3', childInfo: [{ id: '3', description: 'Velit sunt cupidatat ut nulla.'}] },
    { id: '4', cell2: 'cell2', cell3: 'cell3', childInfo: [{ id: '4', description: 'Aliqua consectetur ea enim esse.'}] },
    { id: '5', cell2: 'cell2', cell3: 'cell3', childInfo: [{ id: '5', description: 'Velit ex ipsum est anim.'}] },
    { id: '6', cell2: 'cell2', cell3: 'cell3', childInfo: [{ id: 6, description: 'Adipisicing magna veniam nulla reprehenderit.'}] },
  ],
  rowFormatter: ({ id, cell2, cell3, childInfo }, i) => ({
    key: id,
    cells: [id, cell2, cell3],
    childRows: childInfo.map(({ id, description }) => ({
      key: id,
      cells: [
        { value: description, colSpan: 2, textAlign: 'center' },
      ]
    }))
  })
}

export const Base = args => <Table {...args} />
Base.args = defaultArgs

export const Selected = () => (
  <Table 
    {...defaultArgs}
    selected={[defaultArgs.data[0], defaultArgs.data[1], defaultArgs.data[5]]}
  />
)

export const BorderlessVariant = () => (
  <Table 
    {...defaultArgs}
    variant='borderless'
  />
)

export const ExpandedRowBorderless = () => (
  <Table 
    {...defaultArgs}
    variant='borderless'
    expanded={[defaultArgs.data[0]]}
  />
)

export const LogVariant = () => (
  <Table
    {...defaultArgs}
    variant='log'
  />
)