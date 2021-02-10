import React from 'react'
import ProgressBar from './'

export default {
  title: 'Misc/ Progress Bar',
  component: ProgressBar,
  parameters: {
    docs: {
      description: {
        component:
          'A progress bar',
      },
    },
  },
}


export const Base = args => <ProgressBar {...args} />
Base.args = {
  progress: 1,
  width: '15em',
  hideText: false
}