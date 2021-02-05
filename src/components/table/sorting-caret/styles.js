import styled from 'styled-components'
import Flex from '../../flex'

export const CaretDown = styled.span`
  width: 0;
  height: 0;
  display: inline-block;
  vertical-align: middle;
  border-style: solid;
  border-width: 0.35rem 0.35rem 0 0.35rem;
  border-color: ${({ active, theme }) =>
      theme.colors.grayscale[active ? 'dark' : 'light']}
    transparent transparent transparent;
`

export const CaretUp = styled(CaretDown)`
  border-width: 0 0.35rem 0.35rem 0.35rem;
  border-color: transparent transparent
    ${({ theme, active }) => theme.colors.grayscale[active ? 'dark' : 'light']}
    transparent;
`

export const CaretContainer = styled(Flex).attrs({
  as: 'button',
  type: 'button',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '.9rem'
})`
  background: transparent;
  border: 0;
  position: absolute;
  right: 1em;
  top: ${({ top }) => top || '.8rem'};
  cursor: pointer;
`
