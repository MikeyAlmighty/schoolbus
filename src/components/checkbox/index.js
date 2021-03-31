/* eslint no-use-before-define: 0 */
import React from 'react'
import PropTypes from 'prop-types'

import InlineInputWrapper from '../inline-input-wrapper'
import { StyledInput, StyledSpan } from './styles'
import { HoverCircle } from '../inline-input-wrapper/styles'

class Checkbox extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    ...InlineInputWrapper.propTypes
  }

  render() {
    const { variant, children, onChange, checked, onBlur, disabled, ...otherProps } = this.props

    return (
      <InlineInputWrapper
        role='checkbox'
        aria-checked={checked}
        disabled={disabled}
        text={children}
        variant={variant}
        {...(variant === 'contained' && { pl: '1em' })}
        {...otherProps}
      >
        <StyledInput
          onChange={onChange}
          onBlur={onBlur}
          checked={checked}
          disabled={disabled}
          readOnly
        />
        <StyledSpan>
          <HoverCircle />
        </StyledSpan>
      </InlineInputWrapper>
    )
  }
}

export default Checkbox
