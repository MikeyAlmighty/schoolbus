import styled from 'styled-components'

export const Container = styled.div`
  height: 38px;
  display: flex;
  align-items: center;
`

export const Value = styled.button`
  padding: 0.3em 1em;
  margin-right: 1em;
  font: ${({ theme }) => theme.fonts.Montserrat};
  font-size: ${({ theme }) => theme.fontSizes.small};
  border-radius: ${({ theme }) => theme.radii.large};
  border: none;
  cursor: pointer;

  ${({ selected, theme }) =>
    selected
      ? `
    color: ${theme.colors.grayscale.xdark};
    background-color: ${theme.colors.white};
    box-shadow: ${theme.elevations.cardContainer}
  `
      : `
    color: ${theme.colors.grayscale.dark};
    background-color: ${theme.colors.grayscale.xxlight};
  `}
`
