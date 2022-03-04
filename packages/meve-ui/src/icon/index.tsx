import { createNamespace, emit, inherit } from '../utils/create'
import { CreateElement, RenderContext } from 'vue'
import { props, IconProps, IconEvents } from './props'
import { toSizeUnit } from '../utils/elements'

import '../styles/common.less'
import './icon.less'

const { createComponent, namespace } = createNamespace('icon')

function Icon(h: CreateElement, props: IconProps, slots: {}, ctx: RenderContext<IconProps>) {
  const { color, size, name, namespace: prefix } = props

  const onClick = (event: Event) => emit(ctx, 'click', event)

  return (
    <i
      class={[namespace(), 'm--box', `${prefix}--set`, `${prefix}-${name}`]}
      style={{
        color,
        fontSize: toSizeUnit(size),
      }}
      onClick={onClick}
      {...inherit(ctx)}
    />
  )
}

Icon.props = props

const IconPlugin = createComponent<IconProps, IconEvents, {}>(Icon)

export const _IconComponent = IconPlugin

export default IconPlugin
