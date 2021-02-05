import styled, { css } from 'styled-components'
import { borderStyles } from '../../config/theme'

export const EmptyText = styled.p`
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
  white-space: nowrap;
  ${({ center }) => center && `
    display: flex;
    text-align: center;
    justify-content: center;
  `}
`

export const Td = styled.td`
  padding: ${({ isCheckboxCell }) => (isCheckboxCell ? '0px' : '0.8em 1em')};
  width: ${({ isCheckboxCell }) => (isCheckboxCell ? '50px' : 'unset')};
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  font-size: ${({ theme }) => theme.fontSizes.small};
  ${({ center }) => center && `
    display: flex;
    text-align: center;
    justify-content: center;
  `}
`

export const TableRow = styled.tr`
  height: 40px;
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  &:focus,
  &:hover {
    background-color: ${({ theme }) => theme.colors.grayscale.xxlight};
  }
  ${({ selected, theme }) => selected && `
    background-color: ${theme.colors.primary.light};

    & > ${Td} {
      border-top: ${borderStyles.primary};
      border-bottom: ${borderStyles.primary}!important;
    }
    & > ${Td}:first-of-type {
      border-left: ${borderStyles.primary};
    }
    & > ${Td}:last-of-type {
      border-right: ${borderStyles.primary};
    }
  `}
`

const variants = {
  default: css`
    border: ${({ theme }) => theme.borderStyles.default};

    th {
      background-color: ${({ theme }) => theme.colors.white};
    }

    th:first-child {
      border-top-left-radius: 5px;
    }

    th:last-child {
      border-top-right-radius: 5px;
    }

    /* th:not(:last-child),
    td:not(:last-child) {
      border-right: 1px solid ${({ theme }) => theme.colors.grayscale.xlight};
    } */

    /* stylelint-disable-next-line no-descending-specificity */
    th,
    tr:not(:last-child) td {
      border-bottom: 1px solid ${({ theme }) => theme.colors.grayscale.xlight};
    }

    tbody tr:last-child td:first-child {
      border-bottom-left-radius: 5px;
    }

    tbody tr:last-child td:last-child {
      border-bottom-right-radius: 5px;
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
  border-collapse: separate;
  border-spacing: 0;
  line-height: 1em;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
  ${({ variant }) => variants[variant] || variants.default}
`
