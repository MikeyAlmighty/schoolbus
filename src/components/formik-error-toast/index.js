import React, { useEffect, useRef } from 'react'
import toast from 'just-toasty'
import { useFormikContext } from 'formik'

function usePrevious(value) {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

const FormikErrorToast = ({ fields, errorOverride }) => {
  const context = useFormikContext()
  const { errors, isSubmitting } = context
  const wasSubmitting = usePrevious(isSubmitting)
  useEffect(() => {
    // Check if form has been submitted
    if (!wasSubmitting || isSubmitting === wasSubmitting) return
    const erroredFields = Object.entries(errors).find(([key, value]) => !!value && fields.includes(key))
    const [, error] = erroredFields || []
    if (error) toast(errorOverride || error)
  }, [isSubmitting, errors])
  
  return null
}

export default FormikErrorToast