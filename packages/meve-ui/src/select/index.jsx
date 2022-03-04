import Icon from '../icon'
import FormItem from '../form-item'
import Popover from '../popover'
import Scroller from '../scroller'
import Tag from '../tag'
import { KeyboardActiveMixin } from '../utils/mixins/keyboardActive'
import { createNamespace } from '../utils/create'
import { props } from './props'
import { createChildrenMixin, createParentMixin } from '../utils/mixins/relation'
import { isEmpty, removeItem, toggleItem } from '../utils/shared'
import { createLockMixin } from '../context/lock'

import '../styles/common.less'
import '../icon/icon.less'
import '../form-details/formDetails.less'
import '../form-item/formItem.less'
import '../popover/popover.less'
import '../scroller/scroller.less'
import './select.less'

let selectId = 0

const { createComponent, namespace } = createNamespace('select')

const selectSizeToTagSize = {
  normal: 'small',
  small: 'small',
  mini: 'mini',
}

const SelectPlugin = createComponent({
  mixins: [
    KeyboardActiveMixin,
    createLockMixin('locked'),
    createParentMixin('select', { childrenKey: 'options' }),
    createChildrenMixin('form', { parentKey: 'form', childrenKey: 'formComponents' }),
  ],

  props,

  data: () => ({
    id: `m-select-${selectId++}`,
    isFocus: false,
    errorMessage: '',
    // KeyboardActiveMixin
    keyboardActiveIndex: 0,
    keyboardLastIndex: 0,
    keyboardDisabledIndexes: [],
    keyboardDisabled: false,
    locked: false,
  }),

  watch: {
    options() {
      this.keyboardDisabledIndexes = []
      this.keyboardLastIndex = this.options.length ? this.options.length - 1 : 0
      this.resetKeyboardActiveIndex()

      this.options.forEach((option) => {
        option.disabled && this.keyboardDisabledIndexes.push(option.index)
      })

      setTimeout(this.resizeScroller)
    },
  },

  computed: {
    inputLabel() {
      if (this.multiple) {
        return ''
      }

      if (isEmpty(this.value)) {
        return ''
      }

      return this.findLabel(this.value)
    },
  },

  methods: {
    // expose
    reset() {
      this.$emit('input', this.multiple ? [] : undefined)
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
      this.$emit('focus')
      this.open()
    },

    // expose
    blur() {
      this.$emit('blur')
      this.close()
    },

    // expose
    open() {
      const isAllDisabled = this.keyboardDisabledIndexes.length === this.options.length

      if (this.$refs.popover?.show || this.options.length === 0 || isAllDisabled) {
        return
      }

      document.addEventListener('touchstart', this.blur)
      this.isFocus = true
      this.$refs.popover.open()
      this.resetKeyboardActiveIndex()
      setTimeout(this.resizeScroller)
    },

    // expose
    close() {
      if (!this.$refs.popover?.show) {
        return
      }

      this.isFocus = false
      document.removeEventListener('touchstart', this.blur)
      this.$refs.popover.close()
    },

    resetKeyboardActiveIndex() {
      this.keyboardActiveIndex = this.options.findIndex((option) => !option.disabled)
    },

    resizeScroller() {
      if (!this.$refs.popover?.show) {
        return
      }

      this.$refs.scroller.resize()
      this.$refs.scroller.scrollToTop()
    },

    nextTickValidateWithTrigger(trigger) {
      this.$nextTick(() => {
        this.$refs.formItem?.validateWithTrigger(this.validateTrigger, trigger, this.rules, this.value)
      })
    },

    findOption(index) {
      return this.options.find((option) => option.index === index)
    },

    lockOnce() {
      this.locked = true
      requestAnimationFrame(() => {
        this.locked = false
      })
    },

    // implement for KeyboardActiveMixin
    handleKeydownArrow() {
      if (!this.$refs.popover.show) {
        return
      }
      this.lockOnce()

      const optionElement = this.options.find((option) => option.index === this.keyboardActiveIndex)?.$el
      const { offsetTop: optionTop, offsetHeight: optionHeight } = optionElement
      const scrollTop = this.$refs.scroller.getScrollTop()
      const scrollerHeight = this.$refs.scroller.$el.offsetHeight

      if (optionTop < scrollTop) {
        this.$refs.scroller.scrollTo(optionTop)
      }

      if (optionTop + optionHeight > scrollerHeight) {
        this.$refs.scroller.scrollTo(optionTop)
      }
    },

    // implement for KeyboardActiveMixin
    handleKeydownEnter(keyboardActiveIndex) {
      if (!this.$refs.popover.show) {
        return
      }

      this.onOptionSelect(this.findOption(keyboardActiveIndex))
    },

    // implement for KeyboardActiveMixin
    handleKeydownEscape() {
      if (!this.$refs.popover.show) {
        return
      }

      this.$emit('blur')
      this.close()
    },

    handleClick(event) {
      if (this.form?.disabled || this.disabled) {
        return
      }

      this.$emit('click', event)
      this.nextTickValidateWithTrigger('onClick')

      if (this.form?.readonly || this.readonly) {
        return
      }

      this.$emit('focus')

      this.open()
    },

    handleErrorMessageChange(errorMessage) {
      this.errorMessage = errorMessage
    },

    handleFocus() {
      if (this.form?.disabled || this.form?.readonly || this.disabled || this.readonly) {
        return
      }

      this.$emit('focus')
      this.open()
    },

    handleClear(event) {
      event.stopPropagation()

      if (this.form?.disabled || this.form?.readonly || this.disabled || this.readonly) {
        return
      }

      this.$emit('input', this.multiple ? [] : undefined)
      this.$emit('clear', this.multiple ? [] : undefined)
      this.nextTickValidateWithTrigger('onClear')
    },

    handleClose(value) {
      const list = [...this.value]
      removeItem(list, value)
      this.$emit('input', list)
      this.$emit('tag-close', list)
      this.nextTickValidateWithTrigger('onTagClose')
    },

    onOptionEnter(option) {
      this.keyboardActiveIndex = option.index
    },

    onOptionSelect(option) {
      const value = option.value ?? option.label

      if (this.multiple) {
        const list = [...this.value]
        toggleItem(list, value)
        this.$emit('input', list)
        this.$emit('select', list)
      } else {
        this.$emit('input', value)
        this.$emit('select', value)
        this.blur()
      }

      this.nextTickValidateWithTrigger('onSelect')
    },

    findLabel(value) {
      let option = this.options.find((option) => option.value === value)

      if (!option) {
        option = this.options.find((option) => option.label === value)
      }

      return option?.label
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

    renderInput() {
      return (
        <input
          id={this.id}
          autoComplete="off"
          class={namespace('__input')}
          type={this.type}
          placeholder={this.placeholder}
          disabled={this.form?.disabled || this.disabled}
          readOnly={true}
          value={this.inputLabel}
          onFocus={this.handleFocus}
        />
      )
    },

    renderArrowIcon() {
      return <Icon class={namespace('__arrow')} select-cover name="menu-down" />
    },

    renderTags() {
      const tags = this.value.map((value) => (
        <Tag
          class={namespace('__tag')}
          type="primary"
          size={selectSizeToTagSize[this.size]}
          closeable={true}
          disabled={this.form?.disabled || this.disabled}
          readonly={this.form?.readonly || this.readonly}
          select-cover
          onClose={() => this.handleClose(value)}
        >
          {this.findLabel(value)}
        </Tag>
      ))

      const placeholder = (
        <input
          class={namespace('__placeholder')}
          placeholder={this.placeholder}
          disabled={this.form?.disabled || this.disabled}
          readOnly={true}
        />
      )

      return (
        <div class={namespace('__tags')} style={{ paddingBottom: this.value.length ? undefined : 0 }}>
          {this.value.length ? tags : placeholder}
        </div>
      )
    },

    renderSelect() {
      return (
        <div
          class={[
            namespace('__select'),
            namespace(`--${this.size}`),
            this.form?.disabled || this.disabled ? null : namespace('--outline-hover'),
            this.form?.disabled || this.disabled ? namespace('--disabled') : null,
            this.isFocus ? namespace('--outline') : null,
            this.errorMessage ? namespace('--validation-error-border') : null,
          ]}
          onClick={this.handleClick}
        >
          {this.renderPrependIcon()}
          {this.multiple ? this.renderTags() : this.renderInput()}
          {this.renderClearIcon()}
          {this.renderAppendIcon()}
          {this.renderArrowIcon()}
        </div>
      )
    },
  },

  render() {
    const { id } = this

    return (
      <div class={[namespace(), 'm--box']} onTouchstart={(e) => e.stopPropagation()}>
        <FormItem
          ref="formItem"
          label={this.label}
          value={this.value}
          rules={this.rules}
          {...{
            on: {
              'error-message-change': this.handleErrorMessageChange,
            },
          }}
        >
          <Popover
            class={namespace('__popover')}
            select-cover
            ref="popover"
            trigger="manual"
            y={6}
            sameWidth={true}
            defaultStyle={false}
            onOpen={() => this.$emit('open')}
            onOpened={() => this.$emit('opened')}
            onClose={() => this.$emit('close')}
            onClosed={() => this.$emit('closed')}
            scopedSlots={{
              trigger: this.renderSelect,
            }}
          >
            <label
              for={id}
              class={[namespace('__options'), namespace(`--${this.size}-options`)]}
              onTouchstart={(e) => e.stopPropagation()}
            >
              <Scroller ref="scroller" height={200}>
                {this.slots()}
              </Scroller>
            </label>
          </Popover>
        </FormItem>
      </div>
    )
  },
})

export const _SelectComponent = SelectPlugin

export default SelectPlugin
