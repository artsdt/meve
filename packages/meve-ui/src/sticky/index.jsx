import { createNamespace } from '../utils/create'
import { getParentScroller, toPxNum } from '../utils/elements'
import { props } from './props'

import '../styles/common.less'
import './sticky.less'
import { toNumber } from '../utils/shared'

const { createComponent, namespace } = createNamespace('sticky')

const StickyPlugin = createComponent({
  props,

  data: () => ({
    isFixed: false,
    fixedTop: '0px',
    fixedLeft: '0px',
    fixedWidth: 'auto',
    fixedHeight: 'auto',
    fixedWrapperWidth: 'auto',
    fixedWrapperHeight: 'auto',
    scroller: null,
  }),

  watch: {
    disabled() {
      this.handleScroll()
    },
  },

  activated() {
    this.addScrollListener()
  },

  deactivated() {
    this.removeScrollListener()
  },

  mounted() {
    this.addScrollListener()
  },

  beforeDestroy() {
    this.removeScrollListener()
  },

  computed: {
    enableCSSMode() {
      return !this.disabled && this.cssMode
    },

    enableFixedMode() {
      return !this.disabled && this.isFixed
    },

    offsetTopNum() {
      return toPxNum(this.offsetTop)
    },
  },

  methods: {
    handleScroll() {
      const { cssMode, disabled } = this

      if (disabled) {
        return
      }

      let scrollerTop = 0

      if (this.scroller !== window) {
        const { top } = this.scroller.getBoundingClientRect()
        scrollerTop = top
      }

      const wrapper = this.$refs.wrapper
      const sticky = this.$refs.sticky
      const { top: stickyTop, left: stickyLeft } = sticky.getBoundingClientRect()
      const currentOffsetTop = stickyTop - scrollerTop

      if (currentOffsetTop <= this.offsetTopNum) {
        if (!cssMode) {
          this.fixedWidth = `${sticky.offsetWidth}px`
          this.fixedHeight = `${sticky.offsetHeight}px`
          this.fixedTop = `${scrollerTop + this.offsetTopNum}px`
          this.fixedLeft = `${stickyLeft}px`
          this.fixedWrapperWidth = `${wrapper.offsetWidth}px`
          this.fixedWrapperHeight = `${wrapper.offsetHeight}px`
          this.isFixed = true
        }

        this.$emit('scroll', this.offsetTopNum, true)
      } else {
        this.isFixed = false
        this.$emit('scroll', currentOffsetTop, false)
      }
    },

    addScrollListener() {
      this.scroller = getParentScroller(this.$refs.sticky)
      this.scroller !== window && this.scroller.addEventListener('scroll', this.handleScroll)
      window.addEventListener('scroll', this.handleScroll)
      this.handleScroll()
    },

    removeScrollListener() {
      this.scroller !== window && this.scroller.removeEventListener('scroll', this.handleScroll)
      window.removeEventListener('scroll', this.handleScroll)
    },
  },

  render() {
    const {
      enableCSSMode,
      enableFixedMode,
      fixedWrapperWidth,
      fixedWrapperHeight,
      fixedLeft,
      fixedTop,
      zIndex,
      offsetTopNum,
      fixedWidth,
      fixedHeight,
    } = this

    return (
      <div
        ref="sticky"
        class={[namespace(), enableCSSMode ? namespace('--css-mode') : null]}
        style={{
          zIndex: toNumber(zIndex),
          top: enableCSSMode ? `${offsetTopNum}px` : undefined,
          width: enableFixedMode ? fixedWidth : undefined,
          height: enableFixedMode ? fixedHeight : undefined,
        }}
      >
        <div
          ref="wrapper"
          class={namespace('__wrapper')}
          style={{
            zIndex: toNumber(zIndex),
            position: enableFixedMode ? 'fixed' : undefined,
            width: enableFixedMode ? fixedWrapperWidth : undefined,
            height: enableFixedMode ? fixedWrapperHeight : undefined,
            left: enableFixedMode ? fixedLeft : undefined,
            top: enableFixedMode ? fixedTop : undefined,
          }}
        >
          {this.slots()}
        </div>
      </div>
    )
  },
})

export const _StickyComponent = StickyPlugin

export default StickyPlugin
