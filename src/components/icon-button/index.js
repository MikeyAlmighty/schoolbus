import React, { PureComponent } from 'react'
import theme from '../../config/theme'
import { Button, Badge } from './styles'
import PropTypes from 'prop-types'

import Plus from '@lessondesk/material-icons/dist/Plus'
import FilterVariant from '@lessondesk/material-icons/dist/FilterVariant'
import Translate from '@lessondesk/material-icons/dist/Translate'
import Download from '@lessondesk/material-icons/dist/Download'
import ArrowLeft from '@lessondesk/material-icons/dist/ArrowLeft'
import Magnify from '@lessondesk/material-icons/dist/Magnify'
import Pencil from '@lessondesk/material-icons/dist/Pencil'
import Fullscreen from '@lessondesk/material-icons/dist/Fullscreen'
import Delete from '@lessondesk/material-icons/dist/Delete'
import Tune from '@lessondesk/material-icons/dist/Tune'
import DotsVertical from '@lessondesk/material-icons/dist/DotsVertical'
import Phone from '@lessondesk/material-icons/dist/Phone'
import Email from '@lessondesk/material-icons/dist/Email'
import Close from '@lessondesk/material-icons/dist/Close'

class IconButton extends PureComponent {

  static propTypes = {
    onClick: PropTypes.func,
    icon: PropTypes.string,
    size: PropTypes.string,
    color: PropTypes.string,
    iconColor: PropTypes.string,
    children: PropTypes.node,
    badge: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    noShadow: PropTypes.bool
  }

  static defaultProps = {
    icon: 'add',
    size: 'medium',
    color: 'primary',
    noShadow: false,
    onClick: () => {}
  }

  iconTypes = {
    add: Plus,
    filter: FilterVariant,
    translate: Translate,
    download: Download,
    back: ArrowLeft,
    search: Magnify,
    edit: Pencil,
    fullscreen: Fullscreen,
    delete: Delete,
    tune: Tune,
    overflow: DotsVertical,
    phone: Phone,
    email: Email,
    close: Close
  }

  iconSizes = {
    xsmall: 18,
    small: 20,
    medium: 22,
    large: 24,
    xlarge: 26
  }

  getIconColor = () => {
    const { iconColor, color } = this.props
    const { colors } = theme

    if (iconColor) {
      if (Object.keys(colors).includes(iconColor)) {
        const selectedColor = colors[iconColor]
        return Array.isArray(selectedColor) ? selectedColor[2] : selectedColor
      }
      return iconColor
    }

    return color === 'primary' ? colors.white : colors.gray.xdark
  }

  renderIcon = () => {
    const { iconStyle, size, icon } = this.props
    const IconComponent = this.iconTypes[icon]

    const iconProps = {
      color: this.getIconColor(),
      size: this.iconSizes[size]
    }

    return IconComponent
      ? <IconComponent {...iconProps} style={iconStyle} />
      : null
  }

  render() {
    const {
      badge,
      children,
      ...otherProps
    } = this.props

    return (
      <Button
        badge={badge}
        {...otherProps}
      >
        {badge > 0 && <Badge>{badge}</Badge>}
        {children || this.renderIcon()}
      </Button>
    )
  }
}

export default IconButton
