import React from 'react'

import Nav from './index'

export default {
  title: 'Misc/ Nav',
  component: Nav,
  parameters: {
    docs: {
      description: {
        component:
          'Used to display a set of navigation links to navigate around the site.',
      },
    },
  },
}

export const Base = args => <Nav {...args} />

Base.args = {
  items: [
    { name: 'Test 1', href: '/iframe' },
    { name: 'Test 2', href: '#' },
    { name: 'Test 3', href: '#' }
  ]
}

export const Overflow = () => (
  <Nav
    items={[
      { name: 'Test 1', href: '/iframe' },
      ...Array.from({ length: 10 }, (_, i) => (
        { name: `Test ${i + 2}`, href: '#' }
      ))
    ]}
  />
)