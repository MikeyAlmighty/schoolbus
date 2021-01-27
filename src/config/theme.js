const addAliases = (arr, aliases) =>
  aliases.forEach((key, i) =>
    Object.defineProperty(arr, key, {
      enumerable: false,
      get() {
        return this[i]
      },
    })
  )

export const space = [0, '0.25em', '0.5em', '1em', '2em', '4em', '8em', '16em', '32em']

export const fontSizes = [
  '0.5em', // 8px
  '0.625em', // 10px
  '0.75em', // 12px
  '0.875em', // 14px
  '1em', // 16px
  '1.25em', // 20px
  '1.5em', // 24px
  '2em', // 32px
  '3em', // 48px
  '4em', // 64px
  '5em', // 80px
]

export const fontSizeAliases = [
  'xxxsmall',
  'xxsmall',
  'xsmall',
  'small',
  'medium',
  'large',
  'xlarge',
  'xxlarge',
]
addAliases(fontSizes, fontSizeAliases)

export const colors = {
  white: '#FFF',
  black: '#000',
  transparent: 'transparent',
  grayscale: ['#F3F3F3', '#E3E3E3', '#BEBEBE', '#909090', '#515355'],
  green: ['#F9FFF4', '#85E2A2', '#37B049', '#65D287'],
  primary: ['#FFA400', 'rgb(255, 164, 0, 0.1)', '#FFB900'],
  answers: ['#F15152', '#3480EE', '#1E9E2F', '#FFA400'],
  statusFill: ['#6DC65D', '#F9FFF4', '#FB7979', '#FFF5F5', '#F15252'],
  statusText: ['#8AB657', '#C86262'],
  content: {
    roles: ['#FFB97D', 'rgb(255, 185, 125, 0.2)'],
    onboarding: ['#D380DB', 'rgb(211, 128, 219, 0.2)'],
    formal: ['#85E2A2', 'rgb(133, 226, 162, 0.2)'],
    surveys: ['#9AA0F9', 'rgb(154, 160, 249, 0.2)'],
    distributions: ['#F49B9B', 'rgb(244, 155, 155, 0.2)'],
  }
}

export const primaryAliases = ['default', 'light', 'hover']
addAliases(colors.primary, primaryAliases)
export const contentAliases = ['default', 'light']
Object.keys(colors.content).forEach(key => {
  addAliases(colors.content[key], contentAliases)
})

export const statusTextAliases = ['success', 'error']
addAliases(colors.statusText, statusTextAliases)

export const statusFillAliases = ['success', 'successLight', 'error', 'errorLight', 'danger']
addAliases(colors.statusFill, statusFillAliases)

const grayColorAliases = [
  'xxlight',
  'xlight',
  'light',
  'default',
  'dark',
]
addAliases(colors.grayscale, grayColorAliases)

const fallbackFontStack = `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif`
export const fonts = ['Montserrat', 'Open Sans'].map(font => `${font}, ${fallbackFontStack}`)
const fontsAliases = ['Montserrat', 'OpenSans']
addAliases(fonts, fontsAliases)

export const fontWeights = [100, 200, 300, 400, 500, 600, 700]
export const fontWeightsAliases = [
  'hairline',
  'thin',
  'light',
  'medium',
  'semi',
  'bold',
  'extrabold',
]
addAliases(fontWeights, fontWeightsAliases)

export const lineHeights = [1.0, 1.25, 1.375, 1.5, 1.625, 2.0]
export const lineHeightsAliases = ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose']
addAliases(lineHeights, lineHeightsAliases)

export const letterSpacings = ['-0.05em', '-0.025em', '0', '0.025em', '0.05em', '0.1em']
export const letterSpacingsAliases = ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest']
addAliases(letterSpacings, letterSpacingsAliases)

export const elevations = [
  `0 1px 3px 0 rgba(0, 0, 0, 0.1)`,
  `0 0 10px 0 rgba(0, 0, 0, 0.05)`,
  `1px 1px 10px 0 rgba(0,0,0,0.2);`,
  `0 0 10px 0 rgba(0,0,0,0.1);`,
  `0 0 20px 0 rgba(0,0,0,0.2);`,
  '0 0 20px 0 rgba(0,0,0,0.2);',
  '0 0 20px 0 rgba(255,164,0,0.35);',
  '0 8px 24px 0 rgba(0,0,0,0.2);'
]
export const elevationAliases = [
  'titleBar',
  'itemContainer',
  'cardContainer',
  'toggle',
  'menu',
  'hover',
  'selected',
  'modal'
]
addAliases(elevations, elevationAliases)

export const radii = [0, '2px', '5px', '10px', '15px', '20px', '30px', '9999px']
export const radiiAliases = [
  'none',
  'xsmall',
  'small',
  'medium',
  'large',
  'xlarge',
  'xxlarge',
  'full',
]
addAliases(radii, radiiAliases)

export const borderStyles = [
  `solid 2px ${colors.primary.default}`,
  `solid 1px ${colors.statusFill.danger}`,
  `solid 1px ${colors.grayscale.xlight}`,
  `solid 1px ${colors.grayscale.light}`,
  `solid 1px ${colors.grayscale.default}`,
]
export const borderAliases = ['primary', 'danger', 'light', 'default', 'dark']
addAliases(borderStyles, borderAliases)

export const zIndices = [1, 2, 3, 4, 5]

export const breakpoints = ['320px', '640px', '832px', '1024px', '1280px']
export const mediaQueries = breakpoints.map(val => `@media screen and (min-width: ${val})`)
export const mediaQueriesAliases = ['xsmall', 'small', 'medium', 'large', 'xlarge']
addAliases(mediaQueries, mediaQueriesAliases)
addAliases(breakpoints, mediaQueriesAliases)

const buttons = {
  primary: {
    color: colors.white,
    backgroundColor: colors.primary.default,
    boxShadow: elevations.cardContainer,
    fontWeight: fontWeights[5],
  },
  secondary: {
    color: colors.white,
    backgroundColor: colors.grayscale.xlight,
    boxShadow: elevations.cardContainer,
    fontWeight: fontWeights[5],
  },
  tertiary: {
    color: colors.grayscale.default,
    backgroundColor: colors.white,
    boxShadow: elevations.cardContainer,
    fontWeight: fontWeights[5],
  },
  minimal: {
    color: colors.primary.default,
    backgroundColor: colors.transparent,
    fontWeight: fontWeights[5],
  },
  danger: {
    color: colors.white,
    backgroundColor: colors.statusFill.danger,
    boxShadow: elevations.cardContainer,
    fontWeight: fontWeights[5],
  },
}

const theme = {
  space,
  fontSizes,
  colors,
  fonts,
  fontWeights,
  lineHeights,
  letterSpacings,
  elevations,
  radii,
  zIndices,
  breakpoints,
  mediaQueries,
  buttons,
  borderStyles
}

export default theme
