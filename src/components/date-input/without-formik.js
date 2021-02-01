import React from 'react'
import { connect } from 'formik'
import DatePicker from 'react-datepicker'
import CalendarToday from '@lessondesk/material-icons/dist/CalendarToday'

import StyledInput from '../styled-input'
import InputWrapper from '../input-wrapper'
import createDefaultInputProps from '../../utils/create-input-defaults'
import ErrorIconWrapper from '../error-icon-wrapper'
import { iconStyles } from './styles'
import { colors } from '../../config/theme'

const DateInput = ({
  formik,
  disabled,
  value,
  onBlur,
  onChange,
  placeholder,
  inputProps,
  alertText: alertTextOverride,
  dateFormat,
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
        <DatePicker
          {...inputDefaults}
          id={id}
          customInput={<StyledInput hasError={!!alertMessage} />}
          onChange={defaultChangeHandler}
          selected={value || inputDefaults.value}
          dateFormat={dateFormat}
          style={inputStyle}
          aria-label={label}
          aria-required={required}
          placeholderText={placeholder || label}
          disabled={disabled}
          name={name}
          autoComplete="off"
          {...inputProps}
        />
        {!alertText && <CalendarToday style={iconStyles} color={colors.grayscale.default} />}
      </ErrorIconWrapper>
    </InputWrapper>
  )
}

DateInput.defaultProps = {
  dateFormat: 'dd MMM yyyy',
  onBlur: () => {},
  onChange: () => {},
}

export default connect(DateInput)
