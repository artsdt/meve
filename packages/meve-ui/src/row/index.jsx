import { createNamespace } from '../utils/create'
import { createParentMixin } from '../utils/mixins/relation'
import { toPxNum } from '../utils/elements'
import { props } from './props'

import '../styles/common.less'
import './row.less'

const { createComponent, namespace } = createNamespace('row')

const RowPlugin = createComponent({
  mixins: [createParentMixin('row')],

  props,

  computed: {
    gutterNum() {
      return toPxNum(this.gutter)
    },
  },

  methods: {
    handleClick(e) {
      this.$emit('click', e)
    },
  },

  render() {
    const { justify, align, gutterNum, handleClick } = this

    return (
      <div
        class={[namespace(), 'm--box']}
        style={{
          justifyContent: justify,
          alignItems: align,
          margin: `0 ${-gutterNum}px`,
        }}
        onClick={handleClick}
      >
        {this.slots()}
      </div>
    )
  },
})

export const _RowComponent = RowPlugin

export default RowPlugin
