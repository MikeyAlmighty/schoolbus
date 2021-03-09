import React, { Component } from 'react'
import TimeKeeper from 'react-timekeeper'
import ClockOutline from '@lessondesk/material-icons/dist/ClockOutline'
import { connect } from 'formik'

import { colors } from '../../config/theme'
import { errorForField } from '../../utils/error-for-field'
import InputWrapper from '../input-wrapper'
import IconButton from '../icon-button'
import Input from '../styled-input'
import Popup from '../popup'

import { Container, MeridiemActions, styleOverrides } from './styles'

const createTimeObj = () => {

}

class TimeInput extends Component {
  static defaultProps = {
    name: 'time',
    label: 'Time',
    timeFormat: '24',
    placeholder: 'Set',
    disabled: false,
    width: '48%',
  }

  state = {
    showTime: true,
  }

  handleChange = (timeObj) => {
    const { formik, name } = this.props
    console.log(timeObj)
    formik.setFieldValue(name, timeObj)
  }

  resetClock = closePopup => {
    closePopup()
    this.setState({ showTime: false }, () => {
      this.setState({ showTime: true })
    })
  }

  render() {
    const { showTime } = this.state

    const { formik, disabled, timeFormat, placeholder, width, ...otherProps } = this.props

    const { name, id = name } = otherProps
    const timeObj = formik.values && formik.values[name]
    const formattedTime = timeObj && timeObj[`formatted${timeFormat}`]
    const errorText = errorForField(formik.errors, formik.touched, name)

    const trigger = (
      <InputWrapper alertText={errorText} width="100%" {...otherProps}>
        <Input
          type="text"
          name="timeInput"
          placeholder={placeholder}
          value={formattedTime || ''}
          disabled={disabled}
          width="100%"
          autoComplete="off"
          id={id}
        />
        <ClockOutline style={styleOverrides.icon} color={colors.grayscale.default} />
      </InputWrapper>
    )

    return (
      <Popup
        trigger={trigger}
        style={{ width }}
        contentStyle={styleOverrides.popup}
        disabled={disabled}
      >
        {closePopup =>
          showTime && (
            <Container className="clock-wrapper">
              <TimeKeeper
                hour24Mode={timeFormat === '24'}
                switchToMinuteOnHourSelect
                time={formattedTime || '00:00'}
                name={name}
                onChange={this.handleChange}
                onDoneClick={() => this.resetClock(closePopup)}
              />
            </Container>
          )
        }
      </Popup>
    )
  }
}

export default connect(TimeInput)
