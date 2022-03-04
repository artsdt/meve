import { createNamespace } from '../utils/create'
import { props } from './props'
import { isMobile, toSizeUnit } from '../utils/elements'
import { range, removeItem } from '../utils/shared'
import { createLockMixin } from '../context/lock'

import '../styles/common.less'
import './scroller.less'

const stack = []

const { namespace, createComponent } = createNamespace('scroller')

const ScrollerPlugin = createComponent({
  props,
  mixins: [createLockMixin('mouseEnter')],

  data: () => ({
    isMobile: false,
    scrollY: 0,
    maxScrollY: 0,
    scrollViewTranslateY: 0,
    transitionDuration: 0,
    scrollbarRatio: 0,
    mouseEnter: false,
    touching: false,
    touchY: 0,
  }),

  watch: {
    height() {
      this.resize()
    },
  },

  computed: {
    showScrollbar() {
      return !this.isMobile && this.scrollbarRatio < 1 && (this.touching || this.mouseEnter)
    },
  },

  mounted() {
    this.isMobile = isMobile()
  },

  beforeDestroy() {
    document.removeEventListener('touchmove', this.handleTouchMove)
    document.removeEventListener('touchend', this.handleTouchend)
    document.removeEventListener('mousewheel', this.handleMouseWheel)
    removeItem(stack, this)
  },

  methods: {
    resize() {
      const { scroller } = this.$refs
      this.scrollbarRatio = scroller.clientHeight / scroller.scrollHeight || 0
      this.maxScrollY = scroller.clientHeight - this.scrollbarRatio * scroller.clientHeight
    },

    getScrollTop() {
      return this.isMobile ? this.$refs.scroller.scrollTop : this.scrollViewTranslateY
    },

    scrollTo(y) {
      if (this.isMobile) {
        this.$refs.scroller.scrollTop = y
        return
      }

      this.scrollY = y * this.scrollbarRatio
      this.scrollY = range(this.scrollY, 0, this.maxScrollY)
      this.scrollViewTranslateY = this.scrollY / this.scrollbarRatio
    },

    scrollToTop() {
      if (this.isMobile) {
        setTimeout(() => {
          this.$refs.scroller.scrollTop = 0
        })
        return
      }

      this.scrollY = 0
      this.scrollViewTranslateY = 0
    },

    scrollUp(y) {
      if (this.isMobile) {
        this.$refs.scroller.scrollTop -= y
        return
      }

      this.scrollY -= y * this.scrollbarRatio
      this.scrollY = range(this.scrollY, 0, this.maxScrollY)
      this.scrollViewTranslateY = this.scrollY / this.scrollbarRatio
    },

    scrollDown(y) {
      if (this.isMobile) {
        this.$refs.scroller.scrollTop += y
        return
      }

      this.scrollY += y * this.scrollbarRatio
      this.scrollY = range(this.scrollY, 0, this.maxScrollY)
      this.scrollViewTranslateY = this.scrollY / this.scrollbarRatio
    },

    handleMouseEnter() {
      if (this.isMobile) {
        return
      }

      stack.push(this)
      this.mouseEnter = true
      this.resize()
      document.addEventListener('mousewheel', this.handleMouseWheel)
    },

    handleMouseWheel({ deltaY }) {
      const last = stack[stack.length - 1]
      if (last !== this) {
        return
      }

      if (this.touching) {
        return
      }

      this.transitionDuration = 100
      this.scrollY += deltaY * this.scrollbarRatio
      this.scrollY = range(this.scrollY, 0, this.maxScrollY)
      this.scrollViewTranslateY = this.scrollY / this.scrollbarRatio
    },

    handleMouseLeave() {
      this.mouseEnter = false
      removeItem(stack, this)
      document.removeEventListener('mousewheel', this.handleMouseWheel)
    },

    handleTouchstart(event) {
      this.touching = true
      this.touchY = event.touches[0].clientY
      document.addEventListener('touchmove', this.handleTouchMove)
      document.addEventListener('touchend', this.handleTouchend)
    },

    handleTouchMove(event) {
      const { touchY } = this

      this.transitionDuration = 0
      const { clientY } = event.touches[0]
      const deltaY = clientY - touchY
      this.touchY = clientY
      this.scrollY += deltaY
      this.scrollY = range(this.scrollY, 0, this.maxScrollY)
      this.scrollViewTranslateY = this.scrollY / this.scrollbarRatio
    },

    handleTouchend() {
      this.touching = false
      document.removeEventListener('touchmove', this.handleTouchMove)
      document.removeEventListener('touchend', this.handleTouchend)
    },
  },

  render() {
    const {
      height,
      showScrollbar,
      isMobile,
      scrollbarRatio,
      scrollY,
      scrollViewTranslateY,
      transitionDuration,
      handleTouchstart,
      handleMouseEnter,
      handleMouseLeave,
    } = this

    return (
      <div
        ref="scroller"
        class={[namespace(), isMobile ? namespace('--mobile') : null]}
        style={{ maxHeight: toSizeUnit(height) }}
        onMouseenter={handleMouseEnter}
        onMouseleave={handleMouseLeave}
      >
        <div
          class={namespace('__scroll-view')}
          style={{
            transform: !isMobile ? `translateY(${-scrollViewTranslateY}px)` : undefined,
            transition: !isMobile ? `transform ${transitionDuration}ms` : undefined,
          }}
        >
          {this.slots()}
        </div>

        <transition name="scrollbar-fade">
          <div class={namespace('__scrollbar')} v-show={showScrollbar}>
            <div
              class={namespace('__scrollbar-inner')}
              style={{
                height: `${scrollbarRatio * 100}%`,
                transition: `top ${transitionDuration}ms`,
                top: `${scrollY}px`,
              }}
              onTouchstart={handleTouchstart}
            />
          </div>
        </transition>
      </div>
    )
  },
})

export const _ScrollerComponent = ScrollerPlugin

export default ScrollerPlugin
