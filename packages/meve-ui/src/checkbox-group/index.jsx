import FormItem from '../form-item'
import Space from '../space'
import { createNamespace } from '../utils/create'
import { props } from './props'
import { createChildrenMixin, createParentMixin } from '../utils/mixins/relation'
import { uniq } from '../utils/shared'

import '../styles/common.less'
import '../form-details/formDetails.less'
import '../form-item/formItem.less'
import '../space/space.less'

const { createComponent, namespace } = createNamespace('checkbox-group')

const directionTransformer = {
  horizontal: 'row',
  vertical: 'column',
}

const CheckboxGroupPlugin = createComponent({
  props,

  mixins: [
    createParentMixin('checkboxGroup', { childrenKey: 'checkboxes' }),
    createChildrenMixin('form', { parentKey: 'form', childrenKey: 'formComponents' }),
  ],

  data: () => ({
    errorMessage: '',
  }),

  computed: {
    checkedCount() {
      return this.value.length
    },
  },

  watch: {
    value() {
      this.syncCheckboxes()
    },

    checkboxes() {
      this.syncCheckboxes()
    },
  },

  methods: {
    // expose
    reset() {
      this.$emit('input', [])
      this.resetValidation()
    },

    // expose
    validate() {
      this.$refs.formItem.validate()
    },

    // expose
    resetValidation() {
      this.$refs.formItem.resetValidation()
    },

    // expose
    checkAll() {
      const checkedValues = this.checkboxes.map(({ checkedValue }) => checkedValue)
      const value = uniq(checkedValues)

      this.$emit('input', value)

      return value
    },

    // expose
    inverseAll() {
      const checkedValues = this.checkboxes.filter(({ checked }) => !checked).map(({ checkedValue }) => checkedValue)

      const value = uniq(checkedValues)

      this.$emit('input', value)

      return value
    },

    nextTickValidateWithTrigger(trigger) {
      this.$nextTick(() => {
        this.$refs.formItem?.validateWithTrigger(this.validateTrigger, trigger, this.rules, this.value)
      })
    },

    syncCheckboxes() {
      this.checkboxes.forEach(({ sync }) => sync(this.value))
    },

    change(changedValue) {
      this.$emit('input', changedValue)
      this.$emit('change', changedValue)
      this.nextTickValidateWithTrigger('onChange')
    },

    onChecked(changedValue) {
      if (!this.value.includes(changedValue)) {
        this.change([...this.value, changedValue])
      }
    },

    onUnchecked(changedValue) {
      if (!this.value.includes(changedValue)) {
        return
      }

      this.change(this.value.filter((value) => value !== changedValue))
    },

    handleErrorMessageChange(errorMessage) {
      this.errorMessage = errorMessage
    },
  },

  render() {
    const { label, value, rules, direction, handleErrorMessageChange } = this

    return (
      <FormItem
        checkbox-group-cover
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
        <Space class={namespace()} checkbox-group-cover direction={directionTransformer[direction]}>
          {this.slots()}
        </Space>
      </FormItem>
    )
  },
})

export const _CheckboxGroupComponent = CheckboxGroupPlugin

export default CheckboxGroupPlugin
