import React from 'react'
import { connect } from 'formik'

import WithoutFormik from './without-formik'

const Input = (props) => <WithoutFormik {...props} />

export default connect(Input)