import React, { useEffect } from 'react'
import toast from 'just-toasty'
import { useFormikContext } from 'formik'

const FormikErrorToast = ({ fields, singleToast }) => {
  const { errors, touched, ...otherProps } = useFormikContext()
  console.log(otherPRops)
  for (let i = 0; i < touched.length; i++) {
    const touchedField = touched[i]
    console.log(touchedfield)
  }
  
  return null
}

export default FormikErrorToast