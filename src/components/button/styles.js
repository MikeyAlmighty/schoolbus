import styled, { css } from 'styled-components'
import { typography, layout, space } from 'styled-system'

export const SHAPES = {
  round: 'round',
  rounded: 'rounded',
  block: 'block',
  default: 'default'
}

export const SIZES = {
  compact: 'compact',
  default: 'default',
  large: 'large',
  default: 'default'
}

const shapeVariants = {
  rounded: css`
    border-radius: ${({ theme }) => theme.radii.full};
  `,
  block: css`
    width: 100%;
  `,
}

const sizeVariants = {
  mini: css`
    padding: 5px 16px;
    min-height: 1em;
    min-width: unset;
  `,
  large: css`
    padding: 15px 40px;
    font-size: ${({ theme }) => theme.fontSizes.medium};
  `,
  extended: css`
    min-width: 16em;
  `
}

const variants = {
  primary: css`
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.primary.default};
    box-shadow: ${({ theme }) => theme.elevations.cardContainer};
    &:hover:not(:active):not(:disabled) {
      background-color: ${({ theme }) => theme.colors.primary.hover};
    }
    &:disabled {
      background-color: ${({ theme }) => theme.colors.grayscale.light};
      box-shadow: none;
    }
  `,
  secondary: css`
    color: ${({ theme }) => theme.colors.grayscale.dark};
    background-color: ${({ theme }) => theme.colors.white};
    border: ${({ theme }) => theme.borderStyles.default};
    &:hover:not(:active):not(:disabled) {
      background-color: ${({ theme }) => theme.colors.grayscale.xlight};
    }
    &:active {
      background-color: ${({ theme }) => theme.colors.grayscale.light};
    }
    &:disabled {
      border: ${({ theme }) => theme.borderStyles.light};
      color: ${({ theme }) => theme.colors.grayscale.default};
    }
  `,
  minimal: css`
    color: ${({ theme }) => theme.colors.primary.default};
    background-color: ${({ theme }) => theme.colors.transparent};
    box-shadow: none;
    &:hover:not(:active):not(:disabled) {
      color: ${({ theme }) => theme.colors.primary.hover};
    }
    &:disabled {
      background-color: ${({ theme }) => theme.colors.transparent};
      color: ${({ theme }) => theme.colors.grayscale.default};
    }
  `,
  danger: css`
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.statusFill.danger};
    box-shadow: ${({ theme }) => theme.elevations.cardContainer};
    &:hover:not(:active):not(:disabled) {
      background-color: ${({ theme }) => theme.colors.statusFill.error};
    }
    &:disabled {
      background-color: ${({ theme }) => theme.colors.statusFill.error};
      box-shadow: none;
    }
  `,
  loading: css`
    background-color: ${({ theme }) => theme.colors.grayscale.xlight};
    & > div { margin: auto; }
  `
}

export const StyledButton = styled.button`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  min-width: 120px;
  width: auto;
  border: none;
  cursor: pointer;
  transition: background-color 0.05s, color 0.05s, transform 0.1s;
  min-height: 2.9em;
  padding: 10px 20px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.small};
  border-radius: ${({ theme }) => theme.radii.small};
  ${({ variant }) => variants[variant] || variants.primary};
  ${({ size }) => sizeVariants[size]};
  ${({ shape }) => shapeVariants[shape]};

  &:active {
    box-shadow: none;
  }

  &:disabled {
    cursor: default;
  }

  ${space}
  ${layout}
  ${typography}
`
