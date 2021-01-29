import styled from 'styled-components'
import { space, layout } from 'styled-system'

export const Count = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2em;
  min-width: 2em;
  min-width: 2em;
  padding: 0 0.5em;
  margin-right: 0.3em;
  border-radius: ${({ theme }) => theme.radii.full};
  background-color: ${({ theme, active }) =>
    active ? theme.colors.primary.light : theme.colors.grayscale.xxlight};
`

export const Container = styled.button.attrs({
  type: 'button',
})`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.transparent};
  color: ${({ active, theme }) => (active ? theme.colors.primary.default : theme.colors.grayscale.default)};
  height: 2.5em;
  min-width: 80px;
  border-radius: ${({ theme }) => theme.radii.full};
  box-shadow: ${({ active, theme }) => (active ? theme.elevations.cardContainer : 'none')};
  border: ${({ active, theme }) => active
      ? 'solid 1px transparent'
    : theme.borderStyles.light
  };
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  cursor: ${({ onClick, disabled }) => (onClick && !disabled ? 'pointer' : 'default')};
  ${space}
  ${layout}
  
  &:hover:not(:disabled) {
    ${({ onClick, active, theme }) => (onClick && !active) && `
      background-color: ${theme.colors.grayscale.xxlight};
      & ${Count} {
        background-color: ${theme.colors.grayscale.xlight};
      }
    `}
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.grayscale.xlight};
  }
  
  transition: border 200ms ease-out;
`

export const Text = styled.span`
  margin: 0 1em;
`