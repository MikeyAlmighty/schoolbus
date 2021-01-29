import React from 'react'
import { Formik } from 'formik'

import CheckCircle from '@lessondesk/material-icons/dist/CheckCircle'
import CloseCircle from '@lessondesk/material-icons/dist/CloseCircle'
import theme from '../../config/theme'

import OpposingToggle from './'

const defaultProps = {
  name: 'name',
  disabled: false,
  onChange: console.log,
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

export default {
  title: 'Inputs/ Opposing toggle',
  component: OpposingToggle,
  parameters: {
    docs: {
      description: {
        component: 'A radio button component for selecting between a set of options.',
      },
    },
  },
}

export const Base = args => (
  <Formik initialValues={{ name: 'value1' }}>
    <OpposingToggle {...args} />
  </Formik>
)

Base.args = defaultProps

const optionsWithoutIcons = [
  { label: 'Option 1' }, 
  { label: 'Option 2' }, 
  { label: 'Option 3' }
]

export const WithoutIcons = () => (
  <Formik initialValues={{ name: 'Option 1' }}>
    <OpposingToggle 
      {...defaultProps}
      options={optionsWithoutIcons}
    />
  </Formik>
)