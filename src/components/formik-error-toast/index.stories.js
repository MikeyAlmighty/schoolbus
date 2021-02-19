import React from 'react'
import { Formik } from 'formik'
import { object, string } from 'yup'

import FormikErrorToast from './'
import Input from '../input'
import Button from '../button'

export default {
  title: 'Misc/ Formik Error Toast',
  component: FormikErrorToast,
  parameters: {
    docs: {
      description: {
        component: 'A component used to toast formik errors.',
      },
    },
  },
}

const INITIAL_VALUES = {
  name: '',
  description: ''
}

const SCHEMA = object().shape({
  name: string().required('Please ensure to add a name'),
  description: string().max(20, 'Description must be at most 20 characters long')
})

export const Base = (args) => (
  <Formik
    validationSchema={SCHEMA}
    initialValues={INITIAL_VALUES}
  >
    {({ handleSubmit }) => (
      <form>
        <Input name='name' label='Name:' />
        <Input name='description' label='Description:' />
        <Button onClick={handleSubmit}>Submit</Button>
        <FormikErrorToast {...args} />
      </form>
    )}
  </Formik>
)

Base.args = {
  fields: ['name', 'description'],
  errorOveride: '',
  singleToast: true,
}