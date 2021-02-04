import styled from 'styled-components'
import IconButton from '../../icon-button'
import theme from '../../../config/theme'

export const PageSizeDescription = styled.p`
  margin-left: 1em;
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  color: ${({ theme }) => theme.colors.grayscale.default};
`

export const PaginationButton = styled.button`
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme, active }) =>
    active ? theme.fontWeights.extrabold : theme.fontWeights.medium};
  padding: 0.5em 0.7em;
  background: ${({ active, theme }) =>
    active ? theme.colors.grayscale.xxlight : theme.colors.white};
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.black};
  border-top: ${({ theme }) => theme.borderStyles.light};
  border-bottom: ${({ theme }) => theme.borderStyles.light};
  width: 35px;
  ${({ theme, isCurrentPage }) =>
    isCurrentPage &&
    `
    border: ${theme.borderStyles.light}
  `}

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.grayscale.xlight};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.grayscale.light};
  }

  &:disabled {
    cursor: default;
  }
`

export const StyledIconButton = styled(IconButton)`
  border: ${({ theme }) => theme.borderStyles.light};
  border-radius: ${({ isRight }) =>
    isRight ? '0 .2em .2em 0' : '.2em 0 0 .2em'};
  width: 35px;
  height: 35px;
`

export const styleOverrides = {
  select: {
    controlStyle: {
      backgroundColor: theme.colors.white,
      border: theme.borderStyles.light,
      padding: 0,
    },
    indicatorStyle: {
      position: 'absolute',
      right: 0
    }
  }
}