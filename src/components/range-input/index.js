import React from 'react'
import { connect } from 'formik'

import WithoutFormik from './without-formik'

const RangeInput = (props) => <WithoutFormik {...props} />

export default connect(RangeInput)