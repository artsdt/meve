import { props } from './props'
import { createNamespace } from '../utils/create'
import { createZIndexMixin } from '../utils/mixins/zIndex'
import { createLockMixin } from '../context/lock'
import { createRouterMixin } from '../utils/mixins/router'

import '../styles/common.less'
import './popup.less'

const { createComponent, namespace } = createNamespace('popup')

const PopupPlugin = createComponent({
  inheritAttrs: false,

  mixins: [createZIndexMixin('value'), createLockMixin('value', 'lockScroll'), createRouterMixin()],

  props,

  watch: {
    value(newValue) {
      this.$emit(newValue ? 'open' : 'close')
    },
  },

  methods: {
    hidePopup() {
      this.$emit('clickOverlay')

      if (!this.closeOnClickOverlay) {
        return
      }

      this.$emit('input', false)
    },

    renderOverlay() {
      const { overlayClass, overlayStyle } = this

      return (
        <div
          class={[namespace('__overlay'), overlayClass]}
          style={{
            zIndex: this.zIndex - 1,
            ...overlayStyle,
          }}
          onClick={this.hidePopup}
        />
      )
    },

    renderContent() {
      return (
        <div
          class={[namespace('__content'), namespace(`--${this.position}`)]}
          style={{ zIndex: this.zIndex }}
          {...{ attrs: this.$attrs }}
        >
          {this.slots()}
        </div>
      )
    },

    handleAfterEnter() {
      this.$emit('opened')
    },

    handleAfterLeave() {
      this.$emit('closed')
    },

    // for router mixin
    handleRouteChange() {
      this.$emit('routeChange')
    },
  },

  render() {
    const { value, overlay, position } = this

    return (
      <transition name="m-fade" onAfterEnter={this.handleAfterEnter} onAfterLeave={this.handleAfterLeave}>
        <div class={['m--box', namespace()]} style={{ zIndex: this.zIndex - 2 }} v-show={value}>
          {overlay && this.renderOverlay()}
          <transition name={`m-pop-${position}`}>{value && this.renderContent()}</transition>
        </div>
      </transition>
    )
  },
})

export const _PopupComponent = PopupPlugin

export default PopupPlugin
