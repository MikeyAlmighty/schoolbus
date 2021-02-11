import styled, { css } from 'styled-components'
import { typography, space } from 'styled-system'

import theme from '../../config/theme'
import Text from '../text'

const variants = {
  default: css`
    border: ${({ theme }) => theme.borderStyles.default};
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.colors.grayscale.xxlight};
  `,
  minimal: css`
    font-style: italic;
  `
}

export const CardStatus = styled(Text).attrs({
  fontWeight: 'bold',
  fontSize: 'small',
  color: 'grayscale.default'
})`
  padding: 0.1em 0.4em;
  border-radius: 0.4em;
  ${({ variant }) => variants[variant] || variants.default}
  ${typography}
  ${space}
`

export default CardStatus