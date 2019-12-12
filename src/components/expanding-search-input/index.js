import React, { Component, createRef } from 'react'

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
    const { expanded, value } = this.state

    this.setState({
      expanded: !expanded,
      value: expanded ? value : '',
    }, () => this.input.current.focus())
  }

  render() {
    const { expanded } = this.state
    return (
      <ContainerAlt>
        <InputAlt
          style={{ padding: '0 1em' }}
          placeholder="Search..."
          expanded={expanded}
          ref={this.input}
          {...this.props}
        />
        <Magnify
          onClick={this.toggleExpanded}
          style={{
            ...iconAltStyling,
            ...(expanded && expandedIconStyles),
          }}
          bg='white'
          size={fontSizes.large}
          color={colors.gray.dark}
        />
      </ContainerAlt>
    )
  }
}

export default ExpandingSearchInput
