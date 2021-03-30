import * as React from 'react'
import { connect } from 'formik'

import Flex from '../flex'
import ErrorIconWrapper from '../error-icon-wrapper'
import StyledInput from '../styled-input'
import InputWrapper from '../input-wrapper'
import theme from '../../config/theme'
import defaultPropTypes from '../../config/input-prop-types'
import createDefaultInputProps from '../../utils/create-input-defaults'

class Input extends React.PureComponent {
  static propTypes = defaultPropTypes

  static defaultProps = {
    label: '',
    inputStyle: {},
    theme,
  }

  render() {
    const {
      formik,
      alertText: alertTextOverride,
      disabled,
      value,
      onBlur,
      onChange,
      inputProps,
      icon,
      type,
      ...otherProps
    } = this.props

    const { name, id = name, label, placeholder, inputStyle } = otherProps

    const { alertText: formikAlertText, ...inputDefaults } = createDefaultInputProps({
      value,
      onBlur,
      onChange,
      name,
      formik,
    })
    const alertText = alertTextOverride || formikAlertText

    return (
      <InputWrapper
        alertText={alertText}
        {...otherProps}
      >
        <ErrorIconWrapper alertText={alertText}>
          <StyledInput
            id={id}
            {...inputDefaults}
            style={inputStyle}
            aria-label={label}
            aria-required={otherProps.required}
            placeholder={placeholder || label}
            disabled={disabled}
            name={name}
            hasError={!!alertText}
            type={type}
            {...inputProps}
          />

          {icon && !alertText && (
            <Flex
              position='absolute'
              right='1em'
            >
              {icon}
            </Flex>
          )}
        </ErrorIconWrapper>
      </InputWrapper>
    )
  }
}

export default connect(Input)
