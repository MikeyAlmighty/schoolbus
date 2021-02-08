import React from 'react'
import { Container } from './styles'

const STATUS_TEXT_DEFAULTS = {
  success: 'Active',
  progress: 'In progress',
  error: 'Inactive'
}

const StatusPill = ({ children, variant, ...otherProps }) => (
  <Container
    {...otherProps}
    variant={variant}
    alignItems='center'
    justifyContent='center'
  >
    {children || (STATUS_TEXT_DEFAULTS[variant])}
  </Container>
)

StatusPill.defaultProps = {
  size: 'mini',
  variant: 'progress'
}

export default StatusPill
