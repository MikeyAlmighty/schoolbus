import styled from 'styled-components'

import Flex from '../flex'

export const Container = styled(Flex).attrs({ 
  justifyContent: 'space-between',
  alignItems: 'center'
})`
  box-shadow: ${({ theme }) => theme.elevations.itemContainer};
  border-radius: ${({ theme }) => theme.radii.large};
  padding: 1em;
`