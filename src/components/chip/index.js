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
  ...otherProps
}) => {
  return (
    <StyledChip
      key={value || label}
      size={size}
      {...otherProps}
      hasIcon={!!options || !!onRemove}
    >
      {label}
      {options && (
        <OverflowMenu
          ml='1em'
          options={options}
          size={size ? 'xxsmall' : 'small'}
        />
      )}
      {onRemove && (
        <IconButton
          icon='Close'
          label='Remove'
          ml='1em'
          onClick={() => onRemove(value || label)}
          variant='clear'
          size={size ? 'xxsmall' : 'small'}
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