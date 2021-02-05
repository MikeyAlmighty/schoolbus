import RadioButton from './'
import Text from '../text'
import Flex from '../flex'

export default {
  title: 'Inputs/Radio Button',
  component: RadioButton,
  parameters: {
    docs: {
      description: {
        component:
          'Radio Button allows the user to choose only one of a predefined set of mutually exclusive options.',
      },
    },
    containerProps: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start'
    }
  },
}

export const Base = args => <RadioButton {...args} />
Base.args = {
  checked: false,
  disabled: false,
}
export const WithText = () => <RadioButton>Text goes here</RadioButton>

export const Variants = () => (
  <>
    <RadioButton>Default</RadioButton>
    <RadioButton checked mb='1em'>Default Checked</RadioButton>
    <RadioButton variant='contained' mb='0.5em'>Contained</RadioButton>
    <RadioButton variant='contained' checked>Contained Checked</RadioButton>
  </>
)

export const States = () => (
  <>
    <Text mb='0.5em'>Defualt:</Text>
    <RadioButton checked />
    <Text m='1em 0 0.5em'>Disabled:</Text>
    <Flex>
      <RadioButton disabled mr='1em'>Unchecked</RadioButton>
      <RadioButton checked disabled>Checked</RadioButton>
    </Flex>
  </>
)
