import React, { Component, createRef } from 'react'
import debounce from 'lodash.debounce'
import Magnify from '@lessondesk/material-icons/dist/Magnify'

import Text from '../text'
import Box from '../box'
import IconButton from '../icon-button'
import VisuallyHidden from '../visually-hidden'
import Tooltip from '../tooltip'
import { fontSizes, colors, radii } from '../../config/theme.js'
import { Container, Input, iconAltStyling } from './styles'

const SEARCH_DEBOUNCE_TIME = 250

class SearchInput extends Component {
  constructor() {
    super()

    this.state = {
      expanded: false,
      focused: false,
      value: '',
    }

    this.input = createRef()
  }

  componentDidMount() {
    this.updateDebouncedChangeHandler()
  }

  componentDidUpdate({ onChange: previousOnChange }) {
    const { onChange } = this.props
    if (previousOnChange !== onChange) this.updateDebouncedChangeHandler()
  }

  updateDebouncedChangeHandler() {
    const { onChange, debounceTimeout = SEARCH_DEBOUNCE_TIME } = this.props
    this.debouncedChange = debounceTimeout
      ? onChange && debounce(onChange, debounceTimeout)
      : onChange
  }

  toggleExpanded = () => {
    const { onExpand } = this.props

    this.setState(
      ({ expanded, value }) => ({
        expanded: !expanded,
        value: expanded ? value : '',
      }),
      () => {
        const { expanded } = this.state

        onExpand && onExpand(expanded)
        this.input.current.focus()
      }
    )
  }

  handleChange = (value) => {
    this.setState({ value })
    if (this.debouncedChange) this.debouncedChange(value)
  }

  handleFocus = () => this.setState({ focused: true })

  handleBlur = () => {
    const { expanded: expandedOverride } = this.props
    const { value } = this.state
    this.setState({ 
      focused: false,
      // Close search input on blue if no value is entered
      expanded: expandedOverride || !!value
    })
  }

  handleClear = () => {
    const { onChange } = this.props
    this.setState({ value: '' })
    if (onChange) onChange('')
  }

  render() {
    const { expanded: currentlyExpanded, focused, value } = this.state
    const {
      style,
      className,
      onChange,
      onExpand,
      placeholder = 'Search...',
      disabled,
      id,
      label,
      expanded = currentlyExpanded,
      ...otherProps
    } = this.props

    const icon = (
      <Magnify
        onClick={this.toggleExpanded}
        style={iconAltStyling}
        size={fontSizes.large}
        color={value ? colors.primary.default : colors.grayscale.default}
      />
    )

    return (
      <Container expanded={expanded} {...otherProps}>
        {id && (
          <VisuallyHidden>
            <label htmlFor={id}>{label || 'Search'}</label>
          </VisuallyHidden>
        )}
        <Input
          style={style}
          className={className}
          disabled={disabled}
          placeholder={placeholder}
          expanded={expanded}
          ref={this.input}
          id={id}
          onChange={onChange && (({ target }) => this.handleChange(target.value))}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          value={value}
        />
        {value && !focused && (
          <Box
            display='flex'
            alignItems='center'
            position='absolute'
            borderRadius={radii.full}
            bg={colors.grayscale.xlight}
            pl='1em'
            ml='0.3em'
          >
            <Text onClick={() => this.input?.current?.focus()}>
              {value}
            </Text>
            <IconButton 
              variant='clear'
              size='xsmall'
              icon='Close'
              ml='0.5em'
              label='Clear'
              onClick={this.handleClear}
            />
          </Box>
        )}
        {expanded
          ? icon
          : (
            <Tooltip
              text="Search"
              style={{ width: '6em' }}
            >
              {icon}
            </Tooltip>
          )}
      </Container>
    )
  }
}

export default SearchInput
