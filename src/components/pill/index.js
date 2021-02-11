import * as React from 'react'
import PropTypes from 'prop-types'
import { space, layout } from 'styled-system'
import propTypes from '@styled-system/prop-types'

import { Container, Text, Count } from './styles'

Container.displayName = 'Pill'

const Pill = ({ children, icon, count, ...otherProps }) => {

  return (
    <Container
      hasIcon={!!icon}
      {...otherProps}
    >
      {icon}
      <Text>{children}</Text>
      {count >= 0 && <Count>{count}</Count>}
    </Container>
  )
}

Pill.propTypes = {
  variant: PropTypes.string,
  onClick: PropTypes.func,
  ...propTypes.space,
  ...propTypes.layout,
}

export default Pill
