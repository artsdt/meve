import FormDetails from '../form-details'
import { createNamespace } from '../utils/create'
import { props } from './props'
import { ValidationMixin } from '../utils/mixins/validation'
import { createChildrenMixin } from '../utils/mixins/relation'

import '../styles/common.less'
import '../form-details/formDetails.less'
import './formItem.less'

const { createComponent, namespace } = createNamespace('form-item')

const FormItemPlugin = createComponent({
  mixins: [ValidationMixin, createChildrenMixin('form', { childrenKey: 'formItems' })],

  props,

  watch: {
    errorMessage(errorMessage) {
      this.$emit('error-message-change', errorMessage)
    },
  },

  methods: {
    // expose
    async validate() {
      return this.validateRules(this.rules, this.value)
    },

    renderLabel() {
      if (this.label) {
        return <div class={namespace('__label')}>{this.label}</div>
      }
    },
  },

  render() {
    const { errorMessage } = this

    return (
      <div class={namespace()}>
        {this.renderLabel()}
        {this.slots()}
        <FormDetails errorMessage={errorMessage} />
      </div>
    )
  },
})

export const _FormItemComponent = FormItemPlugin

export default FormItemPlugin
