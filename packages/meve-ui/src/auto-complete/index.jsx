import Input from '../input'
import Popover from '../popover'
import Ripple from '../ripple'
import Scroller from '../scroller'
import { KeyboardActiveMixin } from '../utils/mixins/keyboardActive'
import { debounce, isEmpty, range } from '../utils/shared'
import { props } from './props'
import { createNamespace } from '../utils/create'
import { createChildrenMixin } from '../utils/mixins/relation'
import { createLockMixin } from '../context/lock'

import '../styles/common.less'
import '../icon/icon.less'
import '../popover/popover.less'
import '../input/input.less'
import '../ripple/ripple.less'
import '../scroller/scroller.less'
import '../form-details/formDetails.less'
import '../form-item/formItem.less'
import './autoComplete.less'

const { createComponent, namespace } = createNamespace('auto-complete')

const AutoCompletePlugin = createComponent({
  mixins: [
    KeyboardActiveMixin,
    createLockMixin('locked'),
    createChildrenMixin('form', { parentKey: 'form', childrenKey: 'formComponents' }),
  ],

  props,

  directives: { Ripple },

  data: () => ({
    enterOptions: false,
    forbidOpen: false,
    keyboardDisabled: false,
    scrollerHeight: 0,
    keyboardActiveIndex: 0,
    keyboardLastIndex: 0,
    locked: false,
  }),

  watch: {
    options: {
      handler() {
        this.keyboardLastIndex = this.options.length ? this.options.length - 1 : 0
        this.keyboardActiveIndex = range(this.keyboardActiveIndex, 0, this.keyboardLastIndex)
        this.resizeScroller()
      },
      immediate: true,
    },
  },

  mounted() {
    this.resizeScroller = debounce(this.resizeScroller)
  },

  methods: {
    // expose
    reset() {
      this.$refs.input.reset()
      this.resetValidation()
    },

    // expose
    validate() {
      this.$refs.input.validate()
    },

    // expose
    resetValidation() {
      this.$refs.input.resetValidation()
    },

    resizeScroller() {
      if (!this.$refs.popover?.show) {
        return
      }

      this.$refs.scroller.resize()
    },

    nextTickValidateWithTrigger(trigger) {
      if (!this.validateTrigger.includes(trigger)) {
        return
      }

      this.$nextTick(() => {
        this.validate()
      })
    },

    // expose
    focus() {
      this.$refs.input.focus()
    },

    // expose
    blur() {
      this.$refs.input.blur()
    },

    // expose
    open() {
      if (!this.options.length || this.forbidOpen || this.$refs.popover.show) {
        return
      }

      this.$refs.popover.open()
      this.keyboardActiveIndex = 0
      this.keyboardDisabled = false
      this.resizeScroller()
      this.$refs.scroller.scrollToTop()
    },

    // expose
    close() {
      if (!this.$refs.popover?.show) {
        return
      }

      this.$refs.popover?.close()
      this.keyboardDisabled = true
    },

    lockOnce() {
      this.locked = true

      setTimeout(() => {
        this.locked = false
      })
    },

    // implement for KeyboardActiveMixin
    handleKeydownEnter(keyboardActiveIndex) {
      if (!this.$refs.popover.show) {
        return
      }

      this.lockOnce()

      const { value } = this.options[keyboardActiveIndex]

      this.$emit('input', value)
      this.$emit('select', value)
      this.nextTickValidateWithTrigger('onSelect')

      setTimeout(this.close)
    },

    // implement for KeyboardActiveMixin
    handleKeydownArrow() {
      if (!this.$refs.popover.show) {
        return
      }

      const optionTop = this.$refs[`option-${this.keyboardActiveIndex}`].offsetTop
      const optionHeight = this.$refs[`option-${this.keyboardActiveIndex}`].offsetHeight
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
    handleKeydownEscape() {
      if (!this.$refs.popover.show) {
        return
      }

      this.close()
    },

    handleClick(event) {
      this.$emit('click', event)
    },

    handleFocus(event) {
      this.$emit('focus', event)

      if (this.form?.disabled || this.disabled || this.form?.readonly || this.readonly) {
        return
      }

      isEmpty(this.value) ? this.close() : this.open()
    },

    handleBlur(event) {
      this.$emit('blur', event)

      if (this.enterOptions) {
        return
      }

      this.close()
    },

    handleOptionClick(option) {
      this.$emit('input', option.value)
      this.$emit('select', option.value)
      this.nextTickValidateWithTrigger('onSelect')
      this.forbidOpen = true
      this.close()

      setTimeout(() => {
        this.forbidOpen = false
      })
    },

    handleInput(value) {
      this.$emit('input', value)
      isEmpty(value) ? this.close() : this.open()
    },

    handleChange(value) {
      this.$emit('change', value)
    },

    handleClear(value) {
      this.$emit('clear', value)
    },

    handleMouseenter() {
      this.enterOptions = true
    },

    handleMouseleave() {
      this.enterOptions = false
    },

    handleOptionMouseenter(index) {
      this.keyboardActiveIndex = index
    },

    renderOptions() {
      return (
        <label
          for={this.$refs.input?.id}
          class={[namespace('__options'), namespace(`--${this.size}-options`)]}
          onMouseenter={this.handleMouseenter}
          onMouseleave={this.handleMouseleave}
        >
          <Scroller ref="scroller" height={200}>
            {this.options.map((option, index) => {
              return (
                <div
                  ref={`option-${index}`}
                  class={[
                    namespace('__option'),
                    namespace(`--${this.size}-option`),
                    index === this.keyboardActiveIndex ? namespace('--active') : null,
                  ]}
                  onMouseenter={() => this.handleOptionMouseenter(index)}
                  onClick={(e) => this.handleOptionClick(option, index, e)}
                  v-ripple
                >
                  {option.label}
                </div>
              )
            })}
          </Scroller>
        </label>
      )
    },

    renderInput() {
      return (
        <Input
          ref="input"
          value={this.value}
          label={this.label}
          type={this.type}
          textarea={this.textarea}
          rows={this.rows}
          maxlength={this.maxlength}
          clearable={this.clearable}
          resize={this.resize}
          validateTrigger={this.validateTrigger}
          rules={this.rules}
          placeholder={this.placeholder}
          size={this.size}
          readonly={this.readonly}
          disabled={this.disabled}
          onInput={this.handleInput}
          onChange={this.handleChange}
          onClear={this.handleClear}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onClick={this.handleClick}
          scopedSlots={{
            'prepend-icon': () => this.slots('prepend-icon'),
            'append-icon': () => this.slots('append-icon'),
          }}
        />
      )
    },
  },

  render() {
    return (
      <div class={namespace()} onTouchstart={(e) => e.stopPropagation()}>
        <Popover
          class={namespace('__popover')}
          auto-complete-cover
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
            trigger: this.renderInput,
          }}
        >
          {this.renderOptions()}
        </Popover>
      </div>
    )
  },
})

export const _AutoCompleteComponent = AutoCompletePlugin

export default AutoCompletePlugin
