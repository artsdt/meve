import FormItem from '../form-item'
import Space from '../space'
import { createNamespace } from '../utils/create'
import { props } from './props'
import { createChildrenMixin, createParentMixin } from '../utils/mixins/relation'

import '../styles/common.less'
import '../form-details/formDetails.less'
import '../form-item/formItem.less'
import '../space/space.less'

const { createComponent, namespace } = createNamespace('radio-group')

const directionTransformer = {
  horizontal: 'row',
  vertical: 'column',
}

const RadioGroupPlugin = createComponent({
  props,

  mixins: [
    createParentMixin('radioGroup', { childrenKey: 'radios' }),
    createChildrenMixin('form', { parentKey: 'form', childrenKey: 'formComponents' }),
  ],

  data: () => ({
    errorMessage: '',
  }),

  watch: {
    value() {
      this.syncRadios()
    },

    radios() {
      this.syncRadios()
    },
  },

  methods: {
    // expose
    reset() {
      this.$emit('input', undefined)
      this.resetValidation()
    },

    // expose
    validate() {
      return this.$refs.formItem.validate()
    },

    // expose
    resetValidation() {
      this.$refs.formItem.resetValidation()
    },

    nextTickValidateWithTrigger(trigger) {
      this.$nextTick(() => {
        this.$refs.formItem?.validateWithTrigger(this.validateTrigger, trigger, this.rules, this.value)
      })
    },

    syncRadios() {
      this.radios.forEach(({ sync }) => sync(this.value))
    },

    onToggle(changedValue) {
      this.$emit('input', changedValue)
      this.$emit('change', changedValue)

      this.nextTickValidateWithTrigger('onChange')
    },

    handleErrorMessageChange(errorMessage) {
      this.errorMessage = errorMessage
    },
  },

  render() {
    const { label, value, rules, direction, handleErrorMessageChange } = this

    return (
      <FormItem
        radio-group-cover
        ref="formItem"
        label={label}
        value={value}
        rules={rules}
        {...{
          on: {
            'error-message-change': handleErrorMessageChange,
          },
        }}
      >
        <Space class={namespace()} radio-group-cover direction={directionTransformer[direction]}>
          {this.slots()}
        </Space>
      </FormItem>
    )
  },
})

export const _RadioGroupComponent = RadioGroupPlugin

export default RadioGroupPlugin
