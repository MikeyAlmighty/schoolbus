import React from 'react'

import CardStatus from './'
import Flex from '../flex'

export default {
  title: 'Indicators/ Card status',
  component: CardStatus,
}

export const Base = args => <Flex><CardStatus {...args} /></Flex>
Base.args = {
  variant: 'default',
  children: 'Published'
}

export const Variants = () => (
  <Flex wrap>
    <CardStatus mr='1em'>default</CardStatus>
    <CardStatus variant='secondary' mr='1em'>secondary</CardStatus>
    <CardStatus variant='minimal'>minimal</CardStatus>
  </Flex>
)