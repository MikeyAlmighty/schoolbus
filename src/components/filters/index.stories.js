import React from 'react'

import Filters from './'
import Flex from '../flex'

export default {
  title: 'Filters/ Filter popup',
  component: Filters,
}

const values = {
  multi: ['option1'],
  single: 'Option 2',
  date: {
    from: '',
    to: ''
  }
}

const content = {
  title: 'Select filter type',
  type: 'menu',
  options: [
    { 
      type: 'list', 
      title: 'List multi', 
      name: 'multi',
      options: [
        { value: 'option1', label: 'Option 1'}, 
        { label: 'Option 2'}
      ],
    },
    {
      type: 'list', 
      singleSelect: true, 
      title: 'List single', 
      name: 'single',
      options: [
        { value: 'option1', label: 'Option 1' },
        { label: 'Option 2' }
      ], 
    },
    {
      type: 'date-range',
      title: 'Date range',
      name: 'date',
    },
    {
      type: 'menu',
      title: 'Sub menu',
      options: [
        { type: 'list', title: 'This is disabled', disabled: true}
      ]
    }
  ]
}

export const Base = (args) => (
  <Flex height='15em' justifyContent='center' alignItems='flex-start'>
    <Filters {...args} />
  </Flex>
)

Base.args = {
  content,
  values,
  onChange: console.log,
  onApply: console.log
}