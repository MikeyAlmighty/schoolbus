import styled, { keyframes } from 'styled-components'
import { space, layout } from 'styled-system'
import get from 'lodash.get'

export const scaleIn = width => keyframes`
  0% {
    width: 0;
  }
  100% {
    width: ${width};
  }
`

export const Container = styled.div`
  ${space}
  ${layout}
`

export const ProgressContainer = styled.div`
  position: relative;
  border-radius: ${({ theme }) => theme.radii.full};
  background-color: ${({ theme, bg }) => bg ? get(theme.colors, bg) : theme.colors.grayscale.xxlight};
  overflow: hidden;
  height: 0.4em;
`

export const Progress = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: ${({ width }) => width}%;
  height: 100%;
  transition: width 0.1s linear;
  border-radius: 0 ${({ theme }) => `${theme.radii.full} ${theme.radii.full}`} 0;
  background-color: ${({ theme, bg }) => bg ? get(theme.colors, bg) : theme.colors.primary.default};
  animation: ${({ width }) => scaleIn(width)} ease-in-out 0.3s;
`
