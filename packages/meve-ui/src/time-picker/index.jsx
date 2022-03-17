import Input from '../input'
import Icon from '../icon'
import Popover from '../popover'
import Ripple from '../ripple'
import Button from '../button'
import Scroller from '../scroller'
import dayjs from 'dayjs/esm'
import customParseFormat from 'dayjs/esm/plugin/customParseFormat'
import { KeyboardActiveMixin } from '../utils/mixins/keyboardActive'
import { props } from './props'
import { createNamespace } from '../utils/create'
import { createChildrenMixin } from '../utils/mixins/relation'
import { isEmpty, toNumber } from '../utils/shared'

import '../styles/common.less'
import '../icon/icon.less'
import '../popover/popover.less'
import '../input/input.less'
import '../ripple/ripple.less'
import '../scroller/scroller.less'
import '../form-details/formDetails.less'
import '../form-item/formItem.less'
import '../button/button.less'
import './timePicker.less'

dayjs.extend(customParseFormat)

const { createComponent, namespace } = createNamespace('time-picker')

const TIMES = Array.from({ length: 60 }, (_, index) => {
  if (index < 10) {
    return '0' + index
  }

  return '' + index
})

const DISPLAY_FORMAT = 'HH:mm:ss'
const DATE_PREFIX = '1970-01-01'
const DATE_FORMAT = 'YYYY-MM-DD'
const HOUR_MAX = 23

// Trigger: onClear onClick onChange

