import React from 'react'
import Loader from './'

export default {
  title: 'Indicators/ Loader',
  component: Loader,
  parameters: {
    docs: {
      description: {
        component:
          'A loader component for tables.',
      },
    },
  },
}

export const Base = () => <Loader />
