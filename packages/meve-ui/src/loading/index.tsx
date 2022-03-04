import { createNamespace, inherit } from '../utils/create'
import { CreateElement, RenderContext } from 'vue'
import { props, LoadingProps, LoadingSlots } from './props'
import { toSizeUnit } from '../utils/elements'

import '../styles/common.less'
import './loading.less'

const { createComponent, namespace } = createNamespace('loading')

function Loading(h: CreateElement, props: LoadingProps, slots: LoadingSlots, ctx: RenderContext) {
  const { color, size, loading, description, rotate } = props
  const loadingSize = toSizeUnit(size)

  const getOpacityClass = () =>
    loading && slots.default ? namespace('--opacity-visible') : namespace('--opacity-hidden')

  const getAllowTouchClass = () => !loading && namespace('--allow-touch')

  const getOverlayClass = () => slots.default && namespace('--overlay')

  const getRotateClass = () => rotate && namespace('--rotate')

  const getDescription = () => {
    if (slots.description) {
      return slots.description?.()
    }

    if (description) {
      return <div class={namespace('__description')}>{description}</div>
    }
  }

  const renderSvg = () => {
    return (
      <svg
        style={{
          width: loadingSize,
          height: loadingSize,
          color,
        }}
        viewBox="25 25 50 50"
      >
        <circle cx="50" cy="50" r="20" fill="none" />
      </svg>
    )
  }

  const renderMask = () => {
    return (
      <div class={[namespace('__mask-container'), getAllowTouchClass(), getOverlayClass()]}>
        <div class={[namespace('__mask'), getOpacityClass()]} />
        <div class={[namespace('__circle'), getRotateClass()]} v-show={loading}>
          {slots.icon?.() ?? renderSvg()}
        </div>
        <div class={namespace('__description-container')} style={{ color }} v-show={loading}>
          {getDescription()}
        </div>
      </div>
    )
  }

  return (
    <div class={[namespace(), 'm--box']} {...inherit(ctx)}>
      {slots.default?.()}

      {renderMask()}
    </div>
  )
}

Loading.props = props

const LoadingPlugin = createComponent<LoadingProps, {}, LoadingSlots>(Loading)

export const _LoadingComponent = LoadingPlugin

export default LoadingPlugin
