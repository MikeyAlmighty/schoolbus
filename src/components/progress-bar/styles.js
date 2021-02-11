import styled, { keyframes } from 'styled-components'
import { space, layout, color } from 'styled-system'

export const scaleIn = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`

export const Container = styled.div`
  ${space}
  ${layout}
`

export const ProgressContainer = styled.div`
  position: relative;
  border-radius: ${({ theme }) => theme.radii.full};
  overflow: hidden;
  height: 0.5em;
  ${color}
`

export const Progress = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: width 0.1s linear;
  border-radius: 0 ${({ theme }) => `${theme.radii.full} ${theme.radii.full}`} 0;
  background-color: ${({ theme }) => theme.colors.primary.default};
  animation: ${scaleIn} ease-out 0.2s;
  ${color}
`
