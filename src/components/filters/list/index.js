import React, { useCallback } from 'react'
import set from 'lodash.set'
import clone from 'lodash.clone'

import { ListContainer, Option } from '../styles'
import Checkbox from '../../checkbox'
import RadioButton from '../../radio-button'
import Button from '../../button'

const List = ({ options, name, values, onApply, onChange, singleSelect }) => {
  const Component = singleSelect ? RadioButton : Checkbox

  const handleChange = useCallback((value) => {
    const newValues = set(clone(values), name, value)
    onChange(newValues)
  }, [values, name, onChange])

  return (
    <>
      <ListContainer>
        {options.map(({ label, value = label }) => (
          <Option key={value}>
            <Component
              variant='filter'
              text={label}
              onChange={() => handleChange(value)}
            />
          </Option>
        ))}
      </ListContainer>
      <Button shape='block' mt='1em' onClick={() => onApply(values)}>
        Apply
      </Button>
    </>
  )
}

export default List