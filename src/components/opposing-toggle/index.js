import React from 'react'
import { connect } from 'formik'

import WithoutFormik from './without-formik'

const OpposingToggle = (props) => <WithoutFormik {...props} />

export default connect(OpposingToggle)