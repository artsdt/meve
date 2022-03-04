import { createNamespace } from '../utils/create'
import { props } from './props'
import { createParentMixin } from '../utils/mixins/relation'

import '../styles/common.less'
import './breadcrumb.less'

const { createComponent, namespace } = createNamespace('breadcrumb')

const BreadcrumbPlugin = createComponent({
  mixins: [createParentMixin('breadcrumb')],
  props,

  render() {
    return <div class={namespace()}>{this.slots()}</div>
  },
})

export const _BreadcrumbComponent = BreadcrumbPlugin

export default BreadcrumbPlugin
