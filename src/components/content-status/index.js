import styled, { css } from 'styled-components'
import CheckCircle from '@lessondesk/material-icons/dist/CheckCircle'
import CloseCircle from '@lessondesk/material-icons/dist/CloseCircle'

import theme from '../../config/theme'
import Pill from '../pill'

const ICON_MAP = {
  success: <CheckCircle size='2em' color={theme.colors.statusFill.success} />,
  error: <CloseCircle size='2em' color={theme.colors.statusFill.error} />
}

const variants = {
  secondary: css`
    border: ${({ theme }) => theme.borderStyles.dark};
    color: ${({ theme }) => theme.colors.grayscale.light};
    font-style: italic;
  `
}

const StyledPill = styled(Pill).attrs({
  variant: 'dark'
})`
  ${({ contentVariant }) => variants[contentVariant]}
`

const ContentStatus = ({ variant, children, ...otherProps }) => {
  return (
    <StyledPill
      icon={ICON_MAP[variant]}
      contentVariant={variant}
      {...otherProps}
    >
      {children}
    </StyledPill>
  )
}

export default ContentStatus