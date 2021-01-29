import React from 'react'
import Flex from './'
import Box from '../box'

export default {
  title: 'Containers & Wrappers/ Flex',
  component: Flex,
  parameters: {
    docs: {
      description: {
        component: 'A `display: flex;` component that makes use of styled-system\'s [flexbox](https://styled-system.com/api#flexbox) property.',
      },
    },
  }
}

export const Base = args => (
  <Flex {...args}>
    {Array.from({ length: 5 }, (_, i) => (
      <Box key={i} m={1} p={3} bg="primary.default" width="30%" />
    ))}
  </Flex>
)
Base.args = {
  justifyContent: 'center',
  alignContent: 'center',
  flexDirection: 'row',
  wrap: true,
}

export const Center = () => (
  <Flex justify="center" align="center">
    <Box p={3} m={1} width={1 / 2} color="white" bg="primary.default">
      Align & justify center
    </Box>
  </Flex>
)

export const Wrap = () => (
  <Flex wrap>
    <Box width="300px" m={1} p={3} color="white" bg="primary.default">
      Flex wrap
    </Box>
    <Box width="300px" m={1} p={3} color="white" bg="primary.default">
      Flex wrap
    </Box>
    <Box width="300px" m={1} p={3} color="white" bg="primary.default">
      Flex wrap
    </Box>
    <Box width="300px" m={1} p={3} color="white" bg="primary.default">
      Flex wrap
    </Box>
  </Flex>
)

export const Around = () => (
  <Flex justify="space-around">
    <Box width="300px" m={1} p={3} color="white" bg="primary.default">
      Justify around
    </Box>
    <Box width="300px" m={1} p={3} color="white" bg="primary.default">
      Justify around
    </Box>
  </Flex>
)

export const FlexDirection = () => (
  <Flex flexDirection="column">
    <Box width="300px" m={1} p={3} color="white" bg="primary.default">
      Column
    </Box>
    <Box width="300px" m={1} p={3} color="white" bg="primary.default">
      Column
    </Box>
  </Flex>
)
