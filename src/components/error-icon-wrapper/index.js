import React from 'react'
import Alert from '@lessondesk/material-icons/dist/Alert'
import styled from 'styled-components'

import theme from '../../config/theme'
import Tooltip from '../tooltip'
import Flex from '../flex'
import Box from '../box'

const StyledAlert = styled(Alert)`
  ${({ onClick }) => onClick && `cursor: pointer;`}
`

const ErrorIconWrapper = ({ onClick, alertText, children, offset = '0.5em', size = '1.5em' }) => {
  return (
    <Flex position='relative' alignItems='center' width='100%'>
      {children}
      {alertText && (
        <Box position='absolute' right={offset}>
          <Tooltip text={alertText?.verbose || alertText} position='top' $offset='0.75em'>
            <StyledAlert color={theme.colors.statusFill.error} size={size} onClick={onClick} />
          </Tooltip>
        </Box>
      )}
    </Flex>
  )
}

export default ErrorIconWrapper