import { createNamespace, inherit } from '../utils/create'
import { CreateElement, RenderContext } from 'vue'
import { props, SpaceProps, SpaceSlots, SpaceSize, SpaceInternalSize, internalSizeValidator } from './props'
import { toPxNum } from '../utils/elements'
import { isArray } from '../utils/shared'

import '../styles/common.less'
import './space.less'

const { createComponent, namespace } = createNamespace('space')

const internalSizes: Record<SpaceInternalSize, number[]> = {
  mini: [4, 4],
  small: [6, 6],
  normal: [8, 12],
  large: [12, 20],
}

const getSize = (size: SpaceSize, isInternalSize: boolean) => {
  return isInternalSize
    ? internalSizes[size as SpaceInternalSize]
    : isArray(size)
    ? size.map(toPxNum)
    : [toPxNum(size), toPxNum(size)]
}

function Space(h: CreateElement, props: SpaceProps, slots: SpaceSlots, ctx: RenderContext<SpaceProps>) {
  const { inline, justify, align, wrap, direction, size } = props
  const children = slots.default?.() ?? []
  const lastIndex = children.length - 1
  const isInternalSize = internalSizeValidator(size)
  const [y, x] = getSize(size!, isInternalSize)

  const spacers = children.map((child, index) => {
    let margin = '0'

    if (direction === 'row') {
      if (justify === 'start' || justify === 'center' || justify === 'end') {
        if (index !== lastIndex) {
          margin = `${y / 2}px ${x}px ${y / 2}px 0`
        } else {
          margin = `${y / 2}px 0`
        }
      } else if (justify === 'space-around') {
        margin = `${y / 2}px ${x / 2}px`
      } else if (justify === 'space-between') {
        if (index === 0) {
          margin = `${y / 2}px ${x / 2}px ${y / 2}px 0`
        } else if (index === lastIndex) {
          margin = `${y / 2}px 0 ${y / 2}px ${x / 2}px`
        } else {
          margin = `${y / 2}px ${x / 2}px`
        }
      }
    }

    if (direction === 'column' && index !== lastIndex) {
      margin = `0 0 ${y}px 0`
    }

    return <div style={{ margin }}>{child}</div>
  })

  return (
    <div
      class={[namespace(), 'm--box', inline ? 'm--inline-flex' : null]}
      style={{
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
        flexWrap: wrap ? 'wrap' : 'nowrap',
        margin: direction === 'row' ? `-${y / 2}px 0` : undefined,
      }}
      {...inherit(ctx)}
    >
      {spacers}
    </div>
  )
}

Space.props = props

const SpacePlugin = createComponent<SpaceProps, {}, SpaceSlots>(Space)

export const _SpaceComponent = SpacePlugin

export default SpacePlugin
