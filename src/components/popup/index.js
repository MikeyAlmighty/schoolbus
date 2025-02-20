import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import IconButton from '../icon-button'
import { colors } from '../../config/theme'

import { Trigger, ContentWrapper } from './styles'

class Popup extends PureComponent {
  static defaultProps = {
    position: 'bottomLeft',
    contentStyle: {},
    xOffset: '5px',
    yOffset: '5px',
    arrow: false,
    animate: true
  }

  static propTypes = {
    position: PropTypes.string,
    contentStyle: PropTypes.object,
    xOffset: PropTypes.string,
    yOffset: PropTypes.string,
    array: PropTypes.bool,
    animate: PropTypes.bool,
    onToggle: PropTypes.func,
  }

  state = {
    showDialogue: false,
    renderToBottom: true,
    renderToLeft: true,
    dimensions: {},
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside, false)

    if (this.menu) {
      const { offsetHeight: menuHeight, offsetWidth: menuWidth } = this.menu
      this.setState({ dimensions: { menuHeight, menuWidth } })
    }
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside, false)
  }

  toggleDialogue = showDialogue => {
    const { position, onToggle } = this.props

    if (showDialogue && this.trigger) {
      const { menuHeight, menuWidth } = this.state.dimensions
      const { bottom, right, left, top } = this.trigger.getBoundingClientRect()
      const { innerHeight, innerWidth } = window

      const renderDown = ['bottomLeft', 'bottomRight', 'bottomCenter'].includes(position)
      const renderLeft = ['topLeft', 'bottomLeft', 'leftCenter'].includes(position)

      if (menuHeight && menuWidth) {
        const renderToBottom = (renderDown && innerHeight - bottom > menuHeight) || top < menuHeight
        const renderToLeft = (renderLeft && right > menuWidth) || innerWidth - left < menuWidth
        return this.setState({ renderToBottom, renderToLeft }, () => {
          this.setState({ showDialogue })
        })
      }
    }

    const { showDialogue: currentlyShowing } = this.state
    if (currentlyShowing !== showDialogue && onToggle) onToggle(currentlyShowing)

    this.setState({ showDialogue })
  }

  closePopup = () => this.toggleDialogue(false)

  handleClickOutside = ({ target }) => {
    const isMenu = this.menu && this.menu.contains(target)
    const isTrigger = this.trigger && this.trigger.contains(target)
    if (isMenu || isTrigger) {return}
    this.toggleDialogue(false)
  }

  getElement = child => {
    const { closeOnSelect } = this.props

    const childProps = closeOnSelect
      ? {
        onClick: this.closePopup,
      }
      : {}

    return React.cloneElement(<div>{child}</div>, childProps)
  }

  render() {
    const { showDialogue, renderToBottom, renderToLeft } = this.state
    const {
      children,
      trigger,
      contentStyle,
      xOffset,
      yOffset,
      position,
      arrow,
      animate,
      size,
      contentCss,
      disabled,
      ...otherProps
    } = this.props

    const childrenWithProps = React.Children.map(children, child => this.getElement(child))

    return (
      <>
        <Trigger
          ref={node => (this.trigger = node)}
          onClick={() => !showDialogue && this.toggleDialogue(true)}
          {...otherProps}
        >
          {typeof trigger === 'function'
            ? trigger(showDialogue)
            : trigger || (
              <IconButton
                label=''
                disabled={disabled}
                icon='DotsVertical'
                variant='clear'
                color={showDialogue ? colors.primary.default : colors.grayscale.default}
                size={size}
              />
            )}

          <ContentWrapper
            ref={node => (this.menu = node)}
            showDialogue={showDialogue}
            renderToBottom={renderToBottom}
            renderToLeft={renderToLeft}
            xOffset={xOffset}
            yOffset={yOffset}
            style={contentStyle}
            contentCss={contentCss}
            position={position}
            animate={animate}
            arrow={arrow}
          >
            {typeof children === 'function' ? children(this.closePopup) : childrenWithProps}
          </ContentWrapper>
        </Trigger>
      </>
    )
  }
}

export default Popup
