import styled from 'styled-components'

export const Container = styled.div`
  z-index: 1;
  font-family: inherit;
  position: relative;

  & .react-timekeeper {
    font-family: inherit;
    box-shadow: none;
  }

  & .react-timekeeper__meridiem-toggle {
    display: none;
  }

  & .react-timekeeper__top-bar {
    background-color: #FFA400;
    padding: 8px;
    font-family: inherit;
  }

  & .react-timekeeper__top-bar .react-timekeeper-button-reset {
    transform: translateY(1px);
    padding: 0 0 0 8px;
  }


  & .css-1se0bia,
  & .css-eg4puu,
  & .css-n0t0em {
    color: #000;
    font-weight: 400;
  }

  & .react-timekeeper__tb-hour,
  & .react-timekeeper__tb-minute,
  & .react-timekeeper__tb-colon,
  & .react-timekeeper-button-reset {
    color: #FFF;
    font-size: 1em;
    font-weight: 700;
    font-family: inherit;
    background-color: #FFA400;
  }

  & .react-timekeeper__clock-hand,
  & .react-timekeeper__hand-circle-outer {
    fill: #FCD286;
    stroke: #FCD286;
  }
`

export const styleOverrides = {
  icon: {
    position: 'absolute',
    right: 10,
    bottom: 7,
    pointerEvents: 'none',
  },
  popup: {
    left: '0px',
    right: 'auto',
    transformOrigin: 'top center',
  },
}
