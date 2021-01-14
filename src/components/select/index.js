import React from 'react'
import { connect } from 'formik'

import WithoutFormik from './without-formik'

const Select = (props) => <WithoutFormik {...props} />

export default connect(Select)