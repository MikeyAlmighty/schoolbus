import * as React from 'react'
import PropTypes from 'prop-types'
import propTypes from '@styled-system/prop-types'

import Spinner from '../spinner'

import { StyledButton, SHAPES, SIZES } from './styles'

class Button extends React.PureComponent {
  static SHAPES = SHAPES
  static SIZES = SIZES

  static propTypes = {
    onClick: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
    shape: PropTypes.oneOf(Object.keys(SHAPES)),
    size: PropTypes.oneOf(Object.keys(SIZES)),
    ...propTypes.space,
    ...propTypes.layout,
    ...propTypes.typography,
  }

  static defaultProps = {
    onClick: () => {},
    shape: 'default',
    size: 'default',
    isLoading: false,
    type: 'button'
  }

  render() {
    const { isLoading, disabled, spinnerProps, variant, children, ...otherProps } = this.props

    return (
      <StyledButton
        {...otherProps}
        variant={isLoading ? 'loading' : variant}
        disabled={disabled || isLoading}
      >
        {isLoading 
          ? <Spinner color="white" size="20px" width="3px" {...spinnerProps} />
          : children}
      </StyledButton>
    )
  }
}

export default Button
