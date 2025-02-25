import React from 'react'
import ReactSelect from 'react-select'
import PropTypes from 'prop-types'

import InputWrapper from '../input-wrapper'
import createDefaultInputProps from '../../utils/create-input-defaults'
import inputPropTypes from '../../config/input-prop-types'
import { styleOverride } from './styles'
import ErrorIconWrapper from '../error-icon-wrapper'

const Select = props => {
  const {
    shape,
    hasShadow,
    disabled,
    disableEmpty,
    options,
    formik,
    value,
    onBlur,
    onChange,
    placeholder,
    fontSize,
    multiple,
    alertText: alertTextOverride,
    ...otherProps
  } = props
  const { name, id = name } = otherProps
  const { alertText, hasFormik, ...inputDefaults } = createDefaultInputProps({
    alertText: alertTextOverride,
    value,
    onBlur,
    onChange,
    name,
    formik,
  })

  const isDisabled = disableEmpty ? disabled || options.length === 0 : disabled
  const defaultOnChange = hasFormik && (value => formik.setFieldValue(name, value))
  const defaultValue = hasFormik && formik.values[name]
  const hasError = !!alertText

  return (
    <InputWrapper alertText={alertText} {...otherProps}>
      <ErrorIconWrapper alertText={alertText}>
        <ReactSelect
          {...inputDefaults}
          {...otherProps}
          onChange={onChange || defaultOnChange}
          value={value || defaultValue}
          placeholder={placeholder}
          styles={styleOverride({ hasError, ...props })}
          options={options}
          isDisabled={isDisabled}
          isMulti={multiple}
          id={id}
        />
      </ErrorIconWrapper>
    </InputWrapper>
  )
}

Select.defaultProps = {
  containerStyle: {},
  align: 'left',
  singleValueStyles: {},
}

Select.propTypes = {
  ...inputPropTypes,
  align: PropTypes.string,
  singleValueStyles: PropTypes.object,
  containerStyle: PropTypes.object,
  multiple: PropTypes.bool,
}

export default Select
