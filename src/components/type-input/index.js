import React from 'react'
import { connect } from 'formik'

import WithoutFormik from './without-formik'

const TypeInput = (props) => <WithoutFormik {...props} />

export default connect(TypeInput)