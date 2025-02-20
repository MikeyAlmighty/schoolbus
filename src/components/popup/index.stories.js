import React from 'react'

import Popup from './'
import Button from '../button'

export default {
  title: 'Actions/ Popup',
  component: Popup,
  parameters: {
    docs: {
      description: {
        component: 'Displays content as a popup when clicking on the trigger element.',
      },
    },
  },
}

const defaultArgs = { position: 'bottomCenter' }
export const Base = args => (
  <Popup {...args} trigger={<Button variant="primary.default">Click me!</Button>}>
    Content
  </Popup>
)
Base.args = defaultArgs

export const Arrow = () => (
  <Popup {...defaultArgs} arrow>
    Arrow
  </Popup>
)

export const NoTrigger = () => (
  <Popup position="bottomRight" trigger={null}>
    No trigger
  </Popup>
)

export const CloseOnSelect = () => (
  <Popup closeOnSelect position="bottomRight">
    Click me
  </Popup>
)

export const CustomPopupClose = () => (
  <Popup position="bottomRight">
    {closePopup => (
      <div>
        <Button variant="primary.default" onClick={closePopup}>
          Closes popup
        </Button>
        <Button variant="secondary">Doesn't close popup</Button>
      </div>
    )}
  </Popup>
)
