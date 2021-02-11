import React from 'react'
import StatusPill from './'
import Flex from '../flex'

export default {
  title: 'Indicators/ Status Pill',
  component: StatusPill,
  parameters: {
    docs: {
      description: {
        component:
          'A pill to display the status of things.',
      },
    },
  },
}

export const Base = args => <StatusPill {...args} />

Base.args = {
  size: 'mini',
  variant: 'progress'
}

export const StatusVariants = () => (
  <Flex>
    <StatusPill variant='success' m='1em'/>
    <StatusPill variant='progress' m='1em'/>
    <StatusPill variant='error' m='1em'/>
  </Flex>
)

export const Sizes = () => (
  <Flex alignItems='center'>
    <StatusPill size='mini' m='1em'>mini</StatusPill>
    <StatusPill size='large' m='1em'>large</StatusPill>
  </Flex>
)