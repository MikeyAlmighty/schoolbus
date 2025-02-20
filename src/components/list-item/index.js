import styled, { css } from 'styled-components'

import Flex from '../flex'

const sizes = {
  small: css`
    min-height: 3.5em;
    padding: 0.2em 1em;
  `,
  default: css`
    min-height: 5.5em;
    padding: 1em;
  `
}

const variants = {
  default: css`
    transition: box-shadow 0.2s;
  
    &:hover,
    &:focus,
    &:focus-within {
      box-shadow: ${({ theme }) => theme.elevations.cardContainer};
    }
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.colors.grayscale.xxlight};
    transition: opacity 0.2s;
    opacity: 0.6;

    &:hover {
      opacity: 1;
    }
  `
}

const ListItem = styled(Flex).attrs({
  as: 'li',
  alignItems: 'center'
})`
  width: 100%;
  border-radius: ${({ theme }) => theme.radii.medium};
  border: ${({ theme }) => theme.borderStyles.light};
  box-shadow: ${({ theme }) => theme.elevations.itemContainer};
  color: ${({ theme }) => theme.colors.grayscale.dark};
  ${({ variant }) => variants[variant] || variants.default}
  ${({ size }) => sizes[size] || sizes.default}
`

export default ListItem