import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'

import Eye from '@lessondesk/material-icons/dist/Eye'
import DotsVertical from '@lessondesk/material-icons/dist/DotsVertical'
import FilterVariant from '@lessondesk/material-icons/dist/FilterVariant'
import Download from '@lessondesk/material-icons/dist/Download'
import Plus from '@lessondesk/material-icons/dist/Plus'
import Close from '@lessondesk/material-icons/dist/Close'
import LinkIcon from '@lessondesk/material-icons/dist/Link'
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

export const ICON_MAP = {
  Link: LinkIcon,
  Eye,
  DotsVertical,
  FilterVariant,
  Download,
  Plus,
  Close,
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

const IconButton = ({ href, target, label, icon, badge, children, size, ...otherProps }) => {
  const Icon = ICON_MAP[icon]
  if (!Icon) throw Error('Invalid icon')
  const labelText = label === null ? label || ICON_LABEL_MAP[icon] : label
  const opensInNewTab = target === '_blank'

  const button = (
    <Button
      {...otherProps}
      alignItems="center"
      justifyContent="center"
      badge={badge}
      size={size}
      aria-label={labelText}
      target={target}
      {...(href && { as: 'a' })}
    >
      {badge > 0 && <Badge>{badge}</Badge>}
      {labelText
        ? (
          <Tooltip 
            text={labelText}
            arrowColor='transparent'
          >
            {children || <Icon size={ICON_SIZES[size]} color='inherit' />}
          </Tooltip>
        )
        : children || <Icon size={ICON_SIZES[size]} color='inherit' />}
      
    </Button>
  )

  if (!href || opensInNewTab) return button
  return <Link href={href}>{button}</Link>
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
  ...Flex.propTypes,
}

IconButton.defaultProps = {
  icon: 'Plus',
  size: 'medium',
  label: null,
  color: '',
  backgroundColor: '',
  iconStyle: {},
}

export default IconButton
