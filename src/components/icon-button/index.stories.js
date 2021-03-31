import React from 'react'
import IconButton, { ICON_MAP } from './'
import Flex from '../flex'
import Text from '../text'

export default {
  title: 'Actions/ Icon Button',
  component: IconButton,
  parameters: {
    docs: {
      description: {
        component: 'A button component that displays one of a set of icons.',
      },
    },
  }
}

export const Base = args => <IconButton {...args} />
Base.args = {
  fontSize: 'large',
  backgroundColor: 'grayscale.xlight',
  color: 'primary.default',
  badge: 2,
  icon: 'Plus',
  href: undefined
}

const VariantExample = ({ variant }) => (
  <Flex mt='1em'>
    <Text width='12rem'>{variant}</Text>
    <IconButton variant={variant} mr='1em' />
  </Flex>
)

export const Variant = () => (
  <>
    <Text mb="1em">
      variant <em>(E.G. primary, secondary, light, clear, danger)</em>
    </Text>
    <Flex flexDirection="column">
      <VariantExample variant='primary'/>
      <VariantExample variant='secondary' />
      <VariantExample variant='clear' />
      <VariantExample variant='danger' />
      <VariantExample variant='dark' />
    </Flex>
  </>
)

export const BackgroundColor = () => (
  <>
    <Text mb="1em">
      backgroundColor <em>(E.G. primary.default, grayscale.dark, #333)</em>
    </Text>
    <Flex m=".5em 0 2em">
      <IconButton backgroundColor="primary.default" mr="1em" />
      <IconButton backgroundColor="grayscale.dark" mr="1em" />
      <IconButton backgroundColor="#333" mr="1em" />
    </Flex>
  </>
)

export const Color = () => (
  <>
    <Text mb="1em">
      color <em>(E.G. grayscale.default, #FEFEFE)</em>
    </Text>
    <Flex m=".5em 0 2em">
      <IconButton color="grayscale.default" mr="1em" />
      <IconButton color="#FEFEFE" mr="1em" />
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

export const AsLink = () => (
  <Flex>
    <IconButton href='#' mr='1em' label='Link' />
    <IconButton href='#' target='_blank' label='With target' />
  </Flex>
)

export const AvailableIcons = () => (
  <Flex wrap>
    {Object.keys(ICON_MAP).map(icon => (
      <IconButton icon={icon} key={icon} mr='1em' mb='1em' />
    ))}
  </Flex>
)