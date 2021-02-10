import React from 'react'

import Flex from '../flex'
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

const defaultArgs = {
  progress: 1,
  width: '15em',
  hideText: false
}

export const Base = args => <ProgressBar {...args} />
Base.args = defaultArgs

export const HideText = () => <ProgressBar {...defaultArgs} hideText />
export const DifferentColors = () => (
  <Flex wrap>
    <ProgressBar {...defaultArgs} color='' />
  </Flex>
)
export const DifferentText = () => (
  <ProgressBar {...defaultArgs}>
    Onboarding - {Math.round(defaultArgs.progress * 100)}% completed
  </ProgressBar>
)