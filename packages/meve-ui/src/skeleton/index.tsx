import { createNamespace, inherit } from '../utils/create'
import { CreateElement, RenderContext } from 'vue'
import { props, SkeletonProps, SkeletonSlots } from './props'
import { toSizeUnit } from '../utils/elements'
import { toNumber } from '../utils/shared'

import '../styles/common.less'
import './skeleton.less'

const { createComponent, namespace } = createNamespace('skeleton')

function Skeleton(h: CreateElement, props: SkeletonProps, slots: SkeletonSlots, ctx: RenderContext<SkeletonProps>) {
  const {
    loading,
    avatar,
    avatarSize,
    title,
    titleWidth,
    rows,
    rowsWidth,
    fullscreen,
    card,
    cardHeight,
    fullscreenZIndex,
  } = props

  const renderData = () => {
    return <div class={namespace('__data')}>{slots.default?.()}</div>
  }

  const renderAvatar = () => {
    return (
      <div
        class={namespace('__avatar')}
        style={{
          width: toSizeUnit(avatarSize),
          height: toSizeUnit(avatarSize),
        }}
      >
        <div class={namespace('--animation')} />
      </div>
    )
  }

  const renderTitle = () => {
    return (
      <div class={namespace('__title')} style={{ width: toSizeUnit(titleWidth) }}>
        <div class={namespace('--animation')} />
      </div>
    )
  }

  const renderRow = () => {
    return Array.from({ length: toNumber(rows) }).map((row, index) => {
      return (
        <div class={namespace('__row')} key={row} style={{ width: toSizeUnit(rowsWidth![index]) }}>
          <div class={namespace('--animation')} />
        </div>
      )
    })
  }

  const renderCard = () => {
    return (
      <div class={namespace('__card')} style={{ height: toSizeUnit(cardHeight) }}>
        <div class={namespace('--animation')} />
      </div>
    )
  }

  const renderContent = () => {
    return (
      <div class={namespace('__content')}>
        {card && renderCard()}

        <div class={namespace('__article')}>
          {avatar && renderAvatar()}

          <div class={namespace('__section')}>
            {title && renderTitle()}
            {renderRow()}
          </div>
        </div>
      </div>
    )
  }

  const renderFullscreen = () => {
    return (
      <div class={namespace('__fullscreen')} style={{ zIndex: toNumber(fullscreenZIndex) }}>
        <div class={namespace('--animation')} />
      </div>
    )
  }

  return (
    <div class={[namespace(), 'm--box']} {...inherit(ctx)}>
      {!loading && renderData()}
      {loading && !fullscreen && renderContent()}
      {loading && fullscreen && renderFullscreen()}
    </div>
  )
}

Skeleton.props = props

const SkeletonPlugin = createComponent<SkeletonProps, {}, {}>(Skeleton)

export const _SkeletonComponent = SkeletonPlugin

export default SkeletonPlugin
