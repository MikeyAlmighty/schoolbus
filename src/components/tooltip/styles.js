import styled from 'styled-components'

const POSITION_MAP = {
  bottom: 'top',
  top: 'bottom',
  left: 'right',
  right: 'left'
}

export const Popup = styled.p`
  position: absolute;
  ${({ position = 'bottom', $offset = '1em' }) =>
    `${POSITION_MAP[position]}: calc(100% + ${$offset});`}
  border-radius: ${({ theme }) => theme.radii.xsmall};
  background-color: ${({ theme }) => theme.colors.grayscale.dark};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.5em 1em;
  // Using opacity so that offset can be detected while not visible
  ${({ hovering }) => !hovering && `opacity: 0;`}
  pointer-events: none;
  white-space: nowrap;
  z-index: 10;
  line-height: 1em; 
  ${({ screenOffset }) => screenOffset && `transform: translateX(${screenOffset}px);`}
`