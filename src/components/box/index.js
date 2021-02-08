import styled from 'styled-components'
import { space, color, layout, flexbox, border, borderStyle, position } from 'styled-system'
import PropTypes from 'prop-types'
import propTypes from '@styled-system/prop-types'
import theme from '../../config/theme'

const Box = styled.div`
  ${space}
  ${layout}
  ${color}
  ${flexbox}
  ${border}
  ${borderStyle}
  ${position}
  ${({ lineHeight }) => lineHeight && `line-height: ${lineHeight}`};
  ${({ theme, elevation }) =>
    elevation !== undefined &&
    `
    box-shadow: ${theme.elevations?.[elevation] || elevation};
  `};
  ${({ theme, radius }) =>
    radius &&
    `
    border-radius: ${theme.radii[radius] || radius};
  `};
`

Box.displayName = 'Box'

Box.defaultProps = {
  theme,
}

Box.propTypes = {
  ...propTypes.space,
  ...propTypes.layout,
  ...propTypes.color,
  ...propTypes.flexbox,
  ...propTypes.border,
  ...propTypes.position,
  radius: PropTypes.string,
  elevation: PropTypes.string,
}

export default Box
