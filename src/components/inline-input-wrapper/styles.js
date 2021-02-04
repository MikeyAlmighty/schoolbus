import styled, { css } from 'styled-components'
import { typography, space, layout } from 'styled-system'

export const HoverCircle = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  transition: transform 0.15s;
  transform: scale(0) translate(-50%, -50%);
  transform-origin: top left;
  background-color: ${({ theme }) => theme.colors.grayscale.light};
  opacity: 0.2;
`

const variants = {
  contained: css`
    border: ${({ theme }) => theme.borderStyles.light};
    padding: 0.5em;

    & ${HoverCircle} {
      display: none;
    }
    &:hover {
      box-shadow: ${({ theme }) => theme.elevations.toggle};
    }
  `,
  default: css`
    padding: 0.3em;
  `
}

export const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.semi};
  line-height: ${({ theme }) => theme.lineHeights.normal};
  color: ${({ theme }) => theme.colors.grayscale.dark};
  border-radius: ${({ theme }) => theme.radii.full};
  ${({ variant }) => variants[variant] || variants.default};
  ${typography}
  ${space}
  ${layout}

  &:hover ${HoverCircle} {
    transform: ${({ hoverScale }) => `scale(${hoverScale || '2'}) translate(-50%, -50%)`};
  }

  ${({ disabled }) =>
    disabled
      ? `
    opacity: 0.7;
  `
      : `
    cursor: pointer;
  `}
`