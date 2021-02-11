import React from 'react'

import Flex from '../flex'
import ProgressBar from './'

export default {
  title: 'Indicators/ Progress Bar',
  component: ProgressBar,
  parameters: {
    docs: {
      description: {
        component:
          'A standard linear progress bar.',
      },
    },
  },
}

const defaultArgs = {
  value: 50,
  width: '17em',
  hideText: false,
  fg: 'primary.default',
  bg: 'grayscale.xxlight',
}

export const Base = args => <ProgressBar {...args} />
Base.args = defaultArgs

export const HideText = () => <ProgressBar {...defaultArgs} hideText />

export const Colors = () => (
  <Flex wrap>
    <ProgressBar {...defaultArgs} mr='1em' fg='content.onboarding.default' />
    <ProgressBar {...defaultArgs} mr='1em' fg='content.formal.default' />
    <ProgressBar {...defaultArgs} fg='content.surveys.default'/>
  </Flex>
)

export const CustomText = () => (
  <ProgressBar {...defaultArgs}>
    Onboarding - {defaultArgs.value}% completed
  </ProgressBar>
)