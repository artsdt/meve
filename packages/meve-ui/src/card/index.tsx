import { createNamespace, inherit } from '../utils/create'
import { CreateElement, RenderContext } from 'vue'
import { CardSlots, CardProps } from './props'

import '../styles/common.less'
import './card.less'

const { createComponent, namespace } = createNamespace('card')

function Card(h: CreateElement, props: CardProps, slots: CardSlots, ctx: RenderContext<CardProps>) {
  const renderTitle = () => {
    if (slots.title) {
      return slots.title()
    }

    if (props.title) {
      return <div class={namespace('__title')}>{props.title}</div>
    }
  }

  const renderSubtitle = () => {
    if (slots.subtitle) {
      return slots.subtitle()
    }

    if (props.subtitle) {
      return <small class={namespace('__subtitle')}>{props.subtitle}</small>
    }
  }

  const renderTitleWrapper = () => {
    const title = renderTitle()
    const subtitle = renderSubtitle()

    if (title || subtitle) {
      return (
        <div class={namespace('__title-wrapper')}>
          {renderTitle()}
          {renderSubtitle()}
        </div>
      )
    }
  }

  const renderDescription = () => {
    if (slots.default) {
      return slots.default()
    }

    if (props.description) {
      return <div class={namespace('__description')}>{props.description}</div>
    }
  }

  return (
    <div class={namespace()} {...inherit(ctx)}>
      {renderTitleWrapper()}
      {renderDescription()}
      {slots.extra?.()}
    </div>
  )
}

const CardPlugin = createComponent<CardProps, {}, CardSlots>(Card)

export const _CardComponent = CardPlugin

export default CardPlugin
