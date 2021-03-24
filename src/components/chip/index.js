import React from 'react'

import IconButton from '../icon-button'
import OverflowMenu from '../overflow-menu'
import { StyledChip } from './styles'

const Chip = ({
  label,
  value,
  options,
  onRemove,
  size,
  disabled,
  ...otherProps
}) => {
  const isMini = size === 'mini'

  return (
    <StyledChip
      key={value || label}
      size={size}
      {...otherProps}
      hasIcon={(!!options || !!onRemove) && !disabled}
    >
      {label}
      {options && (
        <OverflowMenu
          ml='1em'
          options={options}
          size={isMini ? 'xsmall' : 'small'}
        />
      )}
      {onRemove && !disabled && (
        <IconButton
          icon='Close'
          label='Remove'
          ml={isMini ? '0.5em' : '1em'}
          onClick={() => onRemove(value || label)}
          variant='clear'
          size={isMini ? 'xsmall' : 'small'}
        />
      )}
    </StyledChip>
  )
}

Chip.defaultProps = {
  label: 'Chip',
  value: '',
  options: null,
  onRemove: null
}

export default Chip
