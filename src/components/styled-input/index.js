import styled, { css } from 'styled-components'


const StyledInput = styled.input.attrs(({ type }) => ({
  as: type === 'textarea' ? 'textarea' : 'input'
}))`
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.colors.white : theme.colors.grayscale.xxlight};
  border: 1px solid ${({ disabled, theme }) => theme.colors.grayscale[disabled ? 'xlight' : 'xxlight']};
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSizes.small};
  padding: 0.5em 1em;
  height: 38px;
  border-radius: ${({ theme }) => theme.radii.small};
  width: 100%;
  color: ${({ theme }) => theme.colors.grayscale.xdark};
  transition: background-color 0.1s, border 0.1s;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.grayscale.xlight};
  }
  &:focus {
    border: ${({ theme }) => theme.borderStyles.primary};
  }

  ${({ type }) => type === 'textarea' && css`
    resize: none;
    min-height: 5.5em;
    height: 5.5em;
  `}

  ${({ hasError, theme }) => hasError && `
    border: ${theme.borderStyles.danger};
    padding-right: 2.5em;
  `}

  ::placeholder {
    color: ${({ theme }) => theme.colors.grayscale.light};
  }

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    /* stylelint-disable-next-line property-no-vendor-prefix */
    -webkit-appearance: none;
    margin: 0;
  }
`

StyledInput.displayName = 'Input'

export default StyledInput
