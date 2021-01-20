import { elevations, colors, radii, fontSizes, fonts, fontWeights } from '../../config/theme'

const bgColorMap = {
  borderless: colors.transparent,
  compact: colors.transparent,
  light: colors.white,
}

function getBackgroundColor(variant) {
  switch (variant) {
    case 'borderless':
      return colors.transparent
    case 'light':
      return colors.white
    default:
      return colors.grayscale.xxlight
  }
}

function getDisabledColor(variant) {
  return ['borderless', 'compact'].includes(variant) ? colors.transparent : colors.white
}

export const styleOverride = ({
  fontSize,
  shape,
  variant,
  hasShadow,
  disabled,
  align,
  singleValueStyles,
}) => ({
  indicatorSeparator: () => ({
    display: 'none',
  }),
  control: (provided, state) => ({
    ...provided,
    color: colors.grayscale.xdark,
    backgroundColor: disabled
      ? getDisabledColor(variant)
      : bgColorMap[variant] || colors.grayscale.xxlight,
    border:
      state.isDisabled && !hasShadow && !['borderless', 'compact'].includes(variant)
        ? `border: 1px solid ${colors.grayscale.xlight}`
        : 'none',
    borderColor: state.isDisabled ? colors.grayscale.xlight : null,
    fontFamily: fonts.Montserrat,
    fontSize: fontSize ? fontSizes[fontSize] : fontSizes.small,
    borderRadius: shape === 'rounded' ? radii.full : radii.small,
    boxShadow: hasShadow ? elevations[4] : 'none',
    padding: variant === 'compact' ? 0 : '0 0.8em',
    overflow: 'hidden',
    width: '100%',
    ...(variant === 'light' && {
      border: `solid 1px ${colors.grayscale.xxlight}`,
    }),
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
  indicatorsContainer: (provided, state) => ({
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
