import React from 'react'

import Box from '../box'
import Flex from '../flex'
import Text from '../text'

import { ProgressContainer, Progress } from './styles'

const ProgressBar = ({
  progress,
  hideText,
  color, 
  backgroundColor,
  fg = color,
  bg = backgroundColor, 
  children,
  ...otherProps
}) => (
  <Box {...otherProps}>
    <ProgressContainer bg={bg}>
      <Progress bg={fg} progress={progress} />
    </ProgressContainer>
    <Flex justifyContent='center' width='100%' mt='0.5em'>
      {!hideText && (
        <Text>
          {children || `${Math.round(progress * 100)}% progress`}
        </Text>
      )}
    </Flex>
  </Box>
)

export default ProgressBar