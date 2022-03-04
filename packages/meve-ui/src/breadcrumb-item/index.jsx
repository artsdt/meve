import { createNamespace } from '../utils/create'
import { props } from './props'
import { createChildrenMixin } from '../utils/mixins/relation'

import '../styles/common.less'
import './breadcrumbItem.less'

const { createComponent, namespace } = createNamespace('breadcrumb-item')

const BreadcrumbItemPlugin = createComponent({
  mixins: [createChildrenMixin('breadcrumb')],
  props,

  computed: {
    last() {
      return this.index === this.parent.children.length - 1
    },
  },

  methods: {
    renderSeparator() {
      if (this.last) {
        return
      }

      if (this.hasSlots('separator')) {
        return this.slots('separator')
      }

      return <div class={namespace('__separator')}>{this.separator ?? this.parent.separator}</div>
    },
  },

  render() {
    return (
      <div class={namespace()}>
        <div class={[namespace('__content'), !this.last ? namespace('--active') : null]}>{this.slots()}</div>
        {this.renderSeparator()}
      </div>
    )
  },
})

export const _BreadcrumbItemComponent = BreadcrumbItemPlugin

export default BreadcrumbItemPlugin
