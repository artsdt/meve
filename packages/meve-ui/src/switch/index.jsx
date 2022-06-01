import FormItem from '../form-item'
import Ripple from '../ripple'
import Loading from '../loading'
import { createNamespace } from '../utils/create'
import { props } from './props'
import { createChildrenMixin } from '../utils/mixins/relation'

import '../styles/common.less'
import '../form-details/formDetails.less'
import '../form-item/formItem.less'
import '../loading/loading.less'
import './switch.less'

const { createComponent, namespace } = createNamespace('switch')

const SwitchPlugin = createComponent({
  mixins: [createChildrenMixin('form', { parentKey: 'form', childrenKey: 'formComponents' })],

  directives: { Ripple },

  props,

  data: () => ({
    localValue: false,
    errorMessage: '',
  }),

  computed: {
    active() {
      return this.localValue === this.activeValue
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
      this.$emit('input', this.inactiveValue)
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
      const { inactiveValue, activeValue } = this

      const shouldReverse = ![inactiveValue, activeValue].includes(changedValue)
      if (shouldReverse) {
        changedValue = this.active ? inactiveValue : activeValue
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
    },

    handleClick(event) {
      const { disabled, readonly, loading, inactiveValue, activeValue } = this

      if (this.form?.disabled || disabled) {
        return
      }

      this.$emit('click', event)
      this.nextTickValidateWithTrigger('onClick')

      if (this.form?.readonly || readonly || loading) {
        return
      }

      this.change(this.active ? inactiveValue : activeValue)
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
      active,
      loading,
      size,
      ripple,
      form,
      readonly,
      disabled,
      errorMessage,
      handleClick,
      handleErrorMessageChange,
    } = this

    return (
      <FormItem
        switch-cover
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
        <div
          class={[
            namespace(),
            'm--box',
            namespace(`--${size}`),
            active ? namespace('--border-active') : namespace('--border-inactive'),
            form?.disabled || disabled ? namespace('--disabled') : null,
            errorMessage ? namespace('--border-error') : null,
          ]}
          onClick={handleClick}
        >
          <div
            class={[
              namespace('__button'),
              namespace(`--${size}-button`),
              active ? namespace(`--${size}-button-active`) : namespace('--button-inactive'),
              errorMessage ? namespace('--button-error') : null,
            ]}
            v-ripple={{
              disabled: !ripple || form?.disabled || form?.readonly || loading || disabled || readonly,
            }}
          >
            <Loading switch-cover class={[namespace('__loading'), namespace(`--${size}-loading`)]} loading={loading} />
          </div>
        </div>
      </FormItem>
    )
  },
})

export const _SwitchComponent = SwitchPlugin

export default SwitchPlugin
