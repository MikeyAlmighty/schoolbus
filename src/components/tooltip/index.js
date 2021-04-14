import React, { useRef, useState, useCallback } from 'react'

import Flex from '../flex'
import { Popup } from './styles'

const calculateOffset = (popup) => {
  const { innerWidth } = window
  const { left, right } = popup.current.getBoundingClientRect()

  if (right > innerWidth) return innerWidth - right
  if (left < 0) return -left
}

const Tooltip = ({ text, children, className, style, ...otherProps }) => {
  const [hovering, setHovering] = useState(false)
  const popup = useRef(null)
  const handleMouseEnter = useCallback(() => setHovering(true))
  const handleMouseLeave = useCallback(() => setHovering(false))
  const offset = hovering && calculateOffset(popup)

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
      <Popup
        ref={popup}
        hovering={hovering}
        screenOffset={offset}
        {...otherProps}
      >
        {text}
      </Popup>
    </Flex>
  )
}

export default Tooltip
