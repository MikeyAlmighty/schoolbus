import styled, { css } from 'styled-components'
import get from 'lodash.get'
import Flex from '../flex'

const BUTTON_SIZES = {
  xsmall: '28px',
  small: '32px',
  medium: '38px',
  large: '44px',
  xlarge: '48px',
}

const variants = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.primary.default};
    color: ${({ theme }) => theme.colors.white};
    &:disabled {
      background-color: ${({ theme }) => theme.colors.grayscale.light};
      box-shadow: none;
    }
  `,
  secondary: css`
    box-shadow: none;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.grayscale.dark};
    border: ${({ theme }) => theme.borderStyles.default};
    transition: color 0.1s, background-color 0.1s;

    &:hover {
      background-color: ${({ theme }) => theme.colors.grayscale.xlight};
      opacity: 1;
    }
    &:active {
      background-color: ${({ theme }) => theme.colors.grayscale.light};
      color: ${({ theme }) => theme.colors.grayscale.dark};
    }
    &:disabled {
      color: ${({ theme }) => theme.colors.grayscale.xxlight};
      border: ${({ theme }) => theme.borderStyles.light};
    }
  `,
  clear: css`
    box-shadow: none;
    background-color: ${({ theme }) => theme.colors.transparent};
    color: ${({ theme }) => theme.colors.grayscale.default};

    &:hover {
      background-color: ${({ theme }) => theme.colors.grayscale.xlight};
      opacity: 1;
    }
    &:active {
      background-color: ${({ theme }) => theme.colors.grayscale.light};
      color: ${({ theme }) => theme.colors.grayscale.dark};
    }
  `,
  danger: css`
    background-color: ${({ theme }) => theme.colors.statusFill.danger};
    color: ${({ theme }) => theme.colors.white};
    &:disabled {
      background-color: ${({ theme }) => theme.colors.grayscale.light};
      box-shadow: none;
    }
  `,
}

export const Button = styled(Flex).attrs({
  as: 'button',
  type: 'button',
})`
  position: relative;
  border-radius: ${({ theme }) => theme.radii.full};
  border: none;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'inherit')};
  box-shadow: ${({ theme }) => theme.elevations.cardContainer};
  width: ${({ size }) => BUTTON_SIZES[size] || size};
  min-width: ${({ size }) => BUTTON_SIZES[size] || size};
  height: ${({ size }) => BUTTON_SIZES[size] || size};
  ${({ variant }) => variants[variant] || variants.primary};
  background-color: ${({ backgroundColor, theme }) => get(theme.colors, backgroundColor) || backgroundColor};
  color: ${({ color, theme }) => get(theme.colors, color) || color};

  &:disabled {
    cursor: default;
  }
  &:hover:not(:disabled) {
    cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
    opacity: 0.9;
  }
  &:active {
    box-shadow: none;
  }
`

export const Badge = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -5px;
  right: -5px;
  height: 18px;
  min-width: 18px;
  padding: 0 6px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 0;
  border-radius: 9px;
  background-color: ${({ theme }) => theme.colors.primary.default};
  color: ${({ theme }) => theme.colors.white};
`