const TimePickerPlugin = createComponent({
  mixins: [KeyboardActiveMixin, createChildrenMixin('form', { parentKey: 'form', childrenKey: 'formComponents' })],

  props,

  directives: { Ripple },

  data: () => ({
    enterPopover: false,
    keyboardDisabled: false,
    id: undefined,
    panelValues: [],
  }),

  watch: {
    value: {
      handler() {
        this.syncValueEffect()
      },
      immediate: true,
    },
  },

  computed: {
    invalidDisplayValue() {
      return this.panelValues.some((time, column) => this.customDisabled(column, time))
    },

    displayValue() {
      return this.panelValues.join(':')
    },
  },

  mounted() {
    this.id = this.$refs.input.id
  },

  methods: {
    // expose
    reset() {
      this.$emit('input', undefined)
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
      this.$refs.input?.blur()
    },

    // expose
    open() {
      if (this.$refs.popover.show) {
        return
      }

      this.$refs.popover.open()
      this.keyboardDisabled = false
      this.scrollAllToTop()

      this.focus()
    },

    // expose
    close() {
      if (!this.$refs.popover?.show) {
        return
      }

      this.$refs.popover?.close()
      this.keyboardDisabled = true
      this.syncValueEffect()

      this.blur()
    },

    // implement for KeyboardActiveMixin
    handleKeydownEscape() {
      if (!this.invalidDisplayValue) {
        this.confirm()
        return
      }

      this.close()
    },

    syncValueEffect() {
      this.panelValues = isEmpty(this.value)
        ? []
        : dayjs(`${DATE_PREFIX} ${this.value}`, `${DATE_FORMAT} ${this.valueFormat}`).format(DISPLAY_FORMAT).split(':')
    },

    toNow() {
      this.panelValues = dayjs().format(DISPLAY_FORMAT).split(':')
      this.scrollAllToTop()
    },

    scrollAllToTop() {
      this.panelValues.forEach((time, column) => {
        this.scrollToTop(column, time)
      })
    },

    confirm() {
      const value = isEmpty(this.displayValue)
        ? undefined
        : dayjs(`${DATE_PREFIX} ${this.displayValue}`).format(this.valueFormat)

      if (this.value !== value) {
        this.$emit('input', value)
        this.$emit('change', value)
        this.nextTickValidateWithTrigger('onChange')
      }

      this.close()

      requestAnimationFrame(this.blur)
    },

    scrollToTop(column, time) {
      this.$refs[`scroller-${column}`].disableTransitionDuration()

      requestAnimationFrame(() => {
        if (this.$refs[`scroller-${column}`]) {
          this.$refs[`scroller-${column}`].resize()
          this.$refs[`scroller-${column}`].scrollTo(this.$refs[`${column}-${time}`].offsetTop)
        }
      })
    },

    updatePanelValues(column, time) {
      this.panelValues = this.panelValues.map((rawTime, rawColumn) => {
        if (rawColumn === column) {
          return time
        }

        return rawTime
      })
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

      if (!this.invalidDisplayValue) {
        this.confirm()
        return
      }

      this.close()
    },

    handleClear() {
      this.$emit('clear', undefined)
      this.$emit('input', undefined)
      this.$emit('change', undefined)

      this.nextTickValidateWithTrigger('onClear')
      this.nextTickValidateWithTrigger('onChange')
    },

    handleMouseenter() {
      this.enterPopover = true
    },

    handleMouseleave() {
      this.enterPopover = false
    },

    handleTimeClick(column, time, timeDisabled) {
      if (timeDisabled) {
        return
      }

      if (isEmpty(this.panelValues)) {
        this.toNow()
      }

      this.scrollToTop(column, time)
      this.updatePanelValues(column, time)
    },

    renderTimes(column) {
      const times = TIMES.map((time) => {
        if (column === 0 && toNumber(time) > HOUR_MAX) {
          return
        }

        const timeDisabled = this.customDisabled(column, toNumber(time))

        return (
          <div
            class={[
              namespace('__time'),
              timeDisabled ? namespace('--time-disabled') : null,
              this.panelValues[column] === time ? namespace('--active') : null,
            ]}
            ref={`${column}-${time}`}
            v-ripple={{ disabled: this.ripple || timeDisabled }}
            onClick={() => this.handleTimeClick(column, time, timeDisabled)}
          >
            {time}
          </div>
        )
      })

      times.push(<div class={namespace('--space')} />)

      return times
    },

    renderTimePanel() {
      return (
        <div class={namespace('__time-panel-container')}>
          {Array.from({ length: 3 }, (_, column) => {
            return (
              <Scroller class={namespace('__time-panel')} ref={`scroller-${column}`} right={0} height={210}>
                {this.renderTimes(column)}
              </Scroller>
            )
          })}
        </div>
      )
    },

    renderAppendIcon() {
      const clockIcon = <Icon time-picker-cover class={namespace('__clock-icon')} name="clock-outline" />

      const clearIcon = this.clearable && (
        <Icon
          time-picker-cover
          name="close-circle"
          class={[namespace('__clear-icon'), isEmpty(this.value) ? namespace('--hide-clear-icon') : null]}
          onClick={this.handleClear}
        />
      )

      return (
        <div class={namespace('__append-icon')} onClick={(event) => event.stopPropagation()}>
          {clearIcon}
          {this.hasSlots('append-icon') ? this.slots('append-icon') : clockIcon}
        </div>
      )
    },

    renderInput() {
      return (
        <Input
          time-picker-cover
          class={this.invalidDisplayValue ? namespace('--invalid-display-value') : null}
          ref="input"
          size={this.size}
          value={this.displayValue}
          validateValue={this.value}
          label={this.label}
          validateTrigger={this.validateTrigger}
          rules={this.rules}
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
  },

  render() {
    const { disabled, handleMouseenter, handleMouseleave } = this

    return (
      <div class={[namespace(), disabled ? namespace('--disabled') : null]}>
        <Popover
          class={namespace('__popover')}
          time-picker-cover
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
            {this.renderTimePanel()}

            <div class={namespace('__actions')} onClick={this.focus}>
              <Button type="primary" size="small" onClick={this.toNow}>
                Now
              </Button>
              <Button type="primary" size="small" disabled={this.invalidDisplayValue} onClick={this.confirm}>
                OK
              </Button>
            </div>
          </label>
        </Popover>
      </div>
    )
  },
})

export const _TimePickerComponent = TimePickerPlugin

export default TimePickerPlugin
