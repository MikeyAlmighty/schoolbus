import React from 'react'

import Flex from '../flex'
import ProgressBar from './'

export default {
  title: 'Indicators/ Progress Circle',
  component: ProgressBar,
  parameters: {
    docs: {
      description: {
        component:
          'A radial progress bar.',
      },
    },
  },
}

const defaultArgs = {
  value: 85,
  max: 130,
  showBreakdown: false,
  fg: 'primary.default',
  bg: 'grayscale.xxlight',
  isLoading: false,
  title: 'Title'
}

export const Base = args => <ProgressBar {...args} />
Base.args = defaultArgs

export const ShowBreakdown = () => <ProgressBar {...defaultArgs} showBreakdown/>

export const Loading = () => (
  <Flex wrap>
    <ProgressBar {...defaultArgs} isLoading />
    <ProgressBar {...defaultArgs} isLoading showBreakdown />
  </Flex>
)

export const Colors = () => (
  <Flex wrap>
    <ProgressBar {...defaultArgs} mr='1em' fg='content.onboarding.default' />
    <ProgressBar {...defaultArgs} mr='1em' fg='content.formal.default' />
    <ProgressBar {...defaultArgs} fg='content.surveys.default'/>
  </Flex>
)