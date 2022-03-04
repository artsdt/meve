import Button from '../button'
import Icon from '../icon'
import { getParentScroller, getScrollLeft, getScrollTop, toPxNum, scrollTo, toSizeUnit } from '../utils/elements'
import { isObject, isString } from '../utils/shared'
import { easeInOutCubic } from '../utils/animation'
import { props } from './props'
import { createNamespace } from '../utils/create'

import '../styles/common.less'
import '../button/button.less'
import '../icon/icon.less'
import './backTop.less'

const { createComponent, namespace } = createNamespace('back-top')

const BackTopPlugin = createComponent({
  props,

  data: () => ({
    visible: false,
    scroller: null,
  }),

  mounted() {
    this.scroller = this.getTarget()
    this.scroller.addEventListener('scroll', this.handleScroll)
  },

  beforeDestroy() {
    this.scroller.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    getTarget() {
      const { target } = this

      if (isString(target)) {
        return document.querySelector(target)
      }

      if (isObject(target)) {
        return target
      }

      return getParentScroller(this.$refs.el)
    },

    handleScroll() {
      this.visible = getScrollTop(this.scroller) >= toPxNum(this.visibilityHeight)
    },

    handleClick(e) {
      e.stopPropagation()

      this.$emit('click', e)

      const left = getScrollLeft(this.scroller)

      scrollTo(this.scroller, {
        left,
        duration: this.duration,
        animation: easeInOutCubic,
      })
    },

    renderSlot() {
      if (this.hasSlots()) {
        return this.slots()
      }

      return (
        <Button type="primary" round back-top-cover>
          <Icon name="format-vertical-align-top" />
        </Button>
      )
    },
  },

  render() {
    const { visible, handleClick, renderSlot, right, bottom } = this

    return (
      <div
        ref="el"
        class={[namespace(), visible ? namespace('--active') : null]}
        style={{
          right: toSizeUnit(right),
          bottom: toSizeUnit(bottom),
        }}
        onClick={handleClick}
      >
        {renderSlot()}
      </div>
    )
  },
})

export const _BackTopComponent = BackTopPlugin

export default BackTopPlugin
