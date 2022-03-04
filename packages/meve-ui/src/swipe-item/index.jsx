import { createNamespace } from '../utils/create'
import { createChildrenMixin } from '../utils/mixins/relation'

import './swipeItem.less'

const { namespace, createComponent } = createNamespace('swipe-item')

const SwipeItemPlugin = createComponent({
  mixins: [createChildrenMixin('swipe')],

  data: () => ({
    translate: 0,
  }),

  render() {
    const { parent, translate } = this

    return (
      <div
        class={namespace()}
        style={{
          width: !parent.vertical ? `${parent.size}px` : undefined,
          height: parent.vertical ? `${parent.size}px` : undefined,
          transform: `translate${parent.vertical ? 'Y' : 'X'}(${translate}px)`,
        }}
      >
        {this.slots()}
      </div>
    )
  },
})

export const _SwipeItemComponent = SwipeItemPlugin

export default SwipeItemPlugin
