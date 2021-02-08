import React from 'react'
import Router from 'next/router'

import IconButton from '../icon-button'
import { Title, TitleBarContainer } from './styles'

const TitleBar = ({
  to,
  onBack,
  withBack,
  children,
  ...otherProps
}) => (
  <TitleBarContainer {...otherProps}>
    {withBack && (
      <IconButton
        icon='ArrowLeft'
        variant='clear'
        mr='2em'
        onClick={() => onBack(to)}
        noShadow
      />
    )}
    <Title>{children}</Title>
  </TitleBarContainer>
)

TitleBar.defaultProps = {
  onBack: to => (to ? Router.push(to) : Router.back()),
  to: '',
  withBack: false,
  align: 'left-align'
}

export default TitleBar
