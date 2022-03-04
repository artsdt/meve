import { createNamespace } from '../utils/create'
import { props } from './props'
import { createParentMixin } from '../utils/mixins/relation'
import { isNumber, toNumber } from '../../es/utils/shared'

import '../styles/common.less'
import './swipe.less'

const { namespace, createComponent } = createNamespace('swipe')

const SWIPE_DELAY = 250
const SWIPE_DISTANCE = 20

const SwipePlugin = createComponent({
  mixins: [createParentMixin('swipe')],
  props,

  data: () => ({
    size: 0,
    trackSize: 0,
    sizeUnit: 0,
    trackSizeUnit: 0,
    translate: 0,
    lockDuration: false,
    index: 0,
    touching: false,
    timer: -1,
    startX: undefined,
    startY: undefined,
    startTime: undefined,
    prevX: undefined,
    prevY: undefined,
  }),

  computed: {
    length() {
      return this.children.length
    },
  },

  watch: {
    children() {
      this.initIndex()
      this.resize()
    },
  },

  mounted() {
    window.addEventListener('resize', this.resize)
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.resize)
    this.stopAutoplay()
  },

  methods: {
    findSwipeItem(idx) {
      return this.children.find(({ index }) => index === idx)
    },

    dispatchBorrower() {
      const { translate, trackSize, size, loop, children } = this
      const { length } = children

      if (!loop) {
        return
      }

      // track越左边界
      if (translate >= 0) {
        this.findSwipeItem(length - 1).translate = -trackSize
      }
      // track越右边界
      if (translate <= -(trackSize - size)) {
        this.findSwipeItem(0).translate = trackSize
      }
      // track没越界
      if (translate > -(trackSize - size) && translate < 0) {
        this.findSwipeItem(length - 1).translate = 0
        this.findSwipeItem(0).translate = 0
      }
    },

    getSwipeIndex(targetSwipeIndex) {
      const { translate, size, loop, length } = this

      const swipeIndex = isNumber(targetSwipeIndex) ? targetSwipeIndex : Math.floor((translate - size / 2) / -size)

      if (swipeIndex <= -1) {
        return loop ? -1 : 0
      }

      if (swipeIndex >= length) {
        return loop ? length : length - 1
      }

      return swipeIndex
    },

    swipeIndexToIndex(swipeIndex) {
      const { loop, length } = this

      if (swipeIndex === -1) {
        return loop ? length - 1 : 0
      }

      if (swipeIndex === length) {
        return loop ? 0 : length - 1
      }

      return swipeIndex
    },

    boundaryIndex(index) {
      const { loop, length } = this

      if (index < 0) {
        return loop ? length - 1 : 0
      }

      if (index > length - 1) {
        return loop ? 0 : length - 1
      }

      return index
    },

    fixPosition(cb) {
      const { translate, size, length, trackSize } = this

      const overLeft = translate >= size
      const overRight = translate <= -trackSize
      const leftTranslate = 0
      const rightTranslate = -(trackSize - size)

      this.lockDuration = true
      // 检测是否有越界情况 越界修正
      if (overLeft || overRight) {
        this.lockDuration = true
        this.translate = overRight ? leftTranslate : rightTranslate
        this.findSwipeItem(0).translate = 0
        this.findSwipeItem(length - 1).translate = 0
      }

      requestAnimationFrame(() => {
        this.lockDuration = false
        cb()
      })
    },

    initIndex() {
      this.index = this.boundaryIndex(toNumber(this.initialIndex))
      this.resize()
    },

    startAutoplay() {
      const { autoplay, length } = this

      if (!autoplay || length <= 1) {
        return
      }

      this.stopAutoplay()

      this.timer = window.setTimeout(() => {
        this.next()
        this.startAutoplay()
      }, toNumber(autoplay))
    },

    stopAutoplay() {
      this.timer && clearTimeout(this.timer)
    },

    getDirection(x, y) {
      if (x > y && x > 10) {
        return 'horizontal'
      }

      if (y > x && y > 10) {
        return 'vertical'
      }
    },

    handleTouchstart(event) {
      if (this.length <= 1 || !this.touchable) {
        return
      }

      const { clientX, clientY } = event.touches[0]
      this.startX = clientX
      this.startY = clientY
      this.startTime = performance.now()
      this.touching = true
      this.stopAutoplay()

      this.fixPosition(() => {
        this.lockDuration = true
      })
    },

    handleTouchmove(event) {
      const { touchable, vertical, touching, startX, startY, prevX, prevY } = this

      if (!touching || !touchable) {
        return
      }

      const { clientX, clientY } = event.touches[0]
      const deltaX = Math.abs(clientX - startX)
      const deltaY = Math.abs(clientY - startY)
      const direction = this.getDirection(deltaX, deltaY)
      const expectDirection = vertical ? 'vertical' : 'horizontal'

      if (direction === expectDirection) {
        event.preventDefault()

        const moveX = prevX !== undefined ? clientX - prevX : 0
        const moveY = prevY !== undefined ? clientY - prevY : 0
        this.prevX = clientX
        this.prevY = clientY

        this.translate += vertical ? moveY : moveX

        this.dispatchBorrower()
      }
    },

    handleTouchend() {
      const { touching, vertical, startX, startY, prevX, prevY, startTime, index, size } = this

      if (!touching) {
        return
      }

      const positive = vertical ? prevY < startY : prevX < startX
      const distance = vertical ? Math.abs(startY - prevY) : Math.abs(startX - prevX)
      const quickSwiping = performance.now() - startTime <= SWIPE_DELAY && distance >= SWIPE_DISTANCE
      const swipeIndex = quickSwiping
        ? positive
          ? this.getSwipeIndex(index + 1)
          : this.getSwipeIndex(index - 1)
        : this.getSwipeIndex()

      this.touching = false
      this.lockDuration = false
      this.prevX = undefined
      this.prevY = undefined

      this.translate = swipeIndex * -size
      const prevIndex = index
      this.index = this.swipeIndexToIndex(swipeIndex)
      this.startAutoplay()

      prevIndex !== this.index && this.$emit('change', this.index)
    },

    resize() {
      this.lockDuration = true
      const {
        vertical,
        length,
        $refs: { swipe },
        index,
      } = this

      this.size = vertical ? swipe.offsetHeight : swipe.offsetWidth
      this.trackSize = this.size * length
      this.translate = index * -this.size
      this.children.forEach((child) => {
        child.translate = 0
      })

      this.startAutoplay()

      setTimeout(() => {
        this.lockDuration = false
      })
    },

    next() {
      const { length, loop, index, trackSize, size } = this

      if (length <= 1) {
        return
      }

      const currentIndex = index
      this.index = this.boundaryIndex(currentIndex + 1)
      this.$emit('change', this.index)

      this.fixPosition(() => {
        if (currentIndex === length - 1 && loop) {
          this.findSwipeItem(0).translate = trackSize
          this.translate = length * -size
          return
        }

        if (currentIndex !== length - 1) {
          this.translate = this.index * -size
        }
      })
    },

    prev() {
      const { length, loop, index, trackSize, size } = this

      if (length <= 1) {
        return
      }

      const currentIndex = index
      this.index = this.boundaryIndex(currentIndex - 1)
      this.$emit('change', this.index)

      this.fixPosition(() => {
        if (currentIndex === 0 && loop) {
          this.findSwipeItem(length - 1).translate = -trackSize
          this.translate = size
          return
        }

        if (currentIndex !== 0) {
          this.translate = this.index * -size
        }
      })
    },

    to(idx) {
      const { length, index } = this

      if (length <= 1 || idx === index) {
        return
      }

      idx = idx < 0 ? 0 : idx
      idx = idx >= length ? length : idx

      const task = idx > index ? this.next : this.prev

      Array.from({ length: Math.abs(idx - index) }).forEach(task)
    },

    renderIndicator() {
      const { index, length, indicator, vertical, indicatorColor } = this

      if (this.hasSlots('indicator')) {
        return this.slots('indicator', { index, length })
      }

      if (indicator && length) {
        return (
          <div class={[namespace('__indicators'), vertical ? namespace('--indicators-vertical') : null]}>
            {Array.from({ length }).map((_, idx) => {
              return (
                <div
                  key={idx}
                  class={[
                    namespace('__indicator'),
                    index === idx ? namespace('--indicator-active') : null,
                    vertical ? namespace('--indicator-vertical') : null,
                  ]}
                  style={{ background: indicatorColor }}
                  onClick={() => this.to(idx)}
                />
              )
            })}
          </div>
        )
      }
    },
  },

  render() {
    const { vertical, trackSize, translate, duration, lockDuration } = this

    return (
      <div ref="swipe" class={namespace()}>
        <div
          class={[namespace('__track'), vertical ? namespace('--vertical') : null]}
          style={{
            width: !vertical ? `${trackSize}px` : undefined,
            height: vertical ? `${trackSize}px` : undefined,
            transform: `translate${vertical ? 'Y' : 'X'}(${translate}px)`,
            transitionDuration: lockDuration ? `0ms` : `${toNumber(duration)}ms`,
          }}
          onTouchstart={this.handleTouchstart}
          onTouchmove={this.handleTouchmove}
          onTouchend={this.handleTouchend}
        >
          {this.slots()}
        </div>
        {this.renderIndicator()}
      </div>
    )
  },
})

export const _SwipeComponent = SwipePlugin

export default SwipePlugin
