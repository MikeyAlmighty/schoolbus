import React, { useCallback, } from 'react'
import clone from 'lodash.clone'
import set from 'lodash.set'
import get from 'lodash.get'

import Flex from '../../flex'
import Chip from '../../chip'
import Text from '../../text'
import Button from '../../button'

function getArrayValue(value) {
  return value.length > 1 ? 'Multiple' : value[0]?.label || value[0]?.value
}

const AppliedList = ({ filterTypes = [], filters, onSetFilters, ...otherProps }) => {
  const handleFiltersSet = useCallback((key, isArray) => {
    const newValue = isArray ? [] : null
    onSetFilters(set(clone(filters), key, newValue))
  }, [onSetFilters, filters])

  const handleClearFilters = useCallback(() => {
    onSetFilters(Object.keys(filters).reduce((acc, filterKey) => 
      filterTypes.some(({ key }) => key === filterKey)
        ? { ...acc, [filterKey]: filters[filterKey] }
        : acc
    ), {})
  }, [onSetFilters, filterTypes, filters])

  const hasFilters = filterTypes.some(({ key }) => {
    const filter = get(filters, key)
    const isArray = Array.isArray(filter)
    return isArray ? filter.length > 0 : !!filter
  })
  if (!hasFilters) return null
  
  return (
    <Flex mb='1em' width='100%' justifyContent='space-between' {...otherProps}>
      <Flex as='ul' wrap>
        {filterTypes.map(({ label = '', key, getValue }) => {
          const value = getValue ? getValue(get(filters, key), filters) : get(filters, key)
          const isArray = Array.isArray(value)
          const isEmptyArray = isArray && value.length === 0

          if (!value || isEmptyArray) return null

          return (
            <Chip
              as='li'
              size='mini'
              key={key}
              onRemove={() => handleFiltersSet(key, isArray)}
              label={(
                <>
                  <Text as='strong' fontWeight='extrabold' color='grayscale.dark' mr='0.5em'>
                    {label}:
                  </Text>
                  {isArray ? getArrayValue(value) : value?.label || value?.value}
                </>
              )}
            />
          )
        })}
      </Flex>
      {hasFilters && (
        <Button 
          variant='minimal' 
          onClick={handleClearFilters}
        >
          Clear all
        </Button>
      )}
    </Flex>
  )
}

export default AppliedList