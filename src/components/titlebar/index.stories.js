import React from 'react'
import TitleBar from './'

export default {
  title: 'Misc/ TitleBar',
  component: TitleBar,
  parameters: {
    formik: {
      initialValues: {
        name: '',
      },
    },
  },
}

export const Base = args => <TitleBar {...args}>Title</TitleBar>
Base.args = {
  onBack: to => (to ? Router.push(to) : Router.back()),
  to: '',
  withBack: false,
  align: 'center'
}
export const WithBack = ()  => <TitleBar withBack>Title</TitleBar>
