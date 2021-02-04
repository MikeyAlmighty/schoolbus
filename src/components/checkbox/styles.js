import styled from 'styled-components'

export const StyledInput = styled.input.attrs({
  type: 'checkbox',
})`
  appearance: none;
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  margin: 0;
  width: 1.25em;
  height: 1.25em;
  background-color: rgba(0, 0, 0, 0.6);
  box-shadow: none;
  outline: none;
  opacity: 0;
  pointer-events: none;

  &:active + span {
    border: ${({ theme }) => theme.borderStyles.primary};
  }

  &:checked:active + span {
    border-color: transparent;
    background-color: ${({ theme }) => theme.colors.grayscale.light};
  }

  &:checked + span::after {
    border-color:  ${({ theme }) => theme.colors.white};
  }
  &:checked + span {
    background-color: ${({ theme }) => theme.colors.primary.default};
    border-color: ${({ theme }) => theme.colors.primary.default};
  }
`

export const StyledSpan = styled.span`
  position: relative;
  border: ${({ theme }) => theme.borderStyles.dark};
  border-color: rgba(0, 0, 0, 0.6);
  border-radius: ${({ theme }) => theme.radii.xsmall};
  width: 1.25em;
  height: 1.25em;
  display: block;
  transition: border-color 0.2s, background-color 0.2s;

  &::after {
    content: '';
    display: block;
    position: absolute;
    box-sizing: border-box;
    width: 0.7em;
    height: 0.3em;
    border: solid 2px transparent;
    border-right: none;
    border-top: none;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%) rotate(-45deg);
    transition: transform 0.1s;
  }
`