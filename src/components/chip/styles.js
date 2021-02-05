import styled, { css } from 'styled-components'
import { Flex } from '@lessondesk/schoolbus'

const variants = {
  secondary: css`
    background-color: ${({ theme }) => theme.colors.transparent};
    border: ${({ theme }) => theme.borderStyles.light};

    &:hover {
      background-color: ${({ theme }) => theme.colors.grayscale.xxlight};
    }
  `,
  default: css`
    background-color: ${({ theme }) => theme.colors.grayscale.xxlight};

    &:hover {
      background-color: ${({ theme }) => theme.colors.grayscale.xlight};
    }
  `
}

const sizes = {
  default: css`
    padding: 0 1.2em;
    height: 3em;
    ${({ hasIcon }) => hasIcon && 'padding-right: 0.5em;'}
  `,
  mini: css`
    height: 2.3em;
    padding: 0 1em;
    ${({ hasIcon }) => hasIcon && 'padding-right: 0.3em;'}
  `,
}

export const StyledChip = styled(Flex).attrs({
  as: 'span',
  alignItems: 'center',
  justifyContent: 'space-between'
})`
  color: ${({ theme }) => theme.colors.grayscale.default};
  border-radius: ${({ theme }) => theme.radii.full};
  margin: 0.5em 0.5em 0 0;
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  ${({ variant }) => variants[variant] || variants.default};
  ${({ size }) => sizes[size] || sizes.default};
`