import React from 'react'
import propTypes from '@styled-system/prop-types'

import Text from '../text'
import { StyledLabel } from './styles'

const InlineInputWrapper = ({
  children,
  labelProps,
  disabled,
  text,
  ...otherProps
}) => {
  return (
    <StyledLabel
      disabled={disabled}
      hasContent={!!text}
      {...otherProps}
    >
      {children}
      {text && (
        <Text
          as='span'
          m='0 0.5em'
          whiteSpace='pre-wrap'
          {...labelProps}
        >
          {text}
        </Text>
      )}
    </StyledLabel>
  )
}

InlineInputWrapper.propTypes = {
  ...propTypes.typography,
  ...propTypes.layout,
  ...propTypes.space,
}

export default InlineInputWrapper
