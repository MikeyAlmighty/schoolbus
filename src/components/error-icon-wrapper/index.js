import React from 'react'
import Alert from '@lessondesk/material-icons/dist/Alert'
import theme from '../../config/theme'

import Tooltip from '../tooltip'
import Flex from '../flex'
import Box from '../box'

const ErrorIconWrapper = ({ alertText, children, offset = '0.5em', size = '1.5em' }) => {

  return (
    <Flex position='relative' alignItems='center'>
      {children}
      {alertText && (
        <Box position='absolute' right={offset}>
          <Tooltip text={alertText?.verbose || alertText} position='top' offset='0.75em'>
            <Alert color={theme.colors.statusFill.error} size={size} />
          </Tooltip>
        </Box>
      )}
    </Flex>
  )
}

export default ErrorIconWrapper