import React from 'react'
import SearchInput from './'

export default {
  title: 'Inputs/ Search Input',
  component: SearchInput,
  parameters: {
    docs: {
      description: {
        component:
          'A search input with a debounced onChange event. Use `debounceTimeout={0}` to remove the debounce. ',
      },
    },
  },
}

export const Base = args => <SearchInput {...args} />
Base.args = {
  placeholder: 'Search...',
  label: 'Search',
  disabled: false,
  onExpand: console.log,
  onChange: console.log,
  debounceTimeout: 250,
}
export const Expanded = () => <SearchInput expanded onChange={console.log} />