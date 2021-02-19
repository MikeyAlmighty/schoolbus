import React, { useState } from 'react'

import Flex from '../flex'
import Popup from '../popup'
import IconButton from '../icon-button'
import Content from './content'
import theme from '../../config/theme'

import { contentCss } from './styles'

const findParent = (object, value) => {
  for (let i = 0; i < object?.options?.length; i++) {
    const current = object.options[i]
    if (current === value) return object
    const parent = findParent(current, value)
    if (parent) return parent
  }
}

const Filters = ({ content, filterCount, ...otherProps }) => {
  const [active, setActive] = useState(content)
  const previous = findParent(content, active)

  return (
    <Popup
      trigger={(isOpen) => (
        <IconButton 
          variant='clear' 
          icon='FilterVariant'
          badge={filterCount}
          {...(isOpen && { 
            bg: theme.colors.grayscale.xxlight,
            label: ''
          })}
        />
      )}
      contentCss={contentCss}
      position='bottomCenter'
      yOffset='0.25em'
    >
      {closePopup => (
        <Flex
          width='17.5em'
          p='1.5em 1em'
          flexDirection='column'
          alignItems='center'
        >
          <Content
            {...active} 
            closePopup={closePopup}
            onBack={previous && (() => setActive(previous))}
            setActive={setActive}
            {...otherProps}
          />
        </Flex>
      )}
    </Popup>
  )
}

export default Filters