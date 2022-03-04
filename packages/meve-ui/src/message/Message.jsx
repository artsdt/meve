import Icon from '../icon'
import Loading from '../loading'
import Button from '../button'
import context from '../context'
import { createNamespace } from '../utils/create'
import { props } from './props'
import { removeItem, toNumber } from '../utils/shared'

import '../styles/common.less'
import '../button/button.less'
import './message.less'

const { createComponent, namespace } = createNamespace('message')

const typeIcons = {
  info: 'information',
  warning: 'warning',
  error: 'error',
  success: 'checkbox-marked-circle',
}

const MessagePlugin = createComponent({
  props,
  data: () => ({
    forbidClick: false,
    messages: [],
  }),

  methods: {
    createMessage(message) {
      if (message.lockScroll) {
        document.body.classList.add('m--lock')
      }

      if (message.forbidClick) {
        this.forbidClick = true
      }

      this.messages.push(message)
      context.zIndex++
      if (message.duration !== Infinity) {
        setTimeout(() => this.removeMessage(message), message.duration)
      }
    },

    removeMessage(message) {
      if (!this.messages.includes(message)) {
        return
      }

      removeItem(this.messages, message)
      this.$emit('remove', message.id)

      const hasLockScrollMessage = this.messages.some((m) => m.lockScroll)
      const hasForbidClickMessage = this.messages.some((m) => m.forbidClick)

      if (!hasLockScrollMessage) {
        document.body.classList.remove('m--lock')
      }

      if (!hasForbidClickMessage) {
        this.forbidClick = false
      }
    },

    handleLeave(el) {
      this.$emit('leave', toNumber(el.getAttribute('item-id')))
    },

    handleAfterLeave(el) {
      this.$emit('after-leave', toNumber(el.getAttribute('item-id')))
    },

    renderTypeIcon(type) {
      if (type === 'loading') {
        return <Loading message-cover class={namespace('__loading')} loading={true} />
      }

      return <Icon message-cover class={namespace('__icon')} name={typeIcons[type]} />
    },

    renderMessageItem() {
      return this.messages.map((message) => (
        <div item-id={message.id} key={message.id} class={namespace('__item')}>
          <div class={[namespace('__message-item'), namespace(`--${message.type}`)]}>
            <div class={namespace('__main')}>
              {this.renderTypeIcon(message.type)}
              <div class={namespace('__content')}>{message.content}</div>
            </div>
            {message.closeable && (
              <Button
                message-cover
                size="mini"
                class={namespace('__close-button')}
                text={true}
                round={true}
                onClick={() => this.removeMessage(message)}
              >
                <Icon message-cover class={namespace('__close-icon')} name="close" />
              </Button>
            )}
          </div>
        </div>
      ))
    },
  },

  render() {
    return (
      <div
        class={[namespace(), 'm--box', this.forbidClick && namespace('--forbid-click')]}
        style={{ zIndex: context.zIndex }}
      >
        <transition-group
          class={[namespace('__list'), namespace(`--${this.position}`)]}
          tag="ul"
          name="m-message-fade"
          onLeave={this.handleLeave}
          onAfterLeave={this.handleAfterLeave}
        >
          {this.renderMessageItem()}
        </transition-group>
      </div>
    )
  },
})

export const _MessageComponent = MessagePlugin

export default MessagePlugin
