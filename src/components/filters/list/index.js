import React, { useCallback } from 'react'
import set from 'lodash.set'
import get from 'lodash.get'
import clone from 'lodash.clone'

import { ListContainer, Option } from '../styles'
import Checkbox from '../../checkbox'
import RadioButton from '../../radio-button'
import Button from '../../button'

const getKey = ({ label, value = label }) => value
const compareValues = (value1, value2) => getKey(value1) === getKey(value2)
const updateSingleSelectValue = (current, value) => compareValues(current, value) ? '' : value
const updateMultiSelectValue = (current = [], value) => current?.some(c => compareValues(c, value)) 
  ? current.filter(currentValue => !compareValues(currentValue, value))
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
        {options.map((option) => {
          const { label, value = label } = option
          return (
            <Option key={value}>
              <Component
                variant='filter'
                text={label}
                onChange={() => handleChange(option)}
                checked={singleSelect 
                  ? currentValue === option 
                  : currentValue?.includes(option)}
              />
            </Option>
          )
        })}
      </ListContainer>
      <Button shape='block' mt='1em' onClick={() => onApply(values)}>
        Apply
      </Button>
    </>
  )
}

export default List