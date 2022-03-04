import Icon from '../icon'
import FormItem from '../form-item'
import { createNamespace } from '../utils/create'
import { props } from './props'
import { isEmpty } from '../utils/shared'
import { createChildrenMixin } from '../utils/mixins/relation'

import '../styles/common.less'
import '../icon/icon.less'
import '../form-details/formDetails.less'
import '../form-item/formItem.less'
import './input.less'

const { createComponent, namespace } = createNamespace('input')

let inputId = 0

const InputPlugin = createComponent({
  mixins: [createChildrenMixin('form', { parentKey: 'form', childrenKey: 'formComponents' })],

  props,

  data: () => ({
    id: `m-input-${inputId++}`,
    isFocus: false,
    errorMessage: '',
  }),

  computed: {
    maxlengthText() {
      const { maxlength, value } = this

      if (isEmpty(value)) {
        return `0 / ${maxlength}`
      }

      return `${String(value).length} / ${maxlength}`
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
      this.$refs.formItem.validate()
    },

    // expose
    resetValidation() {
      this.$refs.formItem.resetValidation()
    },

    // expose
    focus() {
      this.$refs.input.focus()
    },

    // expose
    blur() {
      this.$refs.input.blur()
    },

    nextTickValidateWithTrigger(trigger) {
      this.$nextTick(() => {
        this.$refs.formItem?.validateWithTrigger(this.validateTrigger, trigger, this.rules, this.value)
      })
    },

    handleClick(event) {
      if (this.form?.disabled || this.disabled) {
        return
      }

      this.$emit('click', event)
      this.nextTickValidateWithTrigger('onClick')
    },

    handleErrorMessageChange(errorMessage) {
      this.errorMessage = errorMessage
    },

    handleFocus() {
      this.isFocus = true
      this.$emit('focus')
    },

    handleBlur() {
      this.isFocus = false
      this.$emit('blur')
    },

    handleClear() {
      if (this.form?.disabled || this.form?.readonly || this.disabled || this.readonly) {
        return
      }

      this.$emit('input', undefined)
      this.$emit('clear', undefined)
      this.nextTickValidateWithTrigger('onClear')
    },

    handleInput(event) {
      this.$emit('input', event.target.value)
      this.nextTickValidateWithTrigger('onInput')
    },

    handleChange(event) {
      this.$emit('change', event.target.value)
      this.nextTickValidateWithTrigger('onChange')
    },

    renderClearIcon() {
      if (this.clearable) {
        return (
          <Icon
            input-cover
            class={[namespace('__clear-icon'), isEmpty(this.value) ? null : namespace('--clear-icon-visible')]}
            name="close-circle"
            onClick={this.handleClear}
          />
        )
      }
    },

    renderPrependIcon() {
      if (this.hasSlots('prepend-icon')) {
        return this.slots('prepend-icon')
      }
    },

    renderAppendIcon() {
      if (this.hasSlots('append-icon')) {
        return this.slots('append-icon')
      }
    },

    renderMaxlengthText() {
      if (this.maxlength != null) {
        return <div class={namespace('__maxlength')}>{this.maxlengthText}</div>
      }
    },

    renderInput() {
      if (this.textarea) {
        return (
          <textarea
            id={this.id}
            ref="input"
            autoComplete="off"
            class={[namespace('__textarea'), namespace(`--${this.size}-textarea`)]}
            rows={this.rows}
            maxLength={this.maxlength}
            placeholder={this.placeholder}
            disabled={this.form?.disabled || this.disabled}
            readOnly={this.form?.readonly || this.readonly}
            value={this.value}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onInput={this.handleInput}
            onChange={this.handleChange}
          />
        )
      }
      return (
        <input
          ref="input"
          id={this.id}
          autoComplete="off"
          class={namespace('__input')}
          type={this.type}
          maxLength={this.maxlength}
          placeholder={this.placeholder}
          disabled={this.form?.disabled || this.disabled}
          readOnly={this.form?.readonly || this.readonly}
          value={this.value}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onInput={this.handleInput}
          onChange={this.handleChange}
        />
      )
    },
  },

  render() {
    const { isFocus, disabled, textarea, resize, value, rules, label, errorMessage, form, size } = this

    return (
      <FormItem
        ref="formItem"
        label={label}
        value={value}
        rules={rules}
        {...{
          on: {
            'error-message-change': this.handleErrorMessageChange,
          },
        }}
      >
        <div
          class={[
            namespace(),
            'm--box',
            namespace(`--${size}`),
            isFocus ? namespace('--outline') : null,
            form?.disabled || disabled ? namespace('--disabled') : null,
            textarea && resize && !disabled ? namespace('--resizeable') : null,
            errorMessage ? namespace('--validation-error-border') : null,
          ]}
          style={{ height: textarea ? 'auto' : undefined }}
          onClick={this.handleClick}
        >
          {this.renderPrependIcon()}
          {this.renderInput()}
          {this.renderClearIcon()}
          {this.renderAppendIcon()}
          {this.renderMaxlengthText()}
        </div>
      </FormItem>
    )
  },
})

export const _InputComponent = InputPlugin

export default InputPlugin
