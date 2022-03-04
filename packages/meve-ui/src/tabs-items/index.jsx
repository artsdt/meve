import Swipe from '../swipe'
import { createNamespace } from '../utils/create'
import { createParentMixin } from '../utils/mixins/relation'
import { props } from './props'

import '../styles/common.less'
import '../swipe/swipe.less'

const { createComponent, namespace } = createNamespace('tabs-items')

const TabsItemsPlugin = createComponent({
  mixins: [createParentMixin('tabsItems')],
  props,

  watch: {
    value(newValue) {
      this.handleValueChange(newValue)
    },

    children() {
      this.handleValueChange(this.value)
    },
  },

  methods: {
    matchName(value) {
      return this.children.find(({ name }) => value === name)
    },

    matchIndex(value) {
      return this.children.find(({ index }) => value === index)
    },

    matchValue(value) {
      return this.matchName(value) || this.matchIndex(value)
    },

    handleValueChange(newValue) {
      const tabItem = this.matchValue(newValue)
      if (!tabItem) {
        return
      }

      this.children.forEach(({ setCurrent }) => setCurrent(false))
      tabItem.setCurrent(true)
      this.$refs.swipe.to(tabItem.index)
    },

    handleSwipeChange(currentIndex) {
      const tabItem = this.children.find(({ index }) => index === currentIndex)
      const value = tabItem.name ?? tabItem.index
      this.$emit('input', value)
    },
  },

  render() {
    return (
      <Swipe
        ref="swipe"
        class={namespace()}
        loop={this.loop}
        touchable={this.canSwipe}
        indicator={false}
        onChange={this.handleSwipeChange}
      >
        {this.slots()}
      </Swipe>
    )
  },
})

export const _TabsItemsComponent = TabsItemsPlugin

export default TabsItemsPlugin
