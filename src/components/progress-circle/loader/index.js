import React from 'react'
import ContentLoader from 'react-content-loader'

import theme from '../../../config/theme'

const Loader = ({ showBreakdown, width }) => (
  <ContentLoader
    width={width}
    speed={1}
    viewBox='0 0 200 220'
    backgroundColor={theme.colors.grayscale.xlight}
    foregroundColor={theme.colors.grayscale.xxlight}
  >
    <circle cx='100' cy='90' r='90' />
    {showBreakdown && (
      <>
        <circle cx='15' cy='210' r='8' />
        <rect x='35' y='205' rx='3' ry='3' width='50' height='12' />
        <circle cx='115' cy='210' r='8' />
        <rect x='135' y='205' rx='3' ry='3' width='50' height='12' />
      </>
    )}
  </ContentLoader>
)

export default Loader