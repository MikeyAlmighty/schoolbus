import React from 'react'
import SearchInput from './'

export default {
  title: 'Inputs/ Expanding Search Input',
  component: SearchInput,
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