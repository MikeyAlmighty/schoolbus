import styled, { css } from 'styled-components'
import { borderStyles } from '../../config/theme'

export const EmptyText = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.grayscale.default};
  font-style: italic;
  margin-right: auto;
`

export const Th = styled.th`
  padding: ${({ isCheckboxCell }) =>
    isCheckboxCell ? '0px' : '0.8em 1.5em 0.8em 1em'};
  width: ${({ isCheckboxCell, width }) =>
    isCheckboxCell ? '50px' : width || 'unset'};
  position: relative;
  height: 2.5rem;
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.small};
  text-align: ${({ center }) => (center ? 'center' : 'left')};
  white-space: nowrap;
`

export const Td = styled.td`
  position: relative;
  padding: ${({ isCheckboxCell }) => (isCheckboxCell ? '0px' : '0.8em 1em')};
  width: ${({ isCheckboxCell }) => (isCheckboxCell ? '50px' : 'unset')};
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  font-size: ${({ theme }) => theme.fontSizes.small};
  text-align: ${({ center }) => (center ? 'center' : 'left')};
`

export const TableRow = styled.tr`
  height: 40px;
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  &:focus,
  &:hover {
    background-color: ${({ theme }) => theme.colors.grayscale.xxlight};
  }
`

const variants = {
  default: css`
    border-collapse: collapse;
    border-radius: ${({ theme }) => theme.radii.small};
    // Using box shadow and border-style hidden in place of border 
    // to solve issue with border-collapse and border radius
    // https://stackoverflow.com/a/2586780
    border-style: hidden;
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.grayscale.light};

    th {
      background-color: ${({ theme }) => theme.colors.white};
    }

    th:first-child {
      border-top-left-radius: ${({ theme }) => theme.radii.small};
    }

    th:last-child {
      border-top-right-radius: ${({ theme }) => theme.radii.small};
    }

    th,
    tr:not(:last-child):not(.selected) td {
      border-bottom: ${({ theme }) => theme.borderStyles.default};
    }

    & .selected > ${Td}:last-of-type {
      //Using box shadow instead of border to solve above mentioned problem 
      box-shadow: inset -4px 0px 0 -2px ${({ theme }) => theme.colors.primary.default};
    }
    & .selected > ${Td}:first-of-type {
      //Using box shadow instead of border to solve above mentioned problem 
      box-shadow: inset 4px 0px 0 -2px ${({ theme }) => theme.colors.primary.default};
    }
    & .selected > ${Td} {
      background-color: ${({ theme }) => theme.colors.primary.light};
      border-top: ${({ theme }) => theme.borderStyles.primary};
    }
    & .selected + .selected > ${Td} {
      border-top: none;
    }
    & .selected +:not(.selected) > ${Td} {
      border-top: ${({ theme }) => theme.borderStyles.primary};
    }
    & .selected:last-child > ${Td} {
      border-bottom: ${({ theme }) => theme.borderStyles.primary};
    }
    & ${TableRow}:last-child ${Td}:first-child {
      border-bottom-left-radius: ${({ theme }) => theme.radii.small};
    }
    & ${TableRow}:last-child ${Td}:last-child {
      border-bottom-right-radius: ${({ theme }) => theme.radii.small};
    }
  `,
  borderless: css`
    border-collapse: separate;
    border-spacing: 0 0.5em;

    & > thead th {
      height: 0.7em;
      padding: 0 1.5em 0 1em;
      color: ${({ theme }) => theme.colors.grayscale.default};
      text-transform: uppercase;
      font-weight: ${({ theme }) => theme.fontWeights.extrabold};
      font-size: ${({ theme }) => theme.fontSizes.xsmall};
    }

    & > tbody > ${TableRow} {
      width: 100%;
      margin-bottom: 0.2em;
      background: none;
      box-shadow: ${({ theme }) => theme.elevations.toggle};
      border-radius: ${({ theme }) => theme.radii.small};
      transition: background-color 0.2s;

      /* stylelint-disable selector-type-no-unknown */
      &:hover
        > ${Td},
        &:hover
        > ${Td}:first-of-type,
        &:hover
        > ${Td}:last-of-type {
        /* stylelint-enable selector-type-no-unknown */
        border-color: ${({ theme }) => theme.colors.primary.default};
        background-color: #fffcf8;
      }

      & > ${Td} {
        font-weight: ${({ theme }) => theme.fontWeights.medium};
        border-top: ${({ theme }) => theme.borderStyles.default};
        border-bottom: ${({ theme }) => theme.borderStyles.default};
        border-color: ${({ theme }) => theme.colors.grayscale.xlight};

        &:first-of-type {
          font-weight: ${({ theme }) => theme.fontWeights.semi};
          border-top-left-radius: 0.4em;
          border-bottom-left-radius: 0.4em;
          border-left: ${({ theme }) => theme.borderStyles.default};
        }
        &:last-of-type {
          border-top-right-radius: 0.4em;
          border-bottom-right-radius: 0.4em;
          border-right: ${({ theme }) => theme.borderStyles.default};
        }
      }
    }
  `
}

export const StyledTable = styled.table`
  width: 100%;
  border-radius: ${({ theme }) => theme.radii.small};
  border-spacing: 0;
  line-height: 1em;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
  ${({ variant }) => variants[variant] || variants.default}
`
