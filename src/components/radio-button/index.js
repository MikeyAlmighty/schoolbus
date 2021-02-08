import React from 'react'
import PropTypes from 'prop-types'
import RadioboxBlank from '@lessondesk/material-icons/dist/RadioboxBlank'
import RadioboxMarked from '@lessondesk/material-icons/dist/RadioboxMarked'

import Box from '../box'
import InlineInputWrapper from '../inline-input-wrapper'
import { HoverCircle } from '../inline-input-wrapper/styles'

const RadioButton = ({
  children,
  onChange,
  checked,
  inputProps,
  disabled,
  ...otherProps
}) => {
  const Icon = checked ? RadioboxMarked : RadioboxBlank

  return (
    <InlineInputWrapper 
      role='radio'
      aria-checked={checked}
      text={children}
      disabled={disabled}
      hoverScale={1.5}
      {...otherProps}
    >
      <Box position='relative' lineHeight='0'>
        <Icon
          onClick={onChange}
          checked={checked}
          color={checked ? 'primary.default' : 'grayscale.dark'}
          {...inputProps}
        />
        <HoverCircle />
      </Box>
    </InlineInputWrapper>
  )
}

RadioButton.propTypes = {
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  inputProps: PropTypes.object,
  labelProps: PropTypes.object,
  ...InlineInputWrapper.propTypes
}

export default RadioButton
