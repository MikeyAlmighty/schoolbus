import React from 'react'
import Select from './'
import Flex from '../flex'
import defaultInputArgs from '../../config/default-input-args'

const options = [
  { label: 'option 1', value: '1' },
  { label: 'option 2', value: '2' },
]

export default {
  title: 'Inputs/ Select',
  component: Select,
  parameters: {
    docs: {
      description: {
        component: 'A select component built on top of react-select with formik and non formik connected variants.',
      },
    },
  },
}

const defaultArgs = { ...defaultInputArgs, options: options }
export const Base = args => <Select {...args} />
Base.args = { ...defaultArgs, align: 'left' }

export const Empty = () => <Select {...defaultArgs} />
export const Selected = () => <Select {...defaultArgs} value={options[0]} />
export const Disabled = () => <Select {...defaultArgs} disabled />
export const Invalid = () => <Select {...defaultArgs} options={options} alertText="Invalid" />
export const Searchable = () => <Select {...defaultArgs} options={options} isSearchable />
export const Variants = () => (
  <Flex wrap justifyContent="space-between">
    <Select {...defaultArgs} label="default" variant="default" />
    <Select {...defaultArgs} label="light" variant="light" />
    <Select {...defaultArgs} label="borderless" variant="borderless" />
    <Select {...defaultArgs} label="compact" variant="compact" />
  </Flex>
)
export const Shapes = () => (
  <Flex wrap justifyContent="space-between">
    <Select {...defaultArgs} label="default" />
    <Select {...defaultArgs} label="rounded" shape="rounded" />
  </Flex>
)
