import styled, { css} from 'styled-components'
import { space, layout, typography, color } from 'styled-system'

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
`

export const Text = styled.span`
  margin: 0 1em;
`

const variants = {
  primary: css`
    color: ${({ theme }) => theme.colors.primary.default};
    box-shadow: ${({ theme }) => theme.elevations.cardContainer};
    
    &:hover,
    &:active {
      box-shadow: none;
      color: ${({ theme }) => theme.colors.grayscale.default};
    }

    &:active {
      background-color: ${({ theme }) => theme.colors.grayscale.xlight};
      border-color: ${({ theme }) => theme.colors.transparent};

      & ${Count} {
        background-color: ${({ theme }) => theme.colors.grayscale.light};
      }
    }
    
    &:hover:not(:disabled):not(:active) {
      background-color: ${({ theme }) => theme.colors.grayscale.xxlight};
      border-color: ${({ theme }) => theme.colors.transparent};

      & ${Count} {
        background-color: ${({ theme }) => theme.colors.grayscale.xlight};
      }
    }

    & ${Count} {
      background-color: ${({ theme }) => theme.colors.primary.light};
    }
  `,
  secondary: css`
    color: ${({ theme }) => theme.colors.grayscale.default};
    border: ${({ theme }) => theme.borderStyles.light};

    &:active {
      background-color: ${({ theme }) => theme.colors.grayscale.xlight};
      border-color: ${({ theme }) => theme.colors.transparent};
    }
    
    &:hover:not(:disabled):not(:active) {
      border-color: ${({ theme }) => theme.colors.transparent};
      background-color: ${({ theme }) => theme.colors.grayscale.xxlight};

      & ${Count} {
        background-color: ${({ theme }) => theme.colors.grayscale.xlight};
      }
    }

    & ${Count} {
      background-color: ${({ theme }) => theme.colors.grayscale.xxlight};
    }
  `,
  dark: css`
    font-size: ${({ theme }) => theme.fontSizes.xsmall};
    color: ${({ theme }) => theme.colors.white};
    border: ${({ theme }) => theme.borderStyles.light};

    &:hover:not(:disabled):not(:active) {
      background-color: ${({ theme }) => theme.colors.grayscale.default};

      & ${Count} {
        background-color: ${({ theme }) => theme.colors.grayscale.light};
      }
    }

    & ${Count} {
      background-color: ${({ theme }) => theme.colors.grayscale.default};
    }
  `
}

export const Container = styled.button.attrs({
  type: 'button',
})`
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ hasIcon }) => hasIcon && `padding-left: 0.2em;`}
  background-color: ${({ theme }) => theme.colors.transparent};
  height: 2.5em;
  min-width: 80px;
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  transition: background-color 0.1s;
  ${({ onClick, disabled }) => (onClick && !disabled) && 'cursor: pointer;'}
  ${({ variant }) => variants[variant] || variants.secondary};
  ${space}
  ${color}
  ${layout}
  ${typography}

  &:active {
    background-color: ${({ theme }) => theme.colors.grayscale.xlight};
  } 
`