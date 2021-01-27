import React from 'react'
import PropTypes from 'prop-types'

import Eye from '@lessondesk/material-icons/dist/Eye'
import DotsVertical from '@lessondesk/material-icons/dist/DotsVertical'
import FilterVariant from '@lessondesk/material-icons/dist/FilterVariant'
import Download from '@lessondesk/material-icons/dist/Download'
import Plus from '@lessondesk/material-icons/dist/Plus'
import Close from '@lessondesk/material-icons/dist/Close'
import Link from '@lessondesk/material-icons/dist/Link'
import Pencil from '@lessondesk/material-icons/dist/Pencil'
import Tune from '@lessondesk/material-icons/dist/Tune'
import Delete from '@lessondesk/material-icons/dist/Delete'
import ArrowLeft from '@lessondesk/material-icons/dist/ArrowLeft'
import Phone from '@lessondesk/material-icons/dist/Phone'
import Email from '@lessondesk/material-icons/dist/Email'
import Magnify from '@lessondesk/material-icons/dist/Magnify'
import FormatLineSpacing from '@lessondesk/material-icons/dist/FormatLineSpacing'
import ChevronLeft from '@lessondesk/material-icons/dist/ChevronLeft'
import ChevronRight from '@lessondesk/material-icons/dist/ChevronRight'

import Tooltip from '../tooltip'
import Flex from '../flex'
import { Button, Badge } from './styles'

const ICON_SIZES = {
  xsmall: 18,
  small: 20,
  medium: 22,
  large: 24,
  xlarge: 26,
}

const ICON_MAP = {
  Eye,
  DotsVertical,
  FilterVariant,
  Download,
  Plus,
  Close,
  Link,
  Pencil,
  Tune,
  Delete,
  ArrowLeft,
  Phone,
  Email,
  Magnify,
  FormatLineSpacing,
  ChevronLeft,
  ChevronRight,
}

const ICON_LABEL_MAP = {
  Eye: 'View',
  DotsVertical: 'More options',
  FilterVariant: 'Filter',
  Download: 'Download',
  Plus: 'Add',
  Close: 'Close',
  Pencil: 'Edit',
  Tune: 'Configure',
  Delete: 'Remove',
  ArrowLeft: 'Back',
  Magnify: 'Search',
  FormatLineSpacing: 'Reorder',
  ChevronLeft: 'Previous',
  ChevronRight: 'Next',
}

const IconButton = ({ label, icon, badge, children, size, ...otherProps }) => {
  const Icon = ICON_MAP[icon]
  const labelText = label || ICON_LABEL_MAP[icon]

  return (
    <Button
      alignItems="center"
      justifyContent="center"
      badge={badge}
      size={size}
      {...otherProps}
      aria-label={labelText}
    >
      {badge > 0 && <Badge>{badge}</Badge>}
      {labelText
        ? (
          <Tooltip 
            text={labelText}
            effect='solid'
            place='bottom'
            arrowColor='transparent'
          >
            <Icon size={ICON_SIZES[size]} color='inherit' />
          </Tooltip>
        )
        : children || <Icon size={ICON_SIZES[size]} color='inherit' />}
      
    </Button>
  )
}

IconButton.propTypes = {
  onClick: PropTypes.func,
  icon: PropTypes.string,
  size: PropTypes.string,
  label: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  icon: PropTypes.string,
  children: PropTypes.node,
  badge: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  noShadow: PropTypes.bool,
  ...Flex.propTypes,
}

IconButton.defaultProps = {
  icon: 'Plus',
  size: 'medium',
  label: '',
  color: '',
  iconColor: '',
  noShadow: false,
  iconStyle: {},
}

export default IconButton
