import React, { useState } from 'react'

import Flex from '../flex'
import Popup from '../popup'
import IconButton from '../icon-button'
import Content from './content'
import theme from '../../config/theme'

import { contentCss } from './styles'

const getKey = object => object?.name || object?.title

const findParent = (object, key) => {
  for (let i = 0; i < object?.options?.length; i++) {
    const current = getKey(object.options[i])
    if (current === key) return getKey(object)
    const parent = findParent(current, key)
    if (parent) return parent
  }
}

const findObject = (object, key)=> {
  if (getKey(object) === key) return object
  for (let i = 0; i < object.options?.length; i++) {
    const current = object.options?.[i]
    if (getKey(current) === key) return current
    return findObject(current, key)
  }
}

const Filters = ({ content, filterCount, ...otherProps }) => {
  const [activeName, setActiveName] = useState(getKey(content))
  const previous = findParent(content, activeName)
  const active = findObject(content, activeName)

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
            closePopup={closePopup}
            onBack={previous && (() => setActiveName(previous))}
            setActiveName={setActiveName}
            {...active} 
            {...otherProps}
          />
        </Flex>
      )}
    </Popup>
  )
}

export default Filters