import React from 'react'
import { number, text } from '@storybook/addon-knobs'

import Box from './'

export default {
  title: 'Containers & Wrappers/ Box',
  component: Box,
}

export const Base = args => <Box {...args}>children</Box>
Base.args = {
  color: 'white',
  bg: 'primary.default',
  elevation: 1,
  p: '1em',
  m: '1em',
  pl: '',
  pt: '',
  pr: '',
  pb: '',
  ml: '',
  mt: '',
  mr: '',
  mb: '',
}

export const Padding = () => <Box p={number('Padding', 3)}>With padding</Box>
export const Margin = () => <Box m={number('Margin', 3)}>With margin</Box>

export const Color = () => (
  <Box p={3} color={text('Color', 'primary.default')}>
    Color
  </Box>
)

export const BackgroundColor = () => (
  <Box p={3} color="primary.default" bg="black">
    Background color
  </Box>
)
export const Width = () => (
  <Box p={3} width={1 / 2} color="white" bg="primary.default">
    Half Width
  </Box>
)

export const PixelWidth = () => (
  <Box p={3} width={256} color="white" bg="primary.default">
    256px width
  </Box>
)

export const VwWidth = () => (
  <Box p={3} width="50vw" color="white" bg="primary.default">
    50vw width
  </Box>
)

export const DirectionalPadding = () => (
  <Box p={3}>
    <Box m={1} pt={3} color="white" bg="primary.default">
      Padding Top
    </Box>
    <Box m={1} pr={3} color="white" bg="primary.default">
      Padding Right
    </Box>
    <Box m={1} pb={3} color="white" bg="primary.default">
      Padding Bottom
    </Box>
    <Box m={1} pl={3} color="white" bg="primary.default">
      Padding Left
    </Box>
    <Box m={1} px={3} color="white" bg="primary.default">
      Padding X-Axis
    </Box>
    <Box m={1} py={3} color="white" bg="primary.default">
      Padding Y-Axis
    </Box>
  </Box>
)

export const DirectionalMargin = () => (
  <Box p={3}>
    <Box mt={3} color="white" bg="primary.default">
      Margin Top
    </Box>
    <Box mr={3} color="white" bg="primary.default">
      Margin Right
    </Box>
    <Box mb={3} color="white" bg="primary.default">
      Margin Bottom
    </Box>
    <Box ml={3} color="white" bg="primary.default">
      Margin Left
    </Box>
    <Box mx={3} color="white" bg="primary.default">
      Margin X-Axis
    </Box>
    <Box my={3} color="white" bg="primary.default">
      Margin Y-Axis
    </Box>
  </Box>
)
