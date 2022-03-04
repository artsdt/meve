import Teleport from '../teleport'
import context from '../context'
import { props } from './props'
import { createNamespace } from '../utils/create'
import { doubleRaf, getLeft, getTop, toPxNum } from '../utils/elements'
import { createChildrenMixin, createParentMixin } from '../utils/mixins/relation'
import { createZIndexMixin } from '../utils/mixins/zIndex'

import '../styles/common.less'
import './popover.less'

const { namespace, createComponent } = createNamespace('popover')

const transformOrigins = {
  bottom: 'top',
  'bottom-start': 'left top',
  'bottom-end': 'right top',
  top: 'bottom',
  'top-start': 'left bottom',
  'top-end': 'right bottom',
  left: 'right',
  'left-start': 'right top',
  'left-end': 'right bottom',
  right: 'left',
  'right-start': 'left top',
  'right-end': 'left bottom',
}

const PopoverPlugin = createComponent({
  mixins: [createParentMixin('popover'), createChildrenMixin('popover'), createZIndexMixin('show')],
  props,

  watch: {
    placement: {
      handler(newValue) {
        this.localPlacement = newValue

        if (this.show) {
          this.open()
          return
        }

        this.inset = this.getDefaultInset()
      },
      immediate: true,
    },
  },

  data: () => ({
    triggerWidth: undefined,
    show: false,
    inset: {},
    zIndex: context.zIndex++,
    closeAnimation: null,
    hover: false,
    opener: null,
    closer: null,
    localPlacement: null,
    clickSelf: false,
  }),

  mounted() {
    window.addEventListener('resize', this.resize)
  },

  beforeDestroy() {
    document.removeEventListener('click', this.handleClickBlur)
    window.removeEventListener('resize', this.resize)
  },

  methods: {
    getDefaultInset() {
      return {
        transform: 'scale(0.8)',
        transformOrigin: transformOrigins[this.localPlacement],
        opacity: 0,
      }
    },

    handleClick(event) {
      if (this.trigger !== 'click' || this.disabled) {
        return
      }

      if (this.parent) {
        event.stopPropagation()
      }

      this.clickSelf = true

      document.addEventListener('click', this.handleClickBlur)

      this.closeSibling()
      this.closeChildren()
      this.open()
    },

    handleClickBlur() {
      if (this.clickSelf) {
        this.clickSelf = false
        return
      }

      this.close()
    },

    handleMouseEnter() {
      if (this.trigger !== 'hover' || this.disabled) {
        return
      }

      this.clearParentsCloser()
      this.hover = true
      this.opener = setTimeout(this.open, 100)
    },

    handleMouseLeave() {
      if (this.trigger !== 'hover' || this.disabled) {
        return
      }

      this.hover = false

      clearTimeout(this.opener)

      this.closer = setTimeout(() => {
        this.close(true)
        this.checkParentsHoverDoClose()
      }, 250)
    },

    clearParentsCloser() {
      const parents = this.findParents()
      parents.forEach((parent) => clearTimeout(parent.closer))
      clearTimeout(this.closer)
    },

    findParents() {
      const parents = []
      let parent = this.parent

      while (parent) {
        parents.push(parent)
        parent = parent.parent
      }

      return parents
    },

    checkParentsHoverDoClose() {
      const parents = this.findParents()

      if (!parents.some((parent) => parent.hover)) {
        parents.forEach((parent) => parent.close(true))
      }
    },

    closeSibling() {
      if (this.parent) {
        this.parent.children.forEach((child) => {
          if (child !== this) {
            child.close()
          }
        })
      }
    },

    closeChildren() {
      this.children.forEach((child) => child.close())
    },

    async open() {
      if (this.show) {
        return
      }

      clearTimeout(this.closeAnimation)

      this.$emit('open')
      this.parent?.open()
      this.show = true
      this.triggerWidth = this.$refs.trigger.offsetWidth
      await doubleRaf()
      this.resize()
    },

    close(onlySelf = false) {
      if (!this.show) {
        return
      }

      if (this.trigger === 'click') {
        document.removeEventListener('click', this.handleClickBlur)
      }

      this.$emit('close')

      this.resizeDefault()

      if (!onlySelf) {
        this.closeChildren()
      }

      this.closeAnimation = setTimeout(() => {
        if (this.closeAnimation) {
          this.show = false
          this.$emit('closed')
        }
      }, 250)
    },

    resize() {
      if (!this.show) {
        return
      }
      this.inset = this.getInset()
    },

    resizeDefault() {
      this.inset = { ...this.inset, ...this.getDefaultInset() }
    },

    computeInset(trigger, container, placement, x, y) {
      let top = 0
      let left = 0
      const width = trigger.offsetWidth
      const height = trigger.offsetHeight
      const cWidth = container.offsetWidth
      const cHeight = container.offsetHeight

      if (['bottom', 'top'].includes(placement)) {
        left -= cWidth / 2
      }

      if (['left', 'left-start', 'left-end', 'top-end', 'bottom-end'].includes(placement)) {
        left -= cWidth
      }

      if (['top', 'top-start', 'top-end', 'left-end', 'right-end'].includes(placement)) {
        top -= cHeight
      }

      if (['left', 'right'].includes(placement)) {
        top -= cHeight / 2
      }

      if (['bottom', 'left-end', 'right-end', 'bottom-start', 'bottom-end'].includes(placement)) {
        top = top + getTop(trigger) + height
      }

      if (['top', 'top-start', 'top-end', 'left-start', 'right-start'].includes(placement)) {
        top += getTop(trigger)
      }

      if (['left', 'right'].includes(placement)) {
        top = top + getTop(trigger) + height / 2
      }

      if (['left', 'left-start', 'left-end', 'top-start', 'bottom-start'].includes(placement)) {
        left += getLeft(trigger)
      }

      if (['right', 'right-start', 'right-end', 'top-end', 'bottom-end'].includes(placement)) {
        left = left + getLeft(trigger) + width
      }

      if (['bottom', 'top'].includes(placement)) {
        left = left + getLeft(trigger) + width / 2
      }

      return {
        top: Math.floor(top + y),
        left: Math.floor(left + x),
      }
    },

    getInset() {
      this.localPlacement = this.placement
      const { trigger, container } = this.$refs

      if (!trigger || !container) {
        return {}
      }

      this.triggerWidth = this.$refs.trigger.offsetWidth
      const bodyWidth = document.body.scrollWidth
      const bodyHeight = document.body.scrollHeight
      const cWidth = container.offsetWidth
      const cHeight = container.offsetHeight

      let { x, y } = this
      x = toPxNum(x)
      y = toPxNum(y)

      const { left: possibleLeft, top: possibleTop } = this.computeInset(trigger, container, this.localPlacement, x, y)
      const fullWidth = possibleLeft + cWidth
      const fullHeight = possibleTop + cHeight
      const inYClient = fullHeight <= bodyHeight && possibleTop >= 0
      const inXClient = possibleLeft >= 0 && fullWidth <= bodyWidth
      const exceedLeft = possibleLeft < 0
      const exceedRight = fullWidth > bodyWidth
      const exceedTop = possibleTop < 0
      const exceedBottom = fullHeight > bodyHeight
      const { localPlacement: placement } = this
      const dashRE = /(-\w+)|$/

      if (exceedLeft && inYClient) {
        this.localPlacement = placement.includes('left')
          ? placement.replace('left', 'right')
          : placement.replace(dashRE, '-start')
      } else if (exceedRight && inYClient) {
        this.localPlacement = placement.includes('right')
          ? placement.replace('right', 'left')
          : placement.replace(dashRE, '-end')
      } else if (exceedTop && inXClient) {
        this.localPlacement = placement.includes('top')
          ? placement.replace('top', 'bottom')
          : placement.replace(dashRE, '-start')
      } else if (exceedBottom && inXClient) {
        this.localPlacement = placement.includes('bottom')
          ? placement.replace('bottom', 'top')
          : placement.replace(dashRE, '-end')
      } else if (exceedLeft && exceedBottom) {
        this.localPlacement = 'right-end'
      } else if (exceedLeft && exceedTop) {
        this.localPlacement = 'right-start'
      } else if (exceedRight && exceedTop) {
        this.localPlacement = 'left-start'
      } else if (exceedRight && exceedBottom) {
        this.localPlacement = 'left-end'
      }

      const { top, left } = this.computeInset(trigger, container, this.localPlacement, x, y)

      return {
        top: top + 'px',
        left: left + 'px',
        transform: 'scale(1)',
        transformOrigin: transformOrigins[this.localPlacement],
      }
    },

    handleTransitionEnd(event) {
      if (
        event.propertyName === 'opacity' &&
        event.currentTarget === event.target &&
        window.getComputedStyle(event.currentTarget).opacity === '1'
      ) {
        this.$emit('opened')
      }
    },
  },

  render() {
    const {
      show,
      inset,
      zIndex,
      defaultStyle,
      sameWidth,
      triggerWidth,
      handleClick,
      handleMouseEnter,
      handleMouseLeave,
      handleTransitionEnd,
    } = this

    return (
      <div
        ref="trigger"
        class={namespace()}
        onClick={handleClick}
        onMouseenter={handleMouseEnter}
        onMouseleave={handleMouseLeave}
      >
        {this.slots('trigger')}

        <Teleport ref="teleport" to="body">
          <div
            ref="container"
            class={[namespace('__container'), defaultStyle ? namespace('--default-style') : null]}
            style={{
              ...inset,
              zIndex,
              width: sameWidth ? `${triggerWidth}px` : undefined,
            }}
            onTransitionend={handleTransitionEnd}
            onMouseenter={handleMouseEnter}
            onMouseleave={handleMouseLeave}
            onClick={handleClick}
            v-show={show}
          >
            {this.slots()}
          </div>
        </Teleport>
      </div>
    )
  },
})

export const _PopoverComponent = PopoverPlugin

export default PopoverPlugin
