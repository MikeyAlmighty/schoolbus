import React from 'react'
import { connect } from 'formik'

import WithoutFormik from './without-formik'

const TelInput = (props) => <WithoutFormik {...props} />

export default connect(TelInput)