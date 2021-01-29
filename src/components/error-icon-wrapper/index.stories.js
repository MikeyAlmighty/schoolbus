import React from 'react'

import ErrorIconWrapper from './'
import StyledInput from '../styled-input'
import Box from '../box'

export default {
  title: 'Containers & Wrappers/ Error Icon Wrapper',
  component: ErrorIconWrapper,
  parameters: {
    docs: {
      description: {
        component:
          'A wrapper made for inputs. Adds an error icon with an error tooltip to inputs.',
      },
    },
  },
}

export const Base = args => (
  <Box width='50%'>
    <ErrorIconWrapper {...args}>
      <StyledInput placeholder='Input as child' />
    </ErrorIconWrapper>
  </Box>
)

Base.args = {
  alertText: 'alertText goes here',
  offset: '0.5em',
  size: '1.5em' 
}
