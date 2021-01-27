import React from 'react'
import { Formik } from 'formik'

import CheckCircle from '@lessondesk/material-icons/dist/CheckCircle'
import CloseCircle from '@lessondesk/material-icons/dist/CloseCircle'
import theme from '../../config/theme'

import OpposingToggle from './'


export default {
  title: 'Inputs/ Opposing toggle',
  component: OpposingToggle,
  parameters: {
    docs: {
      description: {
        component: 'A radio button component.',
      },
    },
  },
}

export const Base = args => (
  <Formik initialValues={{ name: 'value1' }}>
    <OpposingToggle {...args} />
  </Formik>
)

Base.args = {
  name: 'name',
  disabled: false,
  onChange: e => console.log(e, e?.target, e?.target?.value),
  options: [{
    label: 'Option 1',
    value: 'value1',
    icon: <CheckCircle mr='0.5em' color={theme.colors.statusFill.success} />
  }, {
    label: 'Option 2',
    value: 'value2',
      icon: <CloseCircle mr='0.5em' color={theme.colors.statusFill.error} />
  }]
}
