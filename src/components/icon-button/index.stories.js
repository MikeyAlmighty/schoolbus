import React from 'react'
import IconButton from './'
import Flex from '../flex'
import Text from '../text'

export default {
  title: 'Actions/ Icon Button',
  component: IconButton,
}

export const Base = args => <IconButton {...args} />
Base.args = {
  fontSize: 'large',
  color: 'grayscale.xlight',
  iconColor: 'primary.default',
  badge: 2,
  noShadow: false,
  icon: 'Plus',
}

export const variant = () => (
  <>
    <Text mb="1em">
      variant <em>(E.G. primary.default, secondary, light, clear, danger)</em>
    </Text>
    <Flex m=".5em 0 2em">
      <IconButton variant="primary.default" mr="1em" />
      <IconButton variant="secondary" mr="1em" />
      <IconButton variant="light" mr="1em" />
      <IconButton variant="clear" mr="1em" />
      <IconButton variant="danger" mr="1em" />
    </Flex>
  </>
)

export const color = () => (
  <>
    <Text mb="1em">
      color <em>(E.G. primary.default, #333)</em>
    </Text>
    <Flex m=".5em 0 2em">
      <IconButton color="primary.default" mr="1em" />
      <IconButton color="grayscale.dark" mr="1em" />
      <IconButton color="#333" mr="1em" />
    </Flex>
  </>
)

export const iconColor = () => (
  <>
    <Text mb="1em">
      iconColor <em>(E.G. grayscale.default, #FEFEFE)</em>
    </Text>
    <Flex m=".5em 0 2em">
      <IconButton iconColor="grayscale.default" mr="1em" />
      <IconButton iconColor="#FEFEFE" mr="1em" />
    </Flex>
  </>
)

export const Size = () => (
  <>
    <Text mb="1em">
      size <em>(E.G.xsmall, small, medium, large, xlarge)</em>
    </Text>
    <Flex m=".5em 0 2em">
      <IconButton size="xsmall" />
      <IconButton size="small" />
      <IconButton size="medium" />
      <IconButton size="large" />
      <IconButton size="xlarge" />
    </Flex>
  </>
)
