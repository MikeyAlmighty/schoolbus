import PropTypes from 'prop-types'
import propTypes from '@styled-system/prop-types'

export default {
  formik: PropTypes.object,
  id: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  alertText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  inputStyles: PropTypes.object,
  ...propTypes.layout,
  ...propTypes.space,
}
