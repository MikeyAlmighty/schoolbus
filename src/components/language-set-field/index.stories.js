import React from 'react'
import LanguageSetField from './'

const defaultLanguage = {
  code: 'en-ZA',
  value: 'English',
}

export default {
  title: 'Inputs/ Language Set Field',
  component: LanguageSetField,
  parameters: {
    docs: {
      description: {
        component: 'A non formik connected input that displays the language to the left of the user\'s input',
      },
    },
  },
}

export const Base = args => <LanguageSetField {...args} />

Base.args = {
  placeholder: 'Placeholder',
  name: 'name',
  disabled: false,
  language: defaultLanguage,
  default: true,
}
