import React from 'react'
import { connect } from 'formik'

import WithoutFormik from './without-formik'

const DateInput = (props) => <WithoutFormik {...props} />

export default connect(DateInput)