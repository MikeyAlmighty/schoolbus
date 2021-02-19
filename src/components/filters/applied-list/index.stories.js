import React from 'react'

import AppliedList from './'

export default {
  title: 'Filters/ Applied list',
  component: AppliedList,
}

export const Base = (args) => <AppliedList {...args} />

Base.args = {
  filterTypes: [
    { label: 'Multi 2', key: 'multi2' },
    { label: 'Multi', key: 'multi', getValue: arr => console.log({ arr }) || `custom value - ${arr[0]}`},
    { label: 'Single', key: 'single' }
  ],
  filters: {
    multi: ['option1'],
    multi2: ['option1', 'option2'],
    single: 'Option 2',
    date: {
      from: '',
      to: ''
    }
  },
  onSetFilters: console.log
}