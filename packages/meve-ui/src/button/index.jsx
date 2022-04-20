import Ripple from '../ripple'
import Loading from '../loading'
import { createNamespace } from '../utils/create'
import { props } from './props'

import '../styles/common.less'
import '../ripple/ripple.less'
import '../loading/loading.less'
import './button.less'

const { createComponent, namespace } = createNamespace('button')

const ButtonPlugin = createComponent({
  props,

  directives: { Ripple },

  data: () => ({
    pending: false,
  }),

  methods: {
    handleClick(event) {
      if (this.disabled || this.loading || this.pending) {
        return
      }

      if (!this.$listeners.click) {
        return
      }

      this.attemptAutoLoading(this.$listeners.click(event))
    },

    handleTouchstart(event) {
      if (this.disabled || this.loading || this.pending) {
        return
      }

      if (!this.$listeners.touchstart) {
        return
      }

      this.attemptAutoLoading(this.$listeners.touchstart(event))
    },

    attemptAutoLoading(result) {
      if (this.autoLoading) {
        this.pending = true

        Promise.resolve(result).finally(() => {
          this.pending = false
        })
      }
    },

    renderLoading() {
      if (this.loading || this.pending) {
        return (
          <Loading
            button-cover
            class={namespace('__loading')}
            svgClass={namespace(`--${this.size}-loading`)}
            loading={this.loading || this.pending}
            size={this.loadingSize}
          />
        )
      }
    },
  },

  render() {
    const { size, disabled, block, text, round, outline, ripple, type, loading, pending } = this

    return (
      <button
        class={[
          namespace(),
          'm--box',
          namespace(`--${size}`),
          block ? `m--flex ${namespace('--block')}` : 'm--inline-flex',
          text ? namespace(`--text-${type}`) : namespace(`--${type}`),
          text ? namespace('--text') : namespace('--shadow'),
          round ? namespace('--round') : null,
          outline ? namespace('--outline') : null,
          !text && disabled ? namespace('--disabled') : null,
          text && disabled ? namespace('--text-disabled') : null,
        ]}
        tabIndex="-1"
        disabled={disabled}
        v-ripple={{ disabled: disabled || !ripple || loading || pending }}
        onClick={this.handleClick}
        onTouchstart={this.handleTouchstart}
      >
        <div class={namespace('__content')}>{this.slots()}</div>
        {this.renderLoading()}
      </button>
    )
  },
})

export const _ButtonComponent = ButtonPlugin

export default ButtonPlugin
