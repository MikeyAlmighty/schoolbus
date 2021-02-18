import React from 'react'

import ListItem from './'

export default {
  title: 'Lists/ List item',
  component: ListItem,
}

export const Base = (args) => <ListItem {...args} />
Base.args = {
  variant: 'small',
  children: 'Child content goes here'
}

export const Sizes = () => (
  <>
    <ListItem>Default</ListItem>
    <ListItem mt='1em' size='small'>Small</ListItem>
  </>
)

export const Variants = () => (
  <>
    <ListItem size='small'>Default</ListItem>
    <ListItem mt='1em' size='small' variant='secondary'>Secondary</ListItem>
  </>
)