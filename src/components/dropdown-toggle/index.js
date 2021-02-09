import React, { useState, useCallback } from 'react'

import theme from '../../config/theme'
import Popup from '../popup'
import { Button, Option, List, StyledMenuDown } from './styles'

const styleOverrides = {
  content: {
    top: 0,
    width: '100%'
  }
}

const DropdownToggle = ({ 
  value, 
  name, 
  style,
  className,
  options,
  disabled,
  onChange,
  variant,
  ...otherProps
}) => {
  const [selected, setSelected] = useState(value || options[0])
  const handleSelect = useCallback((option) => {
    if (option !== selected && onChange) onChange(option)
    setSelected(option)
  })

  return (
    <Popup
      closeOnSelect
      disabled={disabled}
      animate={false}
      trigger={(
        <Button 
          width='10em' 
          disabled={disabled}
          variant={variant}
        >
          {selected?.label || selected?.value}
          <StyledMenuDown size='2em' color={theme.colors.grayscale.default} />
        </Button>
      )}
      position='topCenter'
      contentStyle={styleOverrides.content}
      {...otherProps}
    >
      <List>
        {[selected, ...options.filter(value => value !== selected)]
          .map(option => {
          const { value, label = value, ...otherOptionProps } = option
          return (
            <li key={value}>
              <Option 
                onClick={() => handleSelect(option)} 
                {...otherOptionProps}
              >
                {label}
              </Option>
            </li>
          )
        })}
      </List>
    </Popup>
  )
}

export default DropdownToggle