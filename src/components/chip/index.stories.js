import React from 'react'
import Chip from './'

export default {
  title: 'Misc/ Chip',
  component: Chip,
  parameters: {
    containerProps: {
      display: 'flex'
    }
  }
}

export const Base = args => <Chip {...args} />

Base.args = {
  label: 'This is a chip',
  value: '',
  variant: 'default',
  size: 'default',
  options: null,
  onRemove: null,
}
const options = [{
  name: 'Option',
  onClick: console.log,
}]

export const WithRemove = () => <Chip label='This is a chip' onRemove={console.log} />
export const WithOptions = () => <Chip label='This is a chip' options={options} />
export const Secondary = () => <Chip label='Secondary' variant='secondary' />

export const Size = () => (
  <>
    <Chip label='Mini' size='mini' />
    <Chip label='Mini secondary' variant='secondary' size='mini' />
    <Chip label='Mini with actions' size='mini' options={options} />
  </>
)
