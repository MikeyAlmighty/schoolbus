import styled from 'styled-components'
import PropTypes from 'prop-types'
import propTypes from '@styled-system/prop-types'

import {
  space,
  layout,
  color,
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
  borderStyle
} from 'styled-system'

import theme from '../../config/theme'
import { mapProps } from '../../utils/map-props'

const Flex = mapProps(({ wrap, align, justify, ...otherProps }) => ({
  flexWrap: wrap ? 'wrap' : 'nowrap',
  alignItems: align,
  justifyContent: justify,
  ...otherProps,
}))(styled.div`
  display: flex;
  ${space}
  ${layout}
  ${color}
  ${alignItems}
  ${justifyContent}
  ${flexDirection}
  ${flexWrap}
  ${borderStyle}
`)

Flex.defaultProps = {
  theme,
}

Flex.propTypes = {
  wrap: PropTypes.bool,
  align: PropTypes.string,
  justify: PropTypes.string,
  ...propTypes.space,
  ...propTypes.layout,
  ...propTypes.color,
  ...propTypes.alignItems,
  ...propTypes.justifyContent,
  ...propTypes.flexWrap,
  ...propTypes.flexDirection,
}

Flex.displayName = 'Flex'

export default Flex
