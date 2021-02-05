import ContentLoader from 'react-content-loader'
import { theme } from '@lessondesk/schoolbus'

const Loader = ({ style, noPadding, ...rest }) => {
  const containerStyles = {
    padding: noPadding ? 0 : '2em 1em',
    width: '100%',
    ...style
  }

  return (
    <div style={containerStyles} {...rest}>
      <ContentLoader
        height={60}
        width='100%'
        speed={1}
        viewBox='0 0 1000 60'
        backgroundColor={theme.colors.grayscale.xlight}
        foregroundColor={theme.colors.grayscale.xxlight}
      >
        <rect x='0' y='0' rx='3' ry='3' width='1000' height='10' />
        <rect x='0' y='20' rx='3' ry='3' width='1000' height='10' />
        <rect x='0' y='40' rx='3' ry='3' width='1000' height='10' />
      </ContentLoader>
    </div>
  )
}

Loader.defaultProps = {
  style: {}
}

export default Loader
