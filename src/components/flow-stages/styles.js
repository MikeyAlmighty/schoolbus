import styled from 'styled-components'

export const Stage = styled.button`
  border: none;
  box-shadow: none;
  text-align: center;
  transition: color 0.1s;
  color: ${({ current, visited, theme }) => {
    if (current) {
      return theme.colors.black
    } else if (visited) {
      return theme.colors.grayscale.default
    }
    return theme.colors.grayscale.light
  }};
  background-color: ${({ theme }) => theme.colors.transparent};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  cursor: ${({ disabled, onClick }) =>
    disabled || !onClick ? 'default' : 'pointer'};

  ${({ onClick, visited, theme }) => onClick && visited && `
    &:hover {
      color: ${theme.colors.grayscale.dark};
    }
  `}
`
