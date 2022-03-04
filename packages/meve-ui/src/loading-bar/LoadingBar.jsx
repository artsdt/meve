import context from '../context'
import { createNamespace } from '../utils/create'

import '../styles/common.less'
import './loadingBar.less'

const { createComponent, namespace } = createNamespace('loading-bar')

const LoadingBarPlugin = createComponent({
  data: () => ({
    value: 0,
    opacity: 0,
    transition: undefined,
    error: false,
  }),

  render() {
    const { error, value, opacity, transition } = this

    return (
      <div
        class={[namespace(), error && namespace('--error')]}
        style={{
          zIndex: context.zIndex,
          width: `${value}%`,
          transition,
          opacity,
        }}
      ></div>
    )
  },
})

export const _LoadingBarComponent = LoadingBarPlugin

export default LoadingBarPlugin
