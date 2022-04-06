import { createNamespace } from '../utils/create'
import { props } from './props'

import '../styles/common.less'
import './progress.less'
import { toSizeUnit } from '../utils/elements'

const { createComponent, namespace } = createNamespace('progress')

const ProgressPlugin = createComponent({
  props,

  methods: {
    renderLabel() {
      if (!this.label) {
        return
      }

      return <div class={namespace('__label')}>{this.hasSlots() ? this.slots() : `${this.value}%`}</div>
    },
  },

  render() {
    return (
      <div class={namespace()}>
        {this.renderLabel()}
        <div
          class={namespace('__track')}
          style={{
            background: this.trackColor,
            height: toSizeUnit(this.trackSize),
          }}
        >
          <div
            class={namespace('__bar')}
            style={{
              background: this.color,
              width: `${this.value}%`,
            }}
          />
        </div>
      </div>
    )
  },
})

export const _ProgressComponent = ProgressPlugin

export default ProgressPlugin
