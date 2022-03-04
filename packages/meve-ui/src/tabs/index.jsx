import Sticky from '../sticky'
import { createNamespace } from '../utils/create'
import { createParentMixin } from '../utils/mixins/relation'
import { isNumber } from '../utils/shared'
import { linear } from '../utils/animation'
import { scrollTo } from '../utils/elements'
import { props } from './props'

import '../styles/common.less'
import '../sticky/sticky.less'
import './tabs.less'

const { createComponent, namespace } = createNamespace('tabs')

const TabsPlugin = createComponent({
  mixins: [createParentMixin('tabs')],
  props,

  data: () => ({
    scrollable: false,
  }),

  watch: {
    children() {
      this.$nextTick(() => {
        this.resize()
      })
    },

    value() {
      this.resize()
    },
  },

  mounted() {
    window.addEventListener('resize', this.resize)
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.resize)
  },

  methods: {
    matchName() {
      return this.children.find(({ name }) => this.value === name)
    },

    matchIndex() {
      return this.children.find(({ index }) => this.value === index)
    },

    matchBoundary() {
      const { length } = this.children

      if (length === 0) {
        return
      }

      const { value } = this

      isNumber(value) ? (value > length - 1 ? this.$emit('input', length - 1) : this.$emit('input', 0)) : null

      return this.matchIndex()
    },

    watchScrollable() {
      this.scrollable = this.children.length >= 5
    },

    scrollToCenter(tab) {
      if (!this.scrollable) {
        return
      }

      const { scroller } = this.$refs
      const el = tab.$refs.tab

      if (this.layoutDirection === 'horizontal') {
        const left = el.offsetLeft + el.offsetWidth / 2 - scroller.offsetWidth / 2
        scrollTo(scroller, {
          left,
          animation: linear,
        })
      } else {
        const top = el.offsetTop + el.offsetHeight / 2 - scroller.offsetHeight / 2
        scrollTo(scroller, {
          top,
          animation: linear,
        })
      }
    },

    resize() {
      const tab = this.matchName() || this.matchIndex() || this.matchBoundary()
      if (!tab || tab.disabled) {
        return
      }

      this.watchScrollable()
      this.scrollToCenter(tab)
      this.sticky && this.$refs.sticky.handleScroll()
    },

    onTabClick(tab) {
      const currentActive = tab.name ?? tab.index
      const { value } = this

      this.$emit('click', currentActive)
      this.$emit('input', currentActive)
      currentActive !== value && this.$emit('change', currentActive)
    },

    renderTabs() {
      return (
        <div class={[namespace(), 'm--box', namespace(`--item-${this.itemDirection}`)]} {...{ attrs: this.$attrs }}>
          <div
            ref="scroller"
            class={[
              namespace('__tab-wrap'),
              namespace(`--layout-${this.layoutDirection}`),
              this.scrollable ? namespace(`--layout-${this.layoutDirection}-scrollable`) : null,
            ]}
          >
            {this.slots()}
          </div>
        </div>
      )
    },
  },

  render() {
    const { sticky, offsetTop } = this

    if (sticky) {
      return (
        <Sticky ref="sticky" offsetTop={offsetTop}>
          {this.renderTabs()}
        </Sticky>
      )
    }

    return this.renderTabs()
  },
})

export const _TabsComponent = TabsPlugin

export default TabsPlugin
