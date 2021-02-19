import styled from 'styled-components'
import { space, layout, flexbox } from 'styled-system'

export const StyledCard = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.large};
  margin: 1em 0;
  padding: 2.5em;
  box-shadow: ${({ theme }) => theme.elevations.titleBar};
  flex: 1;
  ${space}
  ${layout}
  ${flexbox}
`

export const StyledCardHeader = styled.header`
  position: relative;
`

export const StyledCardDivider = styled.div`
  width: 100%;
  margin-top: 1.5em;
  border-bottom: ${({ theme }) => `2px solid ${theme.colors.grayscale.xxlight}`};
  opacity: 0.7;
`

export const StyledCardTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  border-left: 5px solid ${({ theme }) => theme.colors.primary.default};
  font-weight: ${({ theme }) => theme.fontWeights.extrabold};
  padding: 0 0.5em;
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.letterSpacings.tight};
  color: ${({ theme }) => theme.colors.grayscale.default};
`

export const StyledCardDescription = styled.p`
  color: ${({ theme }) => theme.colors.grayscale.default};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-size: ${({ theme }) => theme.fontSizes.small};
  padding-right: 5em;
  margin-top: 1.5em;
`

export const StyledContent = styled.div`
  ${({ showDivider, hasHeader }) => hasHeader && (`padding-top: ${showDivider ? '1.5em' : '2em'}`)};
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ActionsContainer = styled.div`
  position: absolute;
  top: -10px;
  right: 0;
  display: flex;
  align-items: center;
`
