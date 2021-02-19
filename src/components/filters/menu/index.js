import React from 'react'

import { OptionButton } from './styles'
import { ListContainer, Option } from '../styles' 

const Menu = ({ options, setActive }) => (
  <ListContainer>
    {options.map((option) => {
      const { title, disabled } = option

      return (
        <Option key={title}>
          <OptionButton
            onClick={() => setActive(option)}
            disabled={disabled}
          >
            {title}
          </OptionButton>
        </Option>
      )
    })}
  </ListContainer>
)

export default Menu