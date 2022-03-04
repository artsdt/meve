import Ripple from '../ripple'
import FormItem from '../form-item'
import { createNamespace } from '../utils/create'
import { props } from './props'
import { createChildrenMixin } from '../utils/mixins/relation'

import '../styles/common.less'
import '../ripple/ripple.less'
import '../form-details/formDetails.less'
import '../form-item/formItem.less'
import './checkbox.less'

const { createComponent, namespace } = createNamespace('checkbox')

const CheckboxPlugin = createComponent({
  props,

  mixins: [
    createChildrenMixin('checkboxGroup', { parentKey: 'checkboxGroup', childrenKey: 'checkboxes' }),
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

    maximum() {
      return this.checkboxGroup ? this.checkboxGroup.checkedCount >= Number(this.checkboxGroup.max) : false
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
      this.$refs.formItem.validate()
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
      this.localValue = changedValue

      this.$emit('input', changedValue)
      this.$emit('change', changedValue)

      this.nextTickValidateWithTrigger('onChange')

      changedValue === this.checkedValue
        ? this.checkboxGroup?.onChecked(this.checkedValue)
        : this.checkboxGroup?.onUnchecked(this.checkedValue)
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

      if (!this.checked && this.maximum) {
        return
      }

      this.change(this.checked ? uncheckedValue : checkedValue)
    },

    sync(values) {
      this.localValue = values.includes(this.checkedValue) ? this.checkedValue : this.uncheckedValue
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
      checkboxGroup,
      handleErrorMessageChange,
    } = this

    return (
      <FormItem
        checkbox-cover
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
            checkboxGroup?.errorMessage || errorMessage ? namespace('--text-error') : null,
          ]}
        >
          <input
            class={namespace('__input')}
            type="checkbox"
            disabled={form?.disabled || disabled}
            readOnly={form?.readonly || readonly}
            onClick={handleClick}
          />

          <div
            class={[namespace('__checkbox-container'), namespace(`--${size}-checkbox-container`)]}
            v-ripple={{ disabled: !ripple || disabled || readonly || form?.disabled || form?.readonly }}
          >
            <div
              class={[
                namespace('__checkbox'),
                namespace(`--${size}-checkbox`),
                checked ? namespace(`--${size}-svg`) : null,
                checked ? null : namespace(`--border-visible`),
                checked ? namespace('--checked') : null,
                checkboxGroup?.errorMessage || errorMessage
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

export const _CheckboxComponent = CheckboxPlugin

export default CheckboxPlugin
