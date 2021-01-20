import styled from 'styled-components'

export const Button = styled.button`
  padding: 0.5em 2em 0.5em 1em;
  width: 100%;
  text-align: left;
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.transparent};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.grayscale.xxlight};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.grayscale.xlight};
  }
`
