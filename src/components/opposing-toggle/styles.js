import styled from 'styled-components'

import Flex from '../flex'

export const Option = styled(Flex).attrs({
  as: 'label',
  alignItems: 'center'
})`
  padding: 0.5em 2em;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  border: ${({ theme }) => theme.borderStyles.default};
  color: ${({ theme }) => theme.colors.grayscale.dark};
  background-color: ${({ theme }) => theme.colors.grayscale.xxlight};
  transition: background-color 0.2s;
  cursor: pointer;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.transparent};
  }
  &:disabled {
    background-color: ${({ theme }) => theme.colors.grayscale.xxlight};
  }
  ${({ $selected, hasIcon, theme }) => $selected ? `
    background-color: ${theme.colors.transparent};
    ${!hasIcon ? `color: ${theme.colors.primary.default};` : ''}
  ` : `
    & > svg {
      color: ${theme.colors.grayscale.default};
    }
  `}

  ${({ hasIcon }) => hasIcon && `
    padding-left: 1em;
  `}
`

export const Container = styled(Flex)`

  & > ${Option} {
    &:first-of-type {
      border-radius: ${({ theme }) => theme.radii.full} 0 0 ${({ theme }) => theme.radii.full};
    }
    &:last-of-type {
      border-radius: 0 ${({ theme }) => theme.radii.full} ${({ theme }) => theme.radii.full} 0;
    }
    &:not(:last-of-type) {
      border-right: none;
    }
  }
`

export const Input = styled.input`
  display: none;
`