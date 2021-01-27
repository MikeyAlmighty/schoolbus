import React, { useState, useCallback } from 'react'
import styled from 'styled-components'

import Flex from '../flex'

const POSITION_MAP = {
  bottom: 'top',
  top: 'bottom',
  left: 'right',
  right: 'left'
}

const Popup = styled.p`
  position: absolute;
  ${({ position = 'bottom', offset = '1em' }) => 
    `${POSITION_MAP[position]}: calc(100% + ${offset});`}
  border-radius: ${({ theme }) => theme.radii.xsmall};
  background-color: ${({ theme }) => theme.colors.grayscale.dark};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.5em 1em;
  opacity: ${({ hovering }) => hovering ? 1 : 0};
  white-space: nowrap;
  transition: opacity 0.1s;
  z-index: 10;
`

const Tooltip = ({ text, children, className, style, ...otherProps }) => {
  const [hovering, setHovering] = useState(false)
  const handleMouseEnter = useCallback(() => setHovering(true))
  const handleMouseLeave = useCallback(() => setHovering(false))

  return (
    <Flex
      position='relative'
      justifyContent='center'
      alignItems='center'
      className={className}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <Popup hovering={hovering} {...otherProps}>
        {text}
      </Popup>
    </Flex>
  )
}

export default Tooltip
