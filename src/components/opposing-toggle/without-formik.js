import React from 'react'

import createInputDefaults from '../../utils/create-input-defaults'
import { Container, Input, Option } from './styles'

const OpposingToggle = ({ name, options, value, onBlur, onChange, formik, ...otherProps }) => {

  const { hasFormik, value: selected,  ...inputDefaults } = createInputDefaults({
    value,
    onBlur,
    onChange,
    name,
    formik,
  })
  const handleChange = onChange || (hasFormik && (value => formik.setFieldValue(name, value)))

  return (
    <Container>
      {options.map(({ icon, label, value = label, ...otherOptionrProps }) => (
        <>
          <Input
            {...inputDefaults}
            type="radio"
            id={`${name}-${value}`}
            name={name}
            value={value}
            onChange={handleChange}
            {...otherProps}
          />
          <Option 
            for={`${name}-${value}`}
            $selected={value === selected}
            hasIcon={!!icon}
            {...otherOptionrProps}
          >
            {icon}
            {label}
          </Option>
        </>
      ))}
    </Container>
  )
}

export default OpposingToggle