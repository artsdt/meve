import Icon from '../icon'
import Popover from '../popover'
import Ripple from '../ripple'
import Button from '../button'
import Input from '../input'
import Calendar from '../calendar'
import dayjs from 'dayjs/esm'
import customParseFormat from 'dayjs/esm/plugin/customParseFormat'
import { KeyboardActiveMixin } from '../utils/mixins/keyboardActive'
import { props } from './props'
import { createNamespace } from '../utils/create'
import { createChildrenMixin } from '../utils/mixins/relation'
import { isArray, isEmpty } from '../utils/shared'

import '../styles/common.less'
import '../icon/icon.less'
import '../popover/popover.less'
import '../input/input.less'
import '../ripple/ripple.less'
import '../scroller/scroller.less'
import '../calendar/calendar.less'
import '../form-details/formDetails.less'
import '../form-item/formItem.less'
import '../button/button.less'
import './datePicker.less'

dayjs.extend(customParseFormat)

const { createComponent, namespace } = createNamespace('date-picker')

const DATE_FORMAT = 'YYYY-MM-DD'
const SEPARATOR = ' - '
const PRESSING_INTERVAL = 130

const DatePickerPlugin = createComponent({
  mixins: [KeyboardActiveMixin, createChildrenMixin('form', { parentKey: 'form', childrenKey: 'formComponents' })],

  props,

  directives: { Ripple },

  data: () => ({
    enterPopover: false,
    keyboardDisabled: false,
    id: undefined,
    localValue: undefined,
  }),

  watch: {
    value: {
      handler(value) {
        this.localValue = value
      },
      immediate: true,
    },
  },

  computed: {
    displayValue() {
      if (this.range && isArray(this.localValue)) {
        return this.localValue.map(this.formatValueToDisplay).join(SEPARATOR)
      }

      if (this.range && !isArray(this.localValue)) {
        return ''
      }

      return isEmpty(this.localValue) ? undefined : this.formatValueToDisplay(this.localValue)
    },
  },

  mounted() {
    this.id = this.$refs.input.id
  },

  methods: {
    // expose
    reset() {
      this.$emit('input', this.range ? [] : undefined)
      this.resetValidation()
    },

    // expose
    validate() {
      return this.$refs.input.validate()
    },

    // expose
    resetValidation() {
      this.$refs.input.resetValidation()
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
    nextMonth() {
      this.$refs.calendar.nextMonth()
    },

    // expose
    prevMonth() {
      this.$refs.calendar.prevMonth()
    },

    // expose
    nextYear() {
      this.$refs.calendar.nextYear()
    },

    // expose
    prevYear() {
      this.$refs.calendar.prevYear()
    },

    // expose
    slideTo(nativeDate) {
      this.$refs.calendar.slideTo(nativeDate)
    },

    // expose
    toNow() {
      this.$refs.calendar.toNow()
    },

    // expose
    focus() {
      this.$refs.input.focus()
    },

    // expose
    blur() {
      this.$refs.input?.blur()
    },

    // expose
    open() {
      if (this.$refs.popover.show) {
        return
      }

      this.$refs.popover.open()
      this.keyboardDisabled = false
    },

    // expose
    close() {
      if (!this.$refs.popover?.show) {
        return
      }

      this.$refs.popover?.close()
      this.keyboardDisabled = true
    },

    invalidRangeValue() {
      return this.range && (!isArray(this.localValue) || this.localValue.length !== 2)
    },

    formatValueToDisplay(value) {
      return dayjs(value, this.valueFormat).format(DATE_FORMAT)
    },

    // implement for KeyboardActiveMixin
    handleKeydownEscape() {
      this.confirm()
    },

    confirm() {
      const value = this.invalidRangeValue() ? [] : this.localValue

      if (this.value !== value) {
        this.$emit('input', value)
        this.$emit('change', value)
        this.nextTickValidateWithTrigger('onChange')
      }

      this.close()
      requestAnimationFrame(this.blur)
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

      this.focus()
    },

    handleClear() {
      const value = this.range ? [] : undefined
      this.$emit('clear', value)
      this.$emit('input', value)
      this.$emit('change', value)

      this.nextTickValidateWithTrigger('onClear')
      this.nextTickValidateWithTrigger('onChange')
    },

    handleFocus(event) {
      if (this.form?.disabled || this.disabled) {
        return
      }

      this.$emit('focus', event)

      if (this.form?.readonly || this.readonly) {
        return
      }

      this.open()
    },

    handleBlur(event) {
      this.$emit('blur', event)

      if (this.enterPopover) {
        return
      }

      this.confirm()
    },

    handleMouseenter() {
      this.enterPopover = true
    },

    handleMouseleave() {
      this.enterPopover = false
    },

    withPressing(callback) {
      let timer

      function handleTouchend() {
        callback()
        timer && clearInterval(timer)
        document.removeEventListener('touchend', handleTouchend)
      }

      return () => {
        document.addEventListener('touchend', handleTouchend)

        timer = setInterval(() => {
          callback()
        }, PRESSING_INTERVAL)
      }
    },

    renderAppendIcon() {
      const calendarIcon = <Icon date-picker-cover class={namespace('__calendar-icon')} name="calendar" />

      const clearIcon = this.clearable && (
        <Icon
          date-picker-cover
          name="close-circle"
          class={[namespace('__clear-icon'), isEmpty(this.value) ? namespace('--hide-clear-icon') : null]}
          onClick={this.handleClear}
        />
      )

      return (
        <div class={namespace('__append-icon')} onClick={(event) => event.stopPropagation()}>
          {clearIcon}
          {this.hasSlots('append-icon') ? this.slots('append-icon') : calendarIcon}
        </div>
      )
    },

    renderInput() {
      return (
        <Input
          date-picker-cover
          ref="input"
          label={this.label}
          value={this.displayValue}
          validateValue={this.value}
          rules={this.rules}
          validateTrigger={this.validateTrigger}
          placeholder={this.placeholder}
          size={this.size}
          readonly={true}
          disabled={this.form?.disabled || this.disabled}
          onClear={this.handleClear}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onClick={this.handleClick}
          scopedSlots={{
            'prepend-icon': () => this.slots('prepend-icon'),
            'append-icon': this.renderAppendIcon,
          }}
        />
      )
    },

    renderCalendarHeader({ current }) {
      return (
        <div class={namespace('__calendar-header')} onClick={this.focus}>
          <Button
            class={namespace('__calendar-button')}
            date-picker-cover
            round
            text
            onTouchstart={this.withPressing(this.prevYear)}
          >
            <Icon class={namespace('__calendar-arrow-icon')} date-picker-cover name="arrow-left" />
          </Button>

          <Button
            class={namespace('__calendar-button')}
            date-picker-cover
            round
            text
            onTouchstart={this.withPressing(this.prevMonth)}
          >
            <Icon class={namespace('__calendar-arrow-icon')} date-picker-cover name="chevron-left" />
          </Button>

          <div class={namespace('__calendar-month-panel')}>{current.format(DATE_FORMAT)}</div>

          <Button
            class={namespace('__calendar-button')}
            date-picker-cover
            round
            text
            onTouchstart={this.withPressing(this.nextMonth)}
          >
            <Icon class={namespace('__calendar-arrow-icon')} date-picker-cover name="chevron-right" />
          </Button>

          <Button
            class={namespace('__calendar-button')}
            date-picker-cover
            round
            text
            onTouchstart={this.withPressing(this.nextYear)}
          >
            <Icon class={namespace('__calendar-arrow-icon')} date-picker-cover name="arrow-right" />
          </Button>
        </div>
      )
    },

    renderCalendar() {
      return (
        <Calendar
          class={namespace('__calendar')}
          date-picker-cover
          ref="calendar"
          disabled={this.form?.disabled || this.disabled}
          readonly={this.form?.readonly || this.readonly}
          value={this.localValue}
          valueFormat={this.valueFormat}
          range={this.range}
          customDisabled={this.customDisabled}
          ripple={false}
          onInput={(value) => {
            this.localValue = value
          }}
          scopedSlots={{
            header: this.renderCalendarHeader,
          }}
        />
      )
    },
  },

  render() {
    const { disabled, handleMouseenter, handleMouseleave } = this

    return (
      <div class={[namespace(), disabled ? namespace('--disabled') : null]}>
        <Popover
          class={namespace('__popover')}
          date-picker-cover
          ref="popover"
          trigger="manual"
          placement="bottom-start"
          y={6}
          defaultStyle={false}
          onOpen={() => this.$emit('open')}
          onOpened={() => this.$emit('opened')}
          onClose={() => this.$emit('close')}
          onClosed={() => this.$emit('closed')}
          scopedSlots={{
            trigger: this.renderInput,
          }}
        >
          <label
            class={namespace('__popover-inner')}
            for={this.id}
            onMouseenter={handleMouseenter}
            onMouseleave={handleMouseleave}
          >
            {this.renderCalendar()}

            <div class={namespace('__actions')} onClick={this.focus}>
              <Button class={namespace('__now-button')} type="primary" size="small" onClick={this.toNow}>
                Now
              </Button>
              <Button
                class={namespace('__confirm-button')}
                type="primary"
                size="small"
                disabled={this.invalidRangeValue()}
                onClick={() => this.confirm(this.localValue)}
              >
                OK
              </Button>
            </div>
          </label>
        </Popover>
      </div>
    )
  },
})

export const _DatePickerComponent = DatePickerPlugin

export default DatePickerPlugin
