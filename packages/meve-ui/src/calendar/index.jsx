import Ripple from '../ripple'
import dayjs from 'dayjs/esm'
import Button from '../button'
import Icon from '../icon'
import { createNamespace } from '../utils/create'
import { props } from './props'
import { isArray } from '../utils/shared'

import '../styles/common.less'
import '../ripple/ripple.less'
import '../button/button.less'
import '../icon/icon.less'
import './calendar.less'

const { createComponent, namespace } = createNamespace('calendar')

const MAX_DATE_COUNT = 42

const DAYS = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']

const CalendarPlugin = createComponent({
  props,

  directives: { Ripple },

  data: () => ({
    now: {},
    current: {},
  }),

  created() {
    this.initDayjs()
  },

  computed: {
    valueDate() {
      return this.range ? (isArray(this.value) ? this.value : []).map(this.formatValue) : this.formatValue(this.value)
    },
  },

  methods: {
    // expose
    nextMonth() {
      this.current = this.current.month(this.current.month() + 1)
    },

    // expose
    prevMonth() {
      this.current = this.current.month(this.current.month() - 1)
    },

    // expose
    nextYear() {
      this.current = this.current.year(this.current.year() + 1)
    },

    // expose
    prevYear() {
      this.current = this.current.year(this.current.year() - 1)
    },

    // expose
    toNow() {
      this.current = dayjs()

      if (this.customDisabled(this.current)) {
        return
      }

      this.change(this.range ? [dayjs()] : dayjs())
    },

    // expose
    slideTo(nativeDate) {
      this.current = dayjs(nativeDate)
    },

    formatValue(value) {
      return dayjs(value, this.valueFormat)
    },

    pickDate(date, disabled) {
      if (disabled) {
        return
      }

      this.$emit('click', date.format(this.valueFormat))

      if (this.readonly) {
        return
      }

      if (!this.range) {
        this.change(date)
        return
      }

      const value = [...this.valueDate]
      const isEmptyOrFull = !value.length || value.length === 2
      const hasOne = value.length === 1

      if (isEmptyOrFull) {
        this.change([date])
      }

      if (hasOne) {
        const [prevPickedDate] = value

        if (date.isBefore(prevPickedDate, 'date')) {
          value.unshift(date)
        }

        if (date.isAfter(prevPickedDate, 'date')) {
          value.push(date)
        }

        this.change(value)
      }
    },

    change(value) {
      value = this.range ? value.map((v) => v.format(this.valueFormat)) : value.format(this.valueFormat)
      this.$emit('input', value)
      this.$emit('change', value)
    },

    initDayjs() {
      this.now = dayjs()
      this.current = dayjs()
    },

    isLeapYear(year) {
      return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
    },

    getDateCount(year, month) {
      const realMonth = month + 1

      switch (realMonth) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
          return 31
        case 2:
          return this.isLeapYear(year) ? 29 : 28
      }

      return 30
    },

    getCalender() {
      const year = this.current.year()
      const month = this.current.month()
      const day = dayjs().year(year).month(month).date(1).day()

      const prevMonth = dayjs()
        .year(year)
        .month(month - 1)
      const prevMonthDateCount = this.getDateCount(prevMonth.year(), prevMonth.month())

      const currentMonth = dayjs().year(year).month(month)
      const currentMonthDateCount = this.getDateCount(currentMonth.year(), currentMonth.month())

      const nextMonth = dayjs()
        .year(year)
        .month(month + 1)

      const prevMonthDates = Array.from({ length: day }, (_, index) => {
        return dayjs()
          .year(prevMonth.year())
          .month(prevMonth.month())
          .date(prevMonthDateCount - index)
      }).reverse()

      const currentMonthDates = Array.from({ length: currentMonthDateCount }, (_, index) => {
        return dayjs()
          .year(currentMonth.year())
          .month(currentMonth.month())
          .date(index + 1)
      })

      const fillCount = MAX_DATE_COUNT - prevMonthDates.length - currentMonthDates.length
      const nextMonthDates = Array.from({ length: fillCount }, (_, index) => {
        return dayjs()
          .year(nextMonth.year())
          .month(nextMonth.month())
          .date(index + 1)
      })

      return [...prevMonthDates, ...currentMonthDates, ...nextMonthDates]
    },

    hasInRangeClass(date) {
      if (this.range && this.valueDate.length === 2) {
        const [startDate, endDate] = this.valueDate

        return date.isAfter(startDate, 'date') && date.isBefore(endDate, 'date')
      }

      return false
    },

    hasPickedClass(date) {
      return this.range ? this.hasSameDate(date, this.valueDate) : date.isSame(this.valueDate, 'date')
    },

    hasSameDate(date, dates) {
      return dates.some((targetDate) => date.isSame(targetDate, 'date'))
    },

    renderHeader() {
      if (this.hasSlots('header')) {
        return this.slots('header', {
          current: this.current,
          disabled: this.disabled,
          readonly: this.readonly,
        })
      }

      return (
        <div class={namespace('__header')}>
          <div class={namespace('__current')}>{this.current.format('YYYY-MM')}</div>
          <div class={namespace('__pager')}>
            <Button type="primary" round disabled={this.disabled} readonly={this.readonly} onClick={this.prevMonth}>
              <Icon name="arrow-left" />
            </Button>
            <Button
              type="primary"
              calender-cover
              class={namespace('__today')}
              disabled={this.disabled}
              readonly={this.readonly}
              onClick={this.toNow}
            >
              今天
            </Button>
            <Button type="primary" round disabled={this.disabled} readonly={this.readonly} onClick={this.nextMonth}>
              <Icon name="arrow-right" />
            </Button>
          </div>
        </div>
      )
    },

    renderCalender() {
      const monthDates = this.getCalender(this.current.year(), this.current.month())

      const cells = monthDates.map((date) => {
        const isNow = date.isSame(this.now, 'date')
        const hasPickedClass = this.hasPickedClass(date)
        const hasInRangeClass = this.hasInRangeClass(date)
        const disabled = this.disabled || this.customDisabled(date)

        return (
          <div
            class={[namespace('__date-cell'), disabled ? namespace('--date-disabled') : null]}
            style={this.dateStyle}
            v-ripple={{ disabled: disabled || this.readonly || !this.ripple }}
            onClick={() => this.pickDate(date, disabled)}
          >
            <div
              class={[
                namespace('__date-text'),
                isNow ? namespace('--date-today') : null,
                hasPickedClass ? namespace('--date-picked') : null,
                hasInRangeClass ? namespace('--in-range') : null,
                disabled ? namespace('--date-text-disabled') : null,
                disabled && (hasPickedClass || hasInRangeClass || isNow)
                  ? namespace('--date-text-background-disabled')
                  : null,
              ]}
              style={this.dateTextStyle}
            >
              {date.date()}
            </div>

            {this.slots('extra', { date })}
          </div>
        )
      })

      return (
        <div class={namespace('__calender')}>
          <div class={namespace('__day-container')}>
            {DAYS.map((day) => (
              <div class={namespace('__day')} style={this.dayStyle}>
                {day}
              </div>
            ))}
          </div>

          <div class={namespace('__date-container')}>{cells}</div>
        </div>
      )
    },
  },

  render() {
    return (
      <div class={[namespace(), 'm--box']}>
        {this.renderHeader()}
        {this.renderCalender()}
      </div>
    )
  },
})

export const _CalendarComponent = CalendarPlugin

export default CalendarPlugin
