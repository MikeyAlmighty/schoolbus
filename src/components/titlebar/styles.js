import styled from 'styled-components'

import IconButton from '../icon-button'
import Flex from '../flex'

export const TitleBarContainer = styled(Flex).attrs({
  as: 'header',
  alignItems: 'center',
  justifyContent: 'center'
})`
  position: relative;
  height: 5em;
  padding: 1.2em 2em;
  background-color: ${({ theme }) => theme.colors.white};
  border-top-left-radius: ${({ theme }) => theme.radii.xxlarge};
  border-top-right-radius: ${({ theme }) => theme.radii.xxlarge};
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayscale.xlight};
  ${({ align }) => `text-align: ${align || 'left-align'};`}
`

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.grayscale.dark};
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.large};
  width: 100%;
  ::first-letter {
    text-transform: capitalize;
  }
`

export const StyledIconButton = styled(IconButotn)`
  position: absolute;
  left: 2em;
`