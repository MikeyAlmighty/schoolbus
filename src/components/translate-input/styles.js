import styled from 'styled-components'

import StyledInput from '../styled-input'

export const TranslateIconContainer = styled.div`
  position: absolute;
  right: 0.8em;
  cursor: pointer;
  line-height: 0;
  ${({ fixed }) => fixed && `top: 0.5em;`}
`

export const TranslateInput = styled(StyledInput)`
  padding-right: 3em;
`
