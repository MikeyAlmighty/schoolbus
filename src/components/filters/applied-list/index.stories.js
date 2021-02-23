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
    multi: [{ label: 'option 1', value: 'option1' }],
    multi2: [{ label: 'option 1', value: 'option1' }, { label: 'option 2', value: 'option2' }],
    single: { label: 'option 1', value: 'option1' },
    date: {
      from: '',
      to: ''
    }
  },
  onSetFilters: console.log
}