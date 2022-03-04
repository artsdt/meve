import { createNamespace } from '../utils/create'
import { CreateElement } from 'vue'
import { props, FormDetailsProps } from './props'

import '../styles/common.less'
import './formDetails.less'

const { createComponent, namespace } = createNamespace('form-details')

function FormDetails(h: CreateElement, props: FormDetailsProps) {
  const { errorMessage } = props

  return <transition name={namespace()}>{errorMessage && <div class={namespace()}>{errorMessage}</div>}</transition>
}

FormDetails.props = props

const FormDetailsPlugin = createComponent<FormDetailsProps, {}, {}>(FormDetails)

export const _FormDetailsComponent = FormDetailsPlugin

export default FormDetailsPlugin
