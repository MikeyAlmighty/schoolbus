import React from 'react'
import Input from './'
import defaultInputArgs from '../../config/default-input-args'
import CalendarToday from '@lessondesk/material-icons/dist/CalendarToday'

export default {
  title: 'Inputs/ Input',
  component: Input,
  parameters: {
    docs: {
      description: {
        component: 'A simple input component with formik and non formik connected variants.',
      },
    },
  }
}

export const Base = args => <Input {...args} />
Base.args = defaultInputArgs

export const WithoutLabel = () => <Input id="1" name="1" placeholder="Without label" />
export const WithLabel = () => <Input id="2" label="Label" name="2" />
export const Disabled = () => <Input id="3" label="Disabled" name="3" disabled />
export const Invalid = () => <Input id="4" label="With Alert" name="4" alertText="Invalid" />
export const WithIcon = () => <Input id="5" label="With Icon" name="5" icon={<CalendarToday/>} />
