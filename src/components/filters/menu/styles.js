import styled from 'styled-components'

export const OptionButton = styled.button`
  box-shadow: none;
  border: none;
  cursor: pointer;
  height: 2.4em;
  width: 100%;
  border-radius: ${({ theme }) => theme.radii.small};
  background-color: ${({ theme }) => theme.colors.transparent};
  color: ${({ theme }) => theme.colors.grayscale.dark};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  transition: background-color 0.2s;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.grayscale.xxlight};
  }
  &:disabled {
    color: ${({ theme }) => theme.colors.grayscale.xlight};
  }
`