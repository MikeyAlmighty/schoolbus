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

const tableRowVariants = {
  borderless: css`
    transition: box-shadow 0.15s;
    :focus,
    :hover {
      background-color: ${({ theme }) => theme.colors.grayscale.xxlight};
    }

    ${({ isChildRow }) => !isChildRow && css`
      box-shadow: ${({ theme }) => theme.elevations.itemContainer};

      :hover {
        box-shadow: ${({ theme }) => theme.elevations.cardContainer};
      }
    `}

    ${({ isChildRow }) => isChildRow && css`
      animation: fade-in 0.2s;

      ${Td} {
        background-color: ${({ theme }) => theme.colors.grayscale.xxlight};
      }

      ${Td}:first-of-type {
        visibility: hidden;
      }

      ${Td}:nth-of-type(2) {
        border-top-left-radius: 0.4em;
        border-bottom-left-radius: 0.4em;
        border-left: ${({ theme }) => theme.borderStyles.light};
      }
    `}
  `
}

export const TableRow = styled.tr`
  height: 40px;
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  ${({ variant }) => tableRowVariants[variant]}
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

    th:first-child {
      border-top-left-radius: ${({ theme }) => theme.radii.small};
    }

    th:last-child {
      border-top-right-radius: ${({ theme }) => theme.radii.small};
    }

    th,
    ${TableRow}:not(:last-child):not(:last-of-type) ${Td} {
      border-bottom: ${({ theme }) => theme.borderStyles.default};
    }

    .selected {
      background-color: ${({ theme }) => theme.colors.primary.light};
      border-top: ${({ theme }) => theme.borderStyles.primary};

      & > ${Td}:last-of-type {
        //Using box shadow instead of border to solve above mentioned problem 
        box-shadow: inset -4px 0px 0 -2px ${({ theme }) => theme.colors.primary.default};
      }
      & > ${Td}:first-of-type {
        //Using box shadow instead of border to solve above mentioned problem 
        box-shadow: inset 4px 0px 0 -2px ${({ theme }) => theme.colors.primary.default};
      }
      +.selected {
        border-top: none;
      }
      +:not(.selected) > ${Td} {
        border-top: ${({ theme }) => theme.borderStyles.primary};
      }
      :last-child > ${Td} {
        border-bottom: ${({ theme }) => theme.borderStyles.primary};
      }
    }

    ${TableRow} {
      :last-child ${Td}:first-child {
        border-bottom-left-radius: ${({ theme }) => theme.radii.small};
      }
      :last-child ${Td}:last-child {
        border-bottom-right-radius: ${({ theme }) => theme.radii.small};
      }
      :last-of-type.selected {
        box-shadow: inset 0 -1px 0 1px ${({ theme }) => theme.colors.primary.default};
        border-radius: 0 0 ${({ theme }) => `${theme.radii.small} ${theme.radii.small}`};
      }
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

    ${TableRow} {
      width: 100%;
      margin-bottom: 0.2em;
      background: none;
      border-radius: ${({ theme }) => theme.radii.small};
      background-color: ${({ theme }) => theme.colors.white};

      & > ${Td} {
        font-weight: ${({ theme }) => theme.fontWeights.medium};
        border-top: ${({ theme }) => theme.borderStyles.light};
        border-bottom: ${({ theme }) => theme.borderStyles.light};

        :first-of-type {
          font-weight: ${({ theme }) => theme.fontWeights.semi};
          border-top-left-radius: 0.4em;
          border-bottom-left-radius: 0.4em;
          border-left: ${({ theme }) => theme.borderStyles.light};
        }
        :last-of-type {
          border-top-right-radius: 0.4em;
          border-bottom-right-radius: 0.4em;
          border-right: ${({ theme }) => theme.borderStyles.light};
        }
      }
    }
  `,
  log: css`
    border-collapse: separate;
    border-spacing: 0 0.25em;

    ${Th} {
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.grayscale.default};
      font-size: ${({ theme }) => theme.fontSizes.xsmall};
      font-weight: ${({ theme }) => theme.fontWeights.extrabold};
      height: 1em;
      padding-bottom: 0;
    }

    ${Td} {
      border-top: ${({ theme }) => theme.borderStyles.light};
      border-bottom: ${({ theme }) => theme.borderStyles.light};
    }

    ${TableRow} ${Td}:last-of-type {
      border-right: ${({ theme }) => theme.borderStyles.light};
      border-radius: ${({ theme }) => `0 ${theme.radii.small} ${theme.radii.small} 0`};
    }

    ${TableRow} ${Td}:first-of-type {
      border-left: ${({ theme }) => theme.borderStyles.light};
      border-radius: ${({ theme }) => `${theme.radii.small} 0 0 ${theme.radii.small}`};
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
