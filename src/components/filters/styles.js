import styled, { css } from 'styled-components'

export const contentCss = css`
  border-radius: ${({ theme }) => theme.radii.large};
  box-shadow: ${({ theme }) => theme.elevations.menu};
`

export const ListContainer = styled.ul`
  width: 100%;
  max-height: 10em;
  overflow-y: auto;
`

export const Option = styled.li`
  width: 100%;
`