import Button from '../button'
import Icon from '../icon'
import { createNamespace } from '../utils/create'
import { props } from './props'

import '../styles/common.less'
import '../button/button.less'
import '../icon/icon.less'
import './tag.less'

const { createComponent, namespace } = createNamespace('tag')

const TagPlugin = createComponent({
  props,

  methods: {
    handleClick(event) {
      if (this.disabled) {
        return
      }

      this.$emit('click', event)
    },

    handleTouchstart(event) {
      if (this.disabled) {
        return
      }

      this.$emit('touchstart', event)
    },

    handleCloseClick(event) {
      event.stopPropagation()

      if (this.disabled) {
        return
      }

      this.$emit('click', event)

      if (this.readonly) {
        return
      }

      this.$emit('close')
    },

    renderClose() {
      if (!this.closeable) {
        return
      }

      return (
        <Button
          class={namespace('__close-button')}
          tag-cover
          text
          round
          disabled={this.disabled}
          onClick={this.handleCloseClick}
        >
          <Icon class={namespace('__close-icon')} tag-cover name="close" size={this.closeIconSize} />
        </Button>
      )
    },
  },

  render() {
    const { size, disabled, block, text, outline, type } = this

    return (
      <div
        class={[
          namespace(),
          'm--box',
          namespace(`--${size}`),
          block ? `m--flex ${namespace('--block')}` : 'm--inline-flex',
          text ? namespace(`--text-${type}`) : namespace(`--${type}`),
          text ? namespace('--text') : null,
          outline ? namespace('--outline') : null,
          !text && disabled ? namespace('--disabled') : null,
          text && disabled ? namespace('--text-disabled') : null,
        ]}
        onClick={this.handleClick}
        onTouchstart={this.handleTouchstart}
      >
        <div class={namespace('__content')}>
          {this.slots()}
          {this.renderClose()}
        </div>
      </div>
    )
  },
})

export const _TagComponent = TagPlugin

export default TagPlugin
