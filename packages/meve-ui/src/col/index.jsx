import { createNamespace } from '../utils/create'
import { createChildrenMixin } from '../utils/mixins/relation'
import { isPlainObject } from '../utils/shared'
import { props } from './props'

import '../styles/common.less'
import './col.less'

const { createComponent, namespace } = createNamespace('col')

const ColPlugin = createComponent({
  mixins: [createChildrenMixin('row')],

  props,

  computed: {
    padding() {
      return this.parent?.gutterNum / 2 ?? 0
    },
  },

  methods: {
    getSize(name, size) {
      const classes = []

      if (isPlainObject(size)) {
        const { span, offset } = size
        span && classes.push(namespace(`--span-${name}-${span}`))
        offset && classes.push(namespace(`--offset-${name}-${offset}`))
      } else {
        // size is string or number
        size && classes.push(namespace(`--span-${name}-${size}`))
      }

      return classes
    },

    handleClick(e) {
      this.$emit('click', e)
    },
  },

  render() {
    const { padding, span, offset, getSize, xs, sm, md, lg, xl, handleClick } = this

    return (
      <div
        class={[
          namespace(),
          'm--box',
          span ? namespace(`--span-${span}`) : null,
          offset ? namespace(`--offset-${offset}`) : null,
          ...getSize('xs', xs),
          ...getSize('sm', sm),
          ...getSize('md', md),
          ...getSize('lg', lg),
          ...getSize('xl', xl),
        ]}
        style={{ padding: `0 ${padding}px` }}
        onClick={handleClick}
      >
        {this.slots()}
      </div>
    )
  },
})

export const _ColComponent = ColPlugin

export default ColPlugin
