import Checkbox from './'
import Text from '../text'
import Flex from '../flex'

export default {
  title: 'Actions/ Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component:
          'The Checkbox component represents a togglable action, which can be used in forms or anywhere in a document that needs simple, standard button functionality.',
      },
    },
  },
}

export const Base = args => <Checkbox {...args}>Text</Checkbox>
Base.args = {
  checked: false,
  disabled: false,
}
export const WithText = () => <Checkbox>Text goes here</Checkbox>

export const Variants = () => (
  <>
    <Checkbox>Default</Checkbox>
    <Checkbox checked mb='1em'>Default Checked</Checkbox>
    <Checkbox variant='contained' mb='0.5em'>Contained</Checkbox>
    <Checkbox variant='contained' checked>Contained Checked</Checkbox>
  </>
)

export const States = () => (
  <>
    <Text mb='0.5em'>Default:</Text>
    <Checkbox checked />
    <Text m='1em 0 0.5em'>Disabled:</Text>
    <Flex>
      <Checkbox disabled mr='1em'>Unchecked</Checkbox>
      <Checkbox checked disabled>Checked</Checkbox>
    </Flex>
  </>
)
