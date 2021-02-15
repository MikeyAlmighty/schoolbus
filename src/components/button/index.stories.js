import React from 'react'
import Button from './'
import Flex from '../../../lib/components/flex'

export default {
  title: 'Actions/ Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          'The Button component represents a clickable button that can be used for actions in forms, dialogs, and more.',
      },
    },
  },
}

export const Base = args => <Button {...args}>Hello World!</Button>
Base.args = {
  variant: 'primary.default',
  size: '',
  shape: '',
  disabled: false,
  isLoading: false,
}

export const Variants = () => (
  <>
    <Flex>
      <Button variant="primary" m={2}>
        Primary
      </Button>
      <Button variant="primary" m={2} disabled>
        disabled
      </Button>
    </Flex>
    <Flex>
      <Button variant="secondary" m={2}>
        Secondary
      </Button>
      <Button variant="secondary" m={2} disabled>
        Disabled
      </Button>
    </Flex>
    <Flex>
      <Button variant="minimal" m={2}>
        Minimal
      </Button>
      <Button variant="minimal" m={2} disabled>
        Minimal
      </Button>
    </Flex>
    <Flex>
      <Button variant="danger" m={2}>
        Danger
      </Button>
      <Button variant="danger" m={2} disabled>
        Danger
      </Button>
    </Flex>
    <Flex bg='grayscale.dark'>
      <Button variant="dark" m={2}>
        Dark
      </Button>
      <Button variant="dark" m={2} disabled>
        Dark
      </Button>
    </Flex>
    <Button variant="primary" isLoading m={2}>
      Submit
    </Button>
  </>
)

export const Sizes = () => (
  <>
    <Button size="mini" m={2}>
      Mini
    </Button>
    <Button size="default" m={2}>
      Default
    </Button>
    <Button size="large" m={2}>
      Large
    </Button>
    <Button size="extended" m={2}>
      Extended
    </Button>
  </>
)

export const Shapes = () => (
  <>
    <Button m={2}>
      Default
    </Button>
    <Button shape="rounded" m={2}>
      Rounded
    </Button>
    <Button shape="block" m={2}>
      Block
    </Button>
  </>
)
