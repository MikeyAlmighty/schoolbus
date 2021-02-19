import styled, { css } from 'styled-components'
import { typography, space, layout } from 'styled-system'
import Flex from '../flex'

export const HoverCircle = styled.span`
  position: absolute;
  pointer-events: none;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.radii.full};
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
  `,
  filter: css`
    padding: 0.5em 0.8em;
    border-radius: ${({ theme }) => theme.radii.small};

    & ${HoverCircle} {
      display: none;
    }
    &:hover {
      background-color: ${({ theme }) => theme.colors.grayscale.xxlight};
    }
  `
}

export const StyledLabel = styled(Flex).attrs({
  as: 'label',
  alignItems: 'center'
})`
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


  ${({ disabled, hoverScale }) =>
    disabled
      ? `
    opacity: 0.7;
  `
      : `
    cursor: pointer;

    &:hover ${HoverCircle} {
      transform: scale(${hoverScale || '2'}) translate(-50%, -50%);
    }
  `}
`