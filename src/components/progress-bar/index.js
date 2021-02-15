import React from 'react'

import Box from '../box'
import Flex from '../flex'
import Text from '../text'

import { ProgressContainer, Progress } from './styles'

const ProgressBar = ({
  hideText,
  color, 
  backgroundColor,
  fg = color,
  bg = backgroundColor, 
  children,
  min = 0,
  max = 100,
  value = 0,
  variant = 'default',
  ...otherProps
}) => {

  const percentage = max === 100 
    ? Math.round((value / max)  * 100)
    : value

  return (
    <Box {...otherProps}>
      <ProgressContainer
        bg={bg}
        role='progressbar'
        aria-valuenow={value}
        aria-valuemin={min}
        aria-valuemax={max}
      >
        <Progress bg={fg} width={percentage} />
      </ProgressContainer>
      <Flex justifyContent='center' width='100%' mt='0.5em'>
        {!hideText && (
          <Text
            fontSize='small'
            fontWeight='bold'
            color='grayscale.default'
          >
            {children || (variant !== 'compact' && `${percentage}% progress`)}
          </Text>
        )}
      </Flex>
    </Box>
  )
}

export default ProgressBar