import MenuDown from '@lessondesk/material-icons/dist/MenuDown'
import styled, { css, keyframes } from 'styled-components'

import Flex from '../flex'

export const Button = styled(Flex).attrs({
  as: 'button',
  justifyContent: 'space-between',
  alignItems: 'center'
})`
  border-radius: ${({ theme }) => theme.radii.full};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.grayscale.default};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  box-shadow: ${({ theme }) => theme.elevations.toggle};
  text-align: left;
  padding: ${({ variant }) => variant === 'mini' ? '0.5em 1.2em' : '0.75em 1.5em'};

  &:disabled {
    border: ${({ theme }) => theme.borderStyles.light};
    box-shadow: none;
  }
  &:hover:not(:disabled) {
    box-shadow: ${({ theme }) => theme.elevations.cardContainer};
  }
`

export const Option = styled.button`
  width: 100%;
  text-align: left;
  cursor: pointer;
  padding: ${({ variant }) => variant === 'mini' ? '0.5em 1.2em' : '0.75em 1.5em'};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.grayscale.default};
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  &:disabled {
    color: ${({ theme }) => theme.colors.grayscale.light};
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.grayscale.xxlight};
  }
`

export const List = styled.ul`
  border-radius: ${({ variant }) => variant === 'mini' ? '1.1em' : '1.3em'};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.elevations.toggle};
` 

export const StyledMenuDown = styled(MenuDown)`
  position: absolute;
  right: 1em;
`