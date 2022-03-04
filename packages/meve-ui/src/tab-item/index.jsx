import SwipeItem from '../swipe-item'
import { createNamespace } from '../utils/create'
import { createChildrenMixin } from '../utils/mixins/relation'
import { props } from './props'

import '../styles/common.less'
import '../swipe-item/swipeItem.less'
import './tabItem.less'

const { createComponent, namespace } = createNamespace('tab-item')

const TabItemPlugin = createComponent({
  mixins: [createChildrenMixin('tabsItems')],
  props,

  data: () => ({
    current: false,
    initSlot: false,
  }),

  methods: {
    setCurrent(value) {
      if (!this.initSlot && value) {
        this.initSlot = true
      }

      this.current = value
    },
  },

  render() {
    return (
      <SwipeItem tab-item-cover class={[namespace(), this.current ? null : namespace('--inactive')]}>
        {this.initSlot && this.slots()}
      </SwipeItem>
    )
  },
})

export const _TabItemComponent = TabItemPlugin

export default TabItemPlugin
