import React from 'react'

import NotificationBanner from './'
import Button from '../button'

export default {
  title: 'Misc/ Notification Banner',
  component: NotificationBanner,
}

export const Base = args => <NotificationBanner {...args} />

Base.args = {
  children: 'Text goes here',
  actions: (
    <>
      <Button 
        size='mini'
        variant='secondary'
        onClick={console.log}
      >
        Cancel
      </Button>
      <Button 
        size='mini'
        onClick={console.log}
        ml='0.5em'
      >
        Submit
      </Button>
    </>
  )
}