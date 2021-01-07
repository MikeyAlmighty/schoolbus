import React from 'react'
import ReactTooltip from 'react-tooltip'

const Tooltip = ({ text, children, ...otherProps }) => (
  <div>
    <ReactTooltip {...otherProps} />
    <div data-tip={text}>{children}</div>
  </div>
)

export default Tooltip
