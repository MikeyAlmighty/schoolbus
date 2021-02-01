import React, { Component } from 'react'
import toast from 'just-toasty'
import { connect } from 'formik'
import Translate from '@lessondesk/material-icons/dist/Translate'
import PropTypes from 'prop-types'

import InputWrapper from '../input-wrapper'
import TranslateModal from '../translate-modal'
import Modal from '../modal'
import createDefaultInputProps from '../../utils/create-input-defaults'
import { fontSizes, colors } from '../../config/theme'
import defaultPropTypes from '../../config/input-prop-types'
import ErrorIconWrapper from '../error-icon-wrapper'
import { TranslateIconContainer, TranslateInput } from './styles'

class TranslationInput extends Component {
  static defaultProps = {
    type: 'lesson',
    onChange: () => {},
    onBlur: () => {},
  }

  static propTypes = {
    ...defaultPropTypes,
    languages: PropTypes.arrayOf(PropTypes.object).isRequired,
    formik: PropTypes.object.isRequired,
    onLanguagesChange: PropTypes.func,
  }

  state = {
    showModal: false,
  }

  componentDidMount() {
    const { formik, name } = this.props
    const hasFormik = Object.keys(formik).length > 0

    if (!hasFormik) {
      throw Error('TranslationInput must be wrapped in a Formik provider instance')
    }

    if (
      !formik.values[name] ||
      !formik.values[name][0] ||
      formik.values[name][0].value === undefined
    ) {
      throw Error(`TranslationInput requires a default language to be set e.g.`)
    }
  }

  toggleModal = () => this.setState({ showModal: !this.state.showModal })

  handleTranslationsSubmit = languageSets => {
    const { formik, name } = this.props
    const hasEmptySet = languageSets.some(languageSet => !languageSet.value)

    if (hasEmptySet) {
      toast('Oops! Please add all required translations.')
      return
    }

    formik.setFieldValue(name, languageSets)
    this.toggleModal()
  }

  updateDefaultValue = ({ target }) => {
    const { value } = target
    const { formik, name } = this.props
    const { values, setFieldValue } = formik

    const prevValues = values[name]
    const [defaultValue, ...rest] = prevValues
    const updatedDefault = { ...defaultValue, value }

    return setFieldValue(name, [updatedDefault, ...rest])
  }

  getAlertMessage = (message = '') => {
    if (Array.isArray(message)) {
      const alertMessageObj = message.find(m => m && !!m.value)
      return alertMessageObj && alertMessageObj.value
    }

    return message
  }

  render() {
    const { showModal } = this.state

    const {
      inputProps,
      type,
      formik,
      value,
      onBlur,
      onChange,
      placeholder,
      onLanguagesChange,
      alertText: alertTextOverride,
      disabled,
      languages,
      ...otherProps
    } = this.props

    const { name, id = name, label } = otherProps

    const { alertText, hasFormik, ...inputDefaults } = createDefaultInputProps({
      alertText: alertTextOverride,
      value,
      onBlur,
      onChange,
      name,
      formik,
    })

    const val =
      formik.values[name] && formik.values[name][0] && formik.values[name][0].value
        ? formik.values[name][0].value
        : ''

    const alertMessage = this.getAlertMessage(alertText)
    const hasError = !!alertMessage

    return (
      <InputWrapper alertText={alertMessage} {...otherProps}>
        <ErrorIconWrapper alertText={alertMessage} onClick={this.toggleModal}>
          <TranslateInput
            {...inputDefaults}
            id={id}
            value={val}
            onChange={this.updateDefaultValue}
            name={name}
            placeholder={placeholder || label}
            disabled={disabled}
            hasError={hasError}
            {...inputProps}
          />

          <TranslateIconContainer onClick={this.toggleModal} hidden={hasError}>
            <Translate size={fontSizes.normal} color={colors.grayscale.default} />
          </TranslateIconContainer>

          <Modal isOpen={showModal} onClose={this.toggleModal} hideCloseButton>
            <TranslateModal
              values={formik.values[name]}
              placeholder={placeholder || label}
              onClose={this.toggleModal}
              onSubmit={this.handleTranslationsSubmit}
              onLanguagesChange={onLanguagesChange}
              type={type}
              disabled={disabled}
              languages={languages}
            />
          </Modal>
        </ErrorIconWrapper>
      </InputWrapper>
    )
  }
}

export default connect(TranslationInput)
