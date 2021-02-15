import React from 'react'
import ContentStatus from './'

export default {
  title: 'Indicators/ Content status',
  component: ContentStatus,
  parameters: {
    containerProps: {
      bg: 'grayscale.dark'
    }
  }
}

export const Base = args => <ContentStatus {...args} />

Base.args = {
  variant: 'default',
  children: 'Published'
}

export const Variants = () => (
  <>
    <ContentStatus variant='defualt'>Default</ContentStatus>
    <ContentStatus mt='1em' variant='success'>Success</ContentStatus>
    <ContentStatus mt='1em' variant='error'>Error</ContentStatus>
    <ContentStatus mt='1em' variant='secondary'>Secondary</ContentStatus>
  </>
)
