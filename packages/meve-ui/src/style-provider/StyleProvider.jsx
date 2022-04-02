import { createNamespace } from '../utils/create'
import { formatStyleVars } from '../utils/elements'

import '../styles/common.less'

const { createComponent, namespace } = createNamespace('style-provider')

const StyleProviderPlugin = createComponent({
  props: {
    styleVars: {
      type: Object,
      default: () => ({}),
    },
  },

  render() {
    return (
      <div class={namespace()} style={formatStyleVars(this.styleVars)}>
        {this.slots()}
      </div>
    )
  },
})

export const _StyleProviderComponent = StyleProviderPlugin

export default StyleProviderPlugin
