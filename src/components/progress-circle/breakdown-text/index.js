import React from 'react'

import Box from '../../box'
import Flex from '../../flex'
import Text from '../../text'

const BreakdownText = ({ count, children, color, ...otherProps }) => (
  <Flex alignItems='center' {...otherProps}>
    <Box
      width='0.8em'
      height='0.8em'
      mr='0.5em'
      borderRadius='full'
      bg={color}
    />
    <Text fontSize='xsmall' color='grayscale.default'>
      <Text
        as='span'
        fontWeight='extrabold'
        mr='0.25em'
        color='grayscale.dark'
      >
        {count}
      </Text>
      {children}
    </Text>
  </Flex>
)

export default BreakdownText