import React, { Component, createRef } from 'react'
import { debounce } from 'lodash-es'

import { ContainerAlt, InputAlt, iconAltStyling, expandedIconStyles } from './styles'
import Magnify from '@lessondesk/material-icons/dist/Magnify'

import { fontSizes, colors } from '../../config/theme.js'

class ExpandingSearchInput extends Component {

  constructor() {
    super()

    this.state = {
      expanded: false,
      value: '',
    }

    this.input = createRef()
  }

  toggleExpanded = () => {
    const { onExpand } = this.props

    this.setState(({expanded, value}) => ({
      expanded: !expanded,
      value: expanded ? value : ''
    }), () => {
      const { expanded } = this.state

      onExpand && onExpand(expanded)
      this.input.current.focus()
    })
  }


  render() {
    const { expanded } = this.state
    const { onChange, onExpand, ...rest } = this.props

    return (
      <ContainerAlt>
        <InputAlt
          style={{ padding: '0 1em' }}
          placeholder="Search..."
          expanded={expanded}
          ref={this.input}
          onChange={debounce((...args) => onChange(...args), 500)}
          {...rest}
        />
        <Magnify
          onClick={this.toggleExpanded}
          style={{
            ...iconAltStyling,
            ...(expanded && expandedIconStyles),
          }}
          bg='white'
          size={fontSizes.large}
          color={colors.gray.default}
        />
      </ContainerAlt>
    )
  }
}

export default ExpandingSearchInput
