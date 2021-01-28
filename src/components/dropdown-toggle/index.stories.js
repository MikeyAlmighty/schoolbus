import React from 'react'
import DropdownToggle from './'

const defaultOptions = {
  disabled: false,
  options: [
    { label: 'Option 1', value: 'value1' },
    { label: 'Option 2', value: 'value2' },
    { label: 'Option 2', value: 'value2' },
  ]
}

export default {
  title: 'Inputs/ Dropdown Toggle',
  component: DropdownToggle,
  parameters: {
    formik: {
      initialValues: {
        name: '',
      },
    },
  },
}

export const Base = args => <DropdownToggle {...args} />
Base.args = defaultOptions

export const Disabled = () => <DropdownToggle {...defaultOptions} disabled />
export const Mini = () => <DropdownToggle {...defaultOptions} variant='mini' />
