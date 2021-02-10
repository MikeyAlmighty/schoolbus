import React from 'react'

import Box from '../box'
import Flex from '../flex'
import Text from '../text'

import { ProgressContainer, Progress } from './styles'

const ProgressBar = ({ progress, hideText, children, ...otherProps }) => (
  <Box {...otherProps}>
    <ProgressContainer>
      <Progress progress={progress} />
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