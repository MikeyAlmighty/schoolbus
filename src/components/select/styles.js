import { elevations, colors, radii, fontSizes, fonts, fontWeights, borderStyles } from '../../config/theme'

const bgColorMap = {
  borderless: colors.transparent,
  compact: colors.transparent,
  light: colors.white,
}

function getDisabledColor(variant) {
  return ['borderless', 'compact'].includes(variant) ? colors.transparent : colors.white
}

function getBorder({ variant, hasShadow, hasError }, state) {
  const { isDisabled, isFocused, menuIsOpen } = state
  if (['borderless', 'compact'].includes(variant) || hasShadow) {
    return 'none'
  }
  if (isDisabled || variant === 'light') return borderStyles.light
  if (isFocused || menuIsOpen) return borderStyles.primary
  if (hasError) return borderStyles.danger
  return 'solid 2px transparent'
}

export const styleOverride = (config) => { 
  const {
    fontSize,
    shape,
    variant,
    hasShadow,
    disabled,
    align,
    singleValueStyles,
    hasError,
  } = config

  return ({
    indicatorSeparator: () => ({
      display: 'none',
    }),
    container: () => ({ width: '100%' }),
    dropdownIndicator: (provided) => ({
      ...provided,
      ...(hasError && { marginRight: '1em' })
    }),
    control: (_, state) => ({
      display: 'flex',
      color: colors.grayscale.xdark,
      backgroundColor: disabled
        ? getDisabledColor(variant)
        : bgColorMap[variant] || colors.grayscale.xxlight,
      border: getBorder(config, state),
      fontFamily: fonts.Montserrat,
      fontSize: fontSize ? fontSizes[fontSize] : fontSizes.small,
      borderRadius: shape === 'rounded' ? radii.full : radii.small,
      boxShadow: hasShadow ? elevations.toggle : 'none',
      padding: variant === 'compact' ? 0 : '0 0.8em',
      overflow: 'hidden',
      width: '100%',
      fontWeight: fontWeights[shape === 'rounded' ? 'semi' : 'normal'],
    }),
    valueContainer: provided => ({
      ...provided,
      justifyContent: `flex-${align === 'left' ? 'start' : 'end'}`,
      ...(variant === 'compact' ? { padding: 0 } : {}),
    }),
    menuList: provided => ({
      ...provided,
      backgroundColor: colors.white,
      borderRadius: 4,
    }),
    placeholder: () => ({
      color: colors.grayscale.light,
    }),
    singleValue: () => ({
      color: colors.grayscale.xdark,
      ...singleValueStyles,
    }),
    indicatorsContainer: (_, state) => ({
      display: state.isDisabled ? 'none' : 'flex',
    }),
    option: (defaultStyles, { isSelected, isFocused }) => {
      let color = colors.white
      if (isFocused) {
        color = colors.grayscale.xxlight
      }
      if (isSelected) {
        color = colors.grayscale.xxlight
      }

      return {
        ...defaultStyles,
        fontSize: fontSizes.small,
        color: colors.grayscale.xdark,
        backgroundColor: color,
        ':active': {
          ...defaultStyles[':active'],
          backgroundColor: colors.grayscale.xlight,
        },
        cursor: 'pointer',
        textAlign: align,
      }
    },
  })
}
