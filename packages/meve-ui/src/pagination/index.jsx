import Icon from '../icon'
import Ripple from '../ripple'
import Select from '../select'
import Input from '../input'
import Option from '../option'
import { createNamespace } from '../utils/create'
import { props } from './props'
import { range, toNumber } from '../utils/shared'

import '../styles/common.less'
import '../icon/icon.less'
import '../space/space.less'
import '../ripple/ripple.less'
import '../select/select.less'
import '../option/option.less'
import '../input/input.less'
import './pagination.less'

const { createComponent, namespace } = createNamespace('pagination')

const MIDDLE_PAGER_COUNT = 3
const MAX_PAGE_COUNT = 5

const PaginationPlugin = createComponent({
  directives: { Ripple },

  props,

  data: () => ({
    localSize: undefined,
    quickJumperValue: '',
  }),

  watch: {
    size: {
      handler(size) {
        this.localSize = size

        if (this.total === 0) {
          return
        }

        const current = range(this.current, 1, this.maxPage)
        this.$emit('update:current', current)
        this.$emit('change', current, this.size)
      },
      immediate: true,
    },

    current: {
      handler(value) {
        if (this.total === 0) {
          return
        }

        const current = range(value, 1, this.maxPage)
        this.$emit('update:current', current)
        this.$emit('change', current, this.size)
      },
      immediate: true,
    },
  },

  computed: {
    maxPage() {
      return Math.ceil(this.total / this.size)
    },

    showDoubleEllipsis() {
      return (
        this.maxPage >= MAX_PAGE_COUNT + 2 &&
        this.current - MIDDLE_PAGER_COUNT >= 1 &&
        this.current + MIDDLE_PAGER_COUNT <= this.maxPage
      )
    },

    showLeftEllipsis() {
      return this.maxPage >= MAX_PAGE_COUNT + 1 && this.current - MIDDLE_PAGER_COUNT >= 1
    },

    showRightEllipsis() {
      return this.maxPage >= MAX_PAGE_COUNT + 1 && this.current + MIDDLE_PAGER_COUNT <= this.maxPage
    },
  },

  methods: {
    // expose
    prev() {
      if (this.current === 1) {
        return
      }

      this.$emit('update:current', this.current - 1)
    },

    // expose
    next() {
      if (this.current === this.maxPage) {
        return
      }

      this.$emit('update:current', this.current + 1)
    },

    // expose
    to(page) {
      page = toNumber(page)
      this.$emit('update:current', page)
    },

    handlePrev(page) {
      if (this.disabled) {
        return
      }

      this.prev(page)
    },

    handleNext(page) {
      if (this.disabled) {
        return
      }

      this.next(page)
    },

    renderPrevButton() {
      if (this.hasSlots('prev-button')) {
        return this.slots('prev-button')
      }

      return (
        <div class={[namespace('__pager')]} v-ripple={{ disabled: this.disabled }} onClick={this.handlePrev}>
          <Icon class={namespace('__arrow-icon')} pagination-cover name="chevron-left" />
        </div>
      )
    },

    renderNextButton() {
      if (this.hasSlots('next-button')) {
        return this.slots('next-button')
      }

      return (
        <div class={namespace('__pager')} v-ripple={{ disabled: this.disabled }} onClick={this.handleNext}>
          <Icon class={namespace('__arrow-icon')} pagination-cover name="chevron-right" />
        </div>
      )
    },

    handlePagerClick(page) {
      if (this.disabled) {
        return
      }

      if (page === 'next...') {
        page = this.current + MIDDLE_PAGER_COUNT
      }

      if (page === 'prev...') {
        page = this.current - MIDDLE_PAGER_COUNT
      }

      this.$emit('update:current', page)
    },

    renderSizeChanger() {
      if (!this.showSizeChanger) {
        return
      }

      return (
        <Select
          class={namespace('__size-changer')}
          pagination-cover
          value={this.localSize}
          disabled={this.disabled}
          onInput={(size) => this.$emit('update:size', size)}
        >
          {this.sizeOption.map((option) => {
            return <Option label={`${option} / 页`} value={option} />
          })}
        </Select>
      )
    },

    renderQuickJumper() {
      if (!this.showQuickJumper) {
        return
      }

      return (
        <Input
          class={namespace('__quick-jumper')}
          placeholder="快速跳转"
          pagination-cover
          disabled={this.disabled}
          v-model={this.quickJumperValue}
          onChange={this.to}
        />
      )
    },

    renderTotal() {
      if (!this.showTotal) {
        return
      }

      const start = (this.current - 1) * this.size + 1
      const range = [start, start + this.size - 1]

      const totalDescription = this.showTotal(this.total, range)

      return <div class={namespace('__total')}>{totalDescription}</div>
    },

    renderPagers() {
      const left = []
      const right = []
      let middle = []

      if (this.showDoubleEllipsis) {
        left.push(1, 'prev...')
        right.push('next...', this.maxPage)

        let start = this.current
        Array.from({ length: MIDDLE_PAGER_COUNT }).forEach(() => {
          if (start <= this.current) {
            middle.unshift(start)
            start = middle[middle.length - 1] + 1
          } else {
            middle.push(start)
            start = middle[0] - 1
          }
        })
      } else if (this.showLeftEllipsis) {
        left.push(1, 'prev...')
        middle = Array.from({ length: MAX_PAGE_COUNT - 1 }).map((_, index) => this.maxPage - MIDDLE_PAGER_COUNT + index)
      } else if (this.showRightEllipsis) {
        right.push('next...', this.maxPage)
        middle = Array.from({ length: MAX_PAGE_COUNT - 1 }).map((_, index) => index + 1)
      } else {
        middle = Array.from({ length: this.maxPage }).map((_, index) => index + 1)
      }

      return [...left, ...middle, ...right].map((page) => {
        return (
          <div
            class={[namespace('__pager'), this.current === page ? namespace('--active') : null]}
            onClick={() => this.handlePagerClick(page)}
            v-ripple={{ disabled: this.disabled }}
          >
            {page.toString().replace(/prev|next/, '')}
          </div>
        )
      })
    },
  },

  render() {
    const { total, disabled } = this

    return (
      <div class={[namespace(), 'm--box', disabled ? namespace('--disabled') : null]} v-show={total > 0}>
        <div class={namespace('__pager-container')}>
          {this.renderPrevButton()}
          {this.renderPagers()}
          {this.renderNextButton()}
        </div>
        {this.renderTotal()}
        {this.renderSizeChanger()}
        {this.renderQuickJumper()}
      </div>
    )
  },
})

export const _PaginationComponent = PaginationPlugin

export default PaginationPlugin
