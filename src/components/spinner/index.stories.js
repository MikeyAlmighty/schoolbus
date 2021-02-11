import React from 'react'
import Spinner from './'

export default {
  title: 'Indicators/ Spinner',
  component: Spinner,
  parameters: {
    docs: {
      description: {
        component:
          'A spinner component with adjustable size and color.',
      },
    },
  },
}

export const Base = args => <Spinner {...args} />
Base.args = { size: '5em', margin: '3em', color: '#FFA400' }
