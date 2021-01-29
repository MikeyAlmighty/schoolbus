import React from 'react'
import TelInput from './'
import defaultInputArgs from '../../config/default-input-args'

export default {
  title: 'Inputs/ Tel Input',
  parameters: {
    formik: {
      initialValues: {
        name: '',
      },
    },
    component: TelInput,
    docs: {
      description: {
        component: 'A phone number inpu built on top of react-phone-input-2 with formik and non formik connected variants.',
      },
    },
  },
}

export const Base = args => <TelInput {...args} />
Base.args = {
  ...defaultInputArgs,
  defaultCountry: 'za',
  masks: {
    za: '.. ... ....',
  },
}
