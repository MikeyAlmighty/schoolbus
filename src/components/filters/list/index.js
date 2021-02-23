import React, { useCallback } from 'react'
import set from 'lodash.set'
import get from 'lodash.get'
import clone from 'lodash.clone'

import { ListContainer, Option } from '../styles'
import Checkbox from '../../checkbox'
import RadioButton from '../../radio-button'
import Button from '../../button'

const updateSingleSelectValue = (current, value) => current === value ? '' : value
const updateMultiSelectValue = (current = [], value) => current.includes(value) 
  ? current.filter(currentValue => currentValue !== value)
  : [...current, value]

const List = ({ options, name, values, onApply, onChange, singleSelect }) => {
  const Component = singleSelect ? RadioButton : Checkbox
  const currentValue = get(values, name)

  const handleChange = useCallback((value) => {
    const clonedValues = clone(values)
    const currentValue = get(clonedValues, name)
    const newValue = singleSelect
      ? updateSingleSelectValue(currentValue, value)
      : updateMultiSelectValue(currentValue, value)
    const newValues = set(clonedValues, name, newValue)

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
              checked={singleSelect 
                  ? currentValue === value 
                  : currentValue.includes(value)}
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