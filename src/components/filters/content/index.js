import React, { useCallback } from 'react'

import Text from '../../text'
import DateRange from '../date-range'
import List from '../list'
import Menu from '../menu'
import Flex from '../../flex'
import IconButton from '../../icon-button'

const TYPE_MAP = {
  menu: Menu,
  list: List,
  'date-range': DateRange,
}

const Content = ({
  title,
  type,
  onBack,
  onApply,
  ...otherProps
}) => {
  const { closePopup, setActiveName, initialKey } = otherProps
  const Component = TYPE_MAP[type]
  const handleApply = useCallback((...args) => {
    closePopup()
    setActiveName(initialKey)
    onApply(...args)
  }, [onApply, initialKey, setActiveName, closePopup])

  return (
    <>
      <Flex mb='1em' width='100%' alignItems='center'>
        {!!onBack && <IconButton icon='ArrowLeft' variant='clear' onClick={onBack} />}
        <Text
          color='grayscale.dark'
          fontWeight='extrabold'
          fontSize='small'
          ml='0.5em'
          width='100%'
          textAlign={onBack ? 'left' : 'center'}
        >
          {title}
        </Text>
      </Flex>
      {Component && (
        <Component
          onBack={onBack}
          onApply={handleApply}
          setActiveName={setActiveName}
          {...otherProps}
        />
      )}
    </>
  )
}

export default Content