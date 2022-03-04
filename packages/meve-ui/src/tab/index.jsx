import Ripple from '../ripple'
import { createNamespace } from '../utils/create'
import { createChildrenMixin } from '../utils/mixins/relation'
import { props } from './props'

import '../styles/common.less'
import '../ripple/ripple.less'
import './tab.less'

const { createComponent, namespace } = createNamespace('tab')

const TabPlugin = createComponent({
  mixins: [createChildrenMixin('tabs')],
  directives: { Ripple },
  props,

  data: () => ({
    scrollable: false,
  }),

  computed: {
    last() {
      return this.parent?.children.length === this.index + 1
    },

    first() {
      return this.index === 0
    },
  },

  watch: {
    name() {
      this.parent?.resize()
    },

    disabled() {
      this.parent?.resize()
    },
  },

  methods: {
    computeColorStyle() {
      if (!this.parent) {
        return
      }

      const { disabled, name, index } = this
      const { disabledColor, activeColor, inactiveColor, value } = this.parent

      return disabled ? disabledColor : value === name || value === index ? activeColor : inactiveColor
    },

    computeBackgroundStyle() {
      const { disabled, name, index } = this

      if (!this.parent) {
        return
      }

      const { disabledBackground, activeBackground, inactiveBackground, value } = this.parent

      return disabled ? disabledBackground : value === name || value === index ? activeBackground : inactiveBackground
    },

    computeColorClass() {
      const { disabled, name, index } = this

      if (!this.parent) {
        return
      }

      const { value } = this.parent

      return disabled
        ? namespace('--disabled')
        : value === name || value === index
        ? namespace('--active')
        : namespace('--inactive')
    },

    computeClearMargin() {
      const { first, last } = this
      const { layoutDirection } = this.parent ?? {}

      if (layoutDirection === 'vertical') {
        return [first ? namespace('--clear-margin-top') : null, last ? namespace('--clear-margin-bottom') : null]
      }

      return [first ? namespace('--clear-margin-left') : null, last ? namespace('--clear-margin-right') : null]
    },

    handleClick(event) {
      const { disabled, name, index } = this

      if (disabled) {
        return
      }

      this.$emit('click', name ?? index, event)
      this.parent?.onTabClick(this)
    },
  },

  render() {
    const { disabled, computeColorClass, computeColorStyle, computeBackgroundStyle, computeClearMargin, handleClick } =
      this
    const { itemDirection, layoutDirection } = this.parent ?? {}

    return (
      <div
        ref="tab"
        class={[namespace(), 'm--box', namespace(`--${layoutDirection}-margin`), ...computeClearMargin()]}
        onClick={handleClick}
      >
        <div
          class={[namespace('__content'), computeColorClass(), namespace(`--${itemDirection}`)]}
          style={{
            color: computeColorStyle(),
            background: computeBackgroundStyle(),
          }}
          v-ripple={{ disabled }}
        >
          {this.slots()}
        </div>
      </div>
    )
  },
})

export const _TabComponent = TabPlugin

export default TabPlugin
