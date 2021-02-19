import React, { useState, useCallback } from 'react'
import get from 'lodash.get'
import set from 'lodash.set'
import clone from 'lodash.clone'

import Flex from '../../flex'
import Button from '../../button'
import Text from '../../text'
import DateInput from '../../date-input/without-formik'

const DateRange = ({ values, name, onApply, onBack }) => {
  const [from, setFrom] = useState(get(values, `${name}.from`) || '')
  const [to, setTo] = useState(get(values, `${name}.to`) || '')
  const isInvalid = to && from && (to < from)

  const handleApplyClick = useCallback(() => {
    const newValues = set(clone(values), name, { from, to })
    onApply(newValues)
  }, [values, name, onApply, from, to])

  return (
    <>
      <Text
        fontSize='xsmall'
        fontStyle='italic'
        color='grayscale.default'
        textAlign='center'
      >
        Set a "From" date and "To" date to
        define the desired date range.
      </Text>
      <DateInput
        label='From'
        width='100%'
        minWidth='100%'
        mt='1em'
        mb='0.5em'
        value={from}
        onChange={setFrom}
      />
      <DateInput
        mt='0'
        label='To'
        width='100%'
        minWidth='100%'
        mb='0.5em'
        value={to}
        onChange={setTo}
        alertText={isInvalid && {
          simple: 'Invalid',
          verbose: 'The "To" date must occur after the "From" date.'
        }}
      />
      <Flex mt='1.5em'>
        <Button variant='secondary' mr='1em' onClick={onBack}>Cancel</Button>
        <Button onClick={handleApplyClick} disabled={!from || !to || isInvalid}>
          Apply
        </Button>
      </Flex>
    </>
  )
}

export default DateRange