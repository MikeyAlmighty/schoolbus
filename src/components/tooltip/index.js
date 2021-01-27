import React from 'react'
import ReactTooltip from 'react-tooltip'
import styled from 'styled-components'

const TooltipContainer = styled.div`
  line-height: 0;
`

const Tooltip = ({ text, children, containerStyle, ...otherProps }) => (
  <div>
    <ReactTooltip {...otherProps} />
    <TooltipContainer
      data-tip={text}
    >
      {children}
    </TooltipContainer>
  </div>
)

export default Tooltip
