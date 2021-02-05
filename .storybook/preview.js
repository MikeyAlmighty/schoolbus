import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Formik } from 'formik'

import theme from '../src/config/theme'
import { ThemeProvider, Box, Normalize } from '../src'

export const decorators = [
  (Story, { parameters }) => {
    const { formik, containerProps } = parameters
    return (
      <ThemeProvider theme={theme}>
        <Normalize />
        <Box p={3} {...containerProps}>
          {formik 
            ? <Formik {...formik}><Story /></Formik>
            : <Story />}
        </Box>
      </ThemeProvider>
    )
  }
]

export const parameters = {
  viewMode: 'docs'
}