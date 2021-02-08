import React from 'react'

import Flex from '../flex'
import Text from '../text'
import { Container } from './styles'

const NotificationBanner = ({ children, actions, ...otherProps }) => {
  return (
    <Container {...otherProps}>
      <Text color='grayscale.default'>{children}</Text>
      <Flex alignItems='center'>{actions}</Flex>
    </Container>
  )
}

export default NotificationBanner