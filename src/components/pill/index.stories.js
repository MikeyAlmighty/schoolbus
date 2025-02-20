import React from 'react'
import CheckCircle from '@lessondesk/material-icons/dist/CheckCircle'

import theme from '../../config/theme'
import Pill from './'
import Flex from '../flex'

export default {
  title: 'Actions/ Pill',
  component: Pill,
  docs: {
    description: {
      component:
        'The Pill component represents a clickable action, which can be used in forms or anywhere in a document that needs simple, standard button functionality.',
    },
  },
}

export const Base = args => <Pill {...args}>Text here</Pill>
Base.args = {
  count: 5,
  variant: 'primary',
  onClick: console.log,
}

export const Primary = () => (
  <Flex>
    <Pill variant='primary'>
      Primary
    </Pill>
    <Pill ml="1em" count={5} variant='primary'>
      Primary with count
    </Pill>
  </Flex>
)

export const Secondary = () => (
  <Flex>
    <Pill>Secondary (default)</Pill>
    <Pill ml="1em" count={100}>
      Secondary with count
    </Pill>
  </Flex>
)

export const Dark = () => (
  <Flex bg='grayscale.dark' p='1em'>
    <Pill variant='dark'>Dark</Pill>
    <Pill variant='dark' ml="1em" count={100}>
      Dark with count
    </Pill>
  </Flex>
)

export const WithIcon = () => (
  <Flex>
    <Pill
      mr='1em'
      icon={<CheckCircle size='2em' color={theme.colors.statusFill.success} />}
    >
      Approved
    </Pill>
    <Pill
      mr='1em'
      icon={<CheckCircle size='2em' color={theme.colors.statusFill.error} />}
    >
      Declined
    </Pill>
  </Flex>
)