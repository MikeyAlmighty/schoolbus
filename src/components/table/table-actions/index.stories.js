import React from 'react'
import TableActions from './'

export default {
  title: 'Table/ Actions',
  component: TableActions,
  parameters: {
    docs: {
      description: {
        component:
          'Pagination and limit actions for the table component.',
      },
    },
  },
}

export const Base = args => <TableActions {...args} />

Base.args = {
  pageSize: 10,
  setPageSize: console.log,
  page: 0,
  setPage: console.log,
  containerStyle: null,
  count: 113
}