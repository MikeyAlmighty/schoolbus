import React from 'react'
import TimeInput from './'
import defaultInputArgs from '../../config/default-input-args'
import Box from '../box'

export default {
  title: 'Inputs/ Time Input',
  component: TimeInput,
  parameters: {
    formik: {
      initialValues: {
        name: '',
      },
    },
    docs: {
      description: {
        component: 'An input used to select the time of day.',
      },
    },
  },
}

export const Base = args => <Box height='25em'><TimeInput {...args} /></Box>
Base.args = defaultInputArgs
export const Hour12 = () => <TimeInput {...defaultInputArgs} />
export const Hour24 = () => <TimeInput {...defaultInputArgs} timeFormat="24" />
export const Disabled = () => <TimeInput {...defaultInputArgs} disabled />
export const invalid = () => <TimeInput {...defaultInputArgs} alertText="Invalid" />
