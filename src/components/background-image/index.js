import styled from 'styled-components'
import PropTypes from 'prop-types'
import propTypes from '@styled-system/prop-types'

import { background, space, layout, flexbox, borderStyle } from 'styled-system'

import theme from '../../config/theme'

const image = ({ source, src }) => `url(${source || src})`

const BackgroundImage = styled.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${image};
  ${space}
  ${background}
  ${layout}
  ${flexbox}
  ${borderStyle}
`

BackgroundImage.defaultProps = {
  theme,
}

BackgroundImage.propTypes = {
  source: PropTypes.string.isRequired,
  ...propTypes.space,
  ...propTypes.background,
  ...propTypes.layout,
  ...propTypes.flexbox,
}

BackgroundImage.displayName = 'BackgroundImage'

export default BackgroundImage
