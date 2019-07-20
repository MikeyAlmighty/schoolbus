import React from 'react'
import { storiesOf } from '@storybook/react'
import { Button } from '../'

import ButtonReadme from '../docs/button.md'

storiesOf('Button', module)
  .addParameters({
    readme: {
      sidebar: ButtonReadme,
    },
  })
  .add('Variants', () => (
    <>
      <Button>Default</Button>
      <Button variant="primary" m={2}>
        Primary
      </Button>
      <Button variant="secondary" m={2}>
        Secondary
      </Button>
      <Button variant="ternary" m={2}>
        Ternary
      </Button>
      <Button variant="minimal" m={2}>
        Minimal
      </Button>
      <Button variant="danger" m={2}>
        Danger
      </Button>
    </>
  ))
  .add('Sizes', () => (
    <>
      <Button variant="ternary" size="compact" m={2}>
        Compact
      </Button>
      <Button variant="ternary" size="default" m={2}>
        Default
      </Button>
      <Button variant="ternary" size="large" m={2}>
        Large
      </Button>
    </>
  ))
  .add('Shapes', () => (
    <>
      <Button shape="square" variant="primary" m={2}>
        Square
      </Button>
      <Button shape="round" variant="primary" m={2}>
        Round
      </Button>
      <Button shape="rounded" variant="primary" m={2}>
        Rounded
      </Button>
      <Button shape="block" variant="primary" m={2}>
        Block
      </Button>
    </>
  ))
