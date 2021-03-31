import React, { useMemo } from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'

import Popup from '../popup'
import { Button } from './styles'

const OverflowMenu = ({ position, options, NextLink, ...otherProps }) => {
  const filteredOptions = useMemo(
    () => options.filter(value => Boolean(value)).flat(),
    [options]
  )

  return (
    <Popup
      closeOnSelect
      contentStyle={{ padding: '.5em 0' }}
      xOffset="-20px"
      yOffset="0"
      {...otherProps}
    >
      {filteredOptions.map(({ name, onClick, href, ...otherProps }) =>
        href ? (
          <Link key={name} href={href} {...otherProps}>
            <Button>{name}</Button>
          </Link>
        ) : (
          <Button key={name} onClick={onClick} {...otherProps}>
            {name}
          </Button>
        )
      )}
    </Popup>
  )
}

OverflowMenu.displayName = 'OverflowMenu'

OverflowMenu.defaultProps = {
  position: 'bottomLeft',
  options: [],
}

OverflowMenu.propTypes = {
  ...Popup.propTypes,
  options: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool
  ])),
}

export default React.memo(OverflowMenu)
