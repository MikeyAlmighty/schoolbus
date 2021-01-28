import React from 'react'
import { connect } from 'formik'

import CalendarToday from '@lessondesk/material-icons/dist/CalendarToday'

import InputWrapper from '../input-wrapper'
import createDefaultInputProps from '../../utils/create-input-defaults'
import ErrorIconWrapper from '../error-icon-wrapper'
import { iconStyles, StyledDatePicker } from './styles'

import { colors } from '../../config/theme'

function getDateString(value) {
  return value instanceof Date ? value.toDateString() : value
}

const DateInput = ({
  formik,
  disabled,
  value,
  onBlur,
  onChange,
  placeholder,
  inputProps,
  alertText: alertTextOverride,
  dateFormatter,
  ...otherProps
}) => {
  const { name, id = name, label, inputStyle, required } = otherProps

  const { alertText, hasFormik, ...inputDefaults } = createDefaultInputProps({
    value,
    onBlur,
    onChange,
    name,
    formik,
    alertText: alertTextOverride,
  })

  const defaultChangeHandler = hasFormik ? value => formik.setFieldValue(name, value) : onChange
  const alertMessage = alertTextOverride || alertText

  return (
    <InputWrapper alertText={alertMessage} {...otherProps}>
      <ErrorIconWrapper alertText={alertMessage}>
        <StyledDatePicker
          {...inputDefaults}
          id={id}
          onChange={defaultChangeHandler}
          value={dateFormatter(value || inputDefaults.value)}
          style={inputStyle}
          aria-label={label}
          aria-required={required}
          placeholderText={placeholder || label}
          disabled={disabled}
          name={name}
          autoComplete="off"
          hasError={!!alertMessage}
          {...inputProps}
        />
        {!alertText && <CalendarToday style={iconStyles} color={colors.grayscale.default} />}
      </ErrorIconWrapper>
    </InputWrapper>
  )
}

DateInput.defaultProps = {
  dateFormatter: getDateString,
  dateFormat: 'dd/MM/yyyy',
  onBlur: () => {},
  onChange: () => {},
}

export default connect(DateInput)
