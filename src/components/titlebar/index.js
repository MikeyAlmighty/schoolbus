import React from 'react'
import Router from 'next/router'

import { Title, TitleBarContainer, StyledIconButton } from './styles'

const TitleBar = ({
  to,
  onBack,
  withBack,
  children,
  ...otherProps
}) => (
  <TitleBarContainer {...otherProps}>
    {withBack && (
      <StyledIconButton
        icon='ArrowLeft'
        variant='clear'
        mr='2em'
        onClick={() => onBack(to)}
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
