import Ripple from '../ripple'
import FormItem from '../form-item'
import Icon from '../icon'
import { createNamespace } from '../utils/create'
import { props } from './props'
import { createChildrenMixin } from '../utils/mixins/relation'
import { toNumber } from '../utils/shared'

import '../styles/common.less'
import '../ripple/ripple.less'
import '../form-details/formDetails.less'
import '../form-item/formItem.less'
import '../icon/icon.less'
import './rate.less'

const { createComponent, namespace } = createNamespace('rate')

const RatePlugin = createComponent({
  props,

  mixins: [createChildrenMixin('form', { parentKey: 'form', childrenKey: 'formComponents' })],

  directives: { Ripple },

  watch: {
    value: {
      handler(newValue) {
        this.activeRate = toNumber(newValue)
      },
      immediate: true,
    },
  },

  data: () => ({
    errorMessage: '',
    activeRate: 0,
  }),

  methods: {
    // expose
    reset() {
      this.$emit('input', 0)
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

    handleErrorMessageChange(errorMessage) {
      this.errorMessage = errorMessage
    },

    handleMouseenter(rate) {
      if (this.form?.disabled || this.disabled || this.form?.readonly || this.readonly) {
        return
      }

      this.activeRate = rate
    },

    handleMouseleave() {
      this.activeRate = this.value
    },

    handleClick(rate) {
      if (this.form?.disabled || this.disabled) {
        return
      }

      this.$emit('click', rate)

      if (this.form?.readonly || this.readonly) {
        return
      }

      this.$emit('input', rate)
      this.$emit('change', rate)

      this.nextTickValidateWithTrigger('onChange')
    },

    renderRate(rate, position) {
      return (
        <div
          class={[
            namespace('__rate-item'),
            this.half ? namespace('--half') : null,
            this.half ? namespace(`--${this.size}-half-rate`) : namespace(`--${this.size}-rate`),
          ]}
          onMouseenter={() => this.handleMouseenter(rate)}
          onClick={() => this.handleClick(rate)}
        >
          <Icon
            class={[
              namespace('__rate'),
              namespace(`--${position}-rate`),
              this.activeRate >= rate ? namespace('--active') : null,
              this.form?.disabled || this.disabled ? namespace('--disabled') : null,
              this.activeRate >= rate && this.errorMessage ? namespace('--error') : null,
            ]}
            style={{ color: this.activeRate >= rate ? this.color : undefined }}
            rate-cover
            name={this.icon}
          />
        </div>
      )
    },

    renderRates() {
      const rates = Array.from({ length: this.count }).map((_, index) => {
        const rate = index + (this.half ? 0.5 : 1)

        return (
          <div
            class={namespace('__rate-wrapper')}
            style={{ color: this.color }}
            v-ripple={{
              disabled: !this.ripple || this.form?.disabled || this.form?.readonly || this.disabled || this.readonly,
            }}
          >
            {this.renderRate(rate, 'left')}
            {this.half && this.renderRate(rate + 0.5, 'right')}
          </div>
        )
      })

      return (
        <div class={namespace('__rates')} onMouseleave={this.handleMouseleave}>
          {rates}
        </div>
      )
    },
  },

  render() {
    const { label, value, rules, handleErrorMessageChange } = this

    return (
      <FormItem
        rate-cover
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
        {this.renderRates()}
      </FormItem>
    )
  },
})

export const _RateComponent = RatePlugin

export default RatePlugin
