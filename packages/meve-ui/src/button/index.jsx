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

  methods: {
    handleClick(event) {
      if (this.disabled || this.loading) {
        return
      }

      this.$emit('click', event)
    },

    handleTouchstart(event) {
      if (this.disabled || this.loading) {
        return
      }

      this.$emit('touchstart', event)
    },
  },

  render() {
    const { size, disabled, block, text, round, outline, ripple, type, loading, loadingSize } = this

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
        v-ripple={{ disabled: disabled || !ripple }}
        onClick={this.handleClick}
        onTouchstart={this.handleTouchstart}
      >
        <div class={namespace('__content')}>{this.slots()}</div>
        {loading && (
          <Loading
            button-cover
            class={namespace('__loading')}
            svgClass={namespace(`--${size}-loading`)}
            loading={loading}
            size={loadingSize}
          />
        )}
      </button>
    )
  },
})

export const _ButtonComponent = ButtonPlugin

export default ButtonPlugin
