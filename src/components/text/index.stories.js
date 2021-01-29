import React from 'react'
import Text from './'

export default {
  title: 'Misc/Text',
  component: Text,
  parameters: {
    docs: {
      description: {
        component: 'A text component that makes use of styled-system\'s [typography](https://styled-system.com/api/#typography) property. `fontSize`, `fontWeight`, and `color`, can be used to reference their respective theme properties.',
      },
    },
  }
}

export const Base = args => <Text {...args}>The quick brown fox jumps over the lazy dog</Text>
Base.args = {
  fontSize: 'xlarge',
  fontWeight: 'bold',
  color: 'gray.dark',
  lineHeight: '1em',
  letterSpacing: '0.1em',
  textAlign: 'left'
}

export const FontSizes = () => (
  <>
    <Text fontSize="xxsmall">xxsmall</Text>
    <Text fontSize="xsmall">xsmall</Text>
    <Text fontSize="small">small</Text>
    <Text fontSize="medium">medium</Text>
    <Text fontSize="large">large</Text>
    <Text fontSize="xlarge">xlarge</Text>
    <Text fontSize="xxlarge">xxlarge</Text>
  </>
)

FontSizes.story = {
  name: 'Font sizes',
}

export const FontWeights = () => (
  <>
    <Text fontWeight="hairline">hairline</Text>
    <Text fontWeight="thin">thin</Text>
    <Text fontWeight="light">light</Text>
    <Text fontWeight="medium">medium</Text>
    <Text fontWeight="semi">semi</Text>
    <Text fontWeight="bold">bold</Text>
    <Text fontWeight="extrabold">extrabold</Text>
  </>
)

FontWeights.story = {
  name: 'Font weights',
}

export const Colors = () => (
  <>
    <Text color="white">white</Text>
    <Text color="gray.xlight">gray.xlight</Text>
    <Text color="gray.light">gray.light</Text>
    <Text color="gray.default">gray.default</Text>
    <Text color="gray.dark">gray.dark</Text>
    <Text color="gray.xdark">gray.xdark</Text>
    <Text color="gray.xxdark">gray.xxdark</Text>
    <Text color="black">black</Text>
    <Text color="primary.default">primary.default</Text>
  </>
)

export const Uppercase = () => (
  <>
    <Text uppercase>Uppercase</Text>
  </>
)
