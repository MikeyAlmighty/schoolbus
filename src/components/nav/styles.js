import styled from 'styled-components'
import { space } from 'styled-system'

import Flex from '../flex'

export const Container = styled(Flex).attrs({
  as: 'nav'
})`
  align-items: center;
  justify-content: center;
  height: 3.6em;
  background-color: ${({ theme }) => theme.colors.grayscale.dark};
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radii.large};
  ${space}
`

export const List = styled(Flex).attrs({
  as: 'ul'
})`
  list-style-type: none;
  height: 100%;
  width: 100%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
`

export const NavLink = styled(Flex).attrs({
  as: 'a'
})`
  align-items: center;
  justify-content: center;
  height: 100%;
  text-decoration: none;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSizes.small};
  cursor: pointer;
  width: 100%;
  height: 100%;
`

export const Item = styled.li`
  flex: ${({ expanded }) => expanded && 1};
  text-align: center;
  min-width: calc(100% / 7);
  height: 100%;
  color: ${({ theme }) => theme.colors.grayscale.xlight};
  border-radius: ${({ theme }) => theme.radii.large};
  scroll-snap-align: start;

  ${({ active, theme }) =>
      active &&
      `
    opacity: 1;
    background-color: ${theme.colors.grayscale.default};
  `}
  &:hover:not(:active) {
    color: ${({ theme }) => theme.colors.white};
  }
  &:active {
    opacity: 0.6;
    background-color: ${({ theme }) => theme.colors.grayscale.default};
  }
`
