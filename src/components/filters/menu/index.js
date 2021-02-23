import React from 'react'

import { OptionButton } from './styles'
import { ListContainer, Option } from '../styles' 

const Menu = ({ options, setActiveName }) => (
  <ListContainer>
    {options.map((option) => {
      const { title, disabled } = option

      return (
        <Option key={title}>
          <OptionButton
            onClick={() => setActiveName(option?.name)}
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