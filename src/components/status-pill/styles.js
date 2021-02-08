import styled, { css } from 'styled-components'
import Flex from '../flex'

const variants = {
  success: css`
    color: ${({ theme }) => theme.colors.statusText.success};
    background-color: ${({ theme }) => theme.colors.statusFill.successLight};
  `,
  error: css`
    color: ${({ theme }) => theme.colors.statusFill.error};
    background-color: ${({ theme }) => theme.colors.statusFill.errorLight};
  `,
  progress: css`
    color: ${({ theme }) => theme.colors.primary.default};
    background-color: ${({ theme }) => theme.colors.primary.light};
  `
}

const sizes = {
  mini: css`
    height: 1.9em;
    padding: 0 2em;
    font-size: ${({ theme }) => theme.fontSizes.small};
  `,
  large: css`
    height: 2.5em;   
    padding: 0 3em;
    font-size: ${({ theme }) => theme.fontSizes.large};
  `
}

export const Container = styled(Flex)`
  ${({ variant }) => variants[variant] || variants.progress}
  ${({ size }) => sizes[size] || sizes.small}
  font-weight: ${({ theme }) => theme.fontWeights.semi};
  border-radius: ${({ theme }) => theme.radii.full};
  cursor: default;
`
