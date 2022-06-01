import Ripple from '../ripple'
import FormItem from '../form-item'
import { createNamespace } from '../utils/create'
import { props } from './props'
import { createChildrenMixin } from '../utils/mixins/relation'

import '../styles/common.less'
import '../ripple/ripple.less'
import '../form-details/formDetails.less'
import '../form-item/formItem.less'
import './radio.less'

const { createComponent, namespace } = createNamespace('radio')

const RadioPlugin = createComponent({
  props,

  mixins: [
    createChildrenMixin('radioGroup', { parentKey: 'radioGroup', childrenKey: 'radios' }),
    createChildrenMixin('form', { parentKey: 'form', childrenKey: 'formComponents' }),
  ],

  directives: { Ripple },

  data: () => ({
    localValue: false,
    errorMessage: '',
  }),

  computed: {
    checked() {
      return this.localValue === this.checkedValue
    },
  },

  watch: {
    value: {
      handler(newValue) {
        this.localValue = newValue
      },
      immediate: true,
    },
  },

  methods: {
    // expose
    reset() {
      this.$emit('input', this.uncheckedValue)
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

    // expose
    toggle(changedValue) {
      const { uncheckedValue, checkedValue } = this

      const shouldReverse = ![uncheckedValue, checkedValue].includes(changedValue)
      if (shouldReverse) {
        changedValue = this.checked ? uncheckedValue : checkedValue
      }

      this.change(changedValue)
    },

    nextTickValidateWithTrigger(trigger) {
      this.$nextTick(() => {
        this.$refs.formItem?.validateWithTrigger(this.validateTrigger, trigger, this.rules, this.value)
      })
    },

    change(changedValue) {
      if (this.radioGroup && this.localValue === this.checkedValue) {
        return
      }

      this.localValue = changedValue

      this.$emit('input', changedValue)
      this.$emit('change', changedValue)
      this.radioGroup?.onToggle(this.checkedValue)

      this.nextTickValidateWithTrigger('onChange')
    },

    handleClick(event) {
      const { disabled, readonly, uncheckedValue, checkedValue } = this

      if (this.form?.disabled || disabled) {
        return
      }

      this.$emit('click', event)
      this.nextTickValidateWithTrigger('onClick')

      if (this.form?.readonly || readonly) {
        return
      }

      this.change(this.checked ? uncheckedValue : checkedValue)
    },

    sync(value) {
      this.localValue = value === this.checkedValue ? this.checkedValue : this.uncheckedValue
    },

    handleErrorMessageChange(errorMessage) {
      this.errorMessage = errorMessage
    },
  },

  render() {
    const {
      label,
      value,
      rules,
      checked,
      ripple,
      size,
      handleClick,
      disabled,
      readonly,
      form,
      errorMessage,
      radioGroup,
      handleErrorMessageChange,
    } = this

    return (
      <FormItem
        radio-cover
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
        <label
          class={[
            namespace(),
            'm--box',
            namespace(`--${size}`),
            form?.disabled || disabled ? namespace('--text-disabled') : null,
            radioGroup?.errorMessage || errorMessage ? namespace('--text-error') : null,
          ]}
        >
          <input
            class={namespace('__input')}
            type="radio"
            disabled={form?.disabled || disabled}
            readOnly={form?.readonly || readonly}
            onClick={handleClick}
          />

          <div
            class={[namespace('__radio-container'), namespace(`--${size}-radio-container`)]}
            v-ripple={{ disabled: !ripple || disabled || readonly || form?.disabled || form?.readonly }}
          >
            <div
              class={[
                namespace('__radio'),
                namespace(`--${size}-radio`),
                checked ? namespace(`--${size}-svg`) : null,
                checked ? null : namespace(`--border-visible`),
                checked ? namespace('--checked') : null,
                radioGroup?.errorMessage || errorMessage
                  ? checked
                    ? namespace('--background-error')
                    : namespace('--border-error')
                  : null,
                form?.disabled || disabled ? namespace('--disabled') : null,
              ]}
            ></div>
          </div>

          <div class={namespace('__label')}>{this.slots()}</div>
        </label>
      </FormItem>
    )
  },
})

export const _RadioComponent = RadioPlugin

export default RadioPlugin
