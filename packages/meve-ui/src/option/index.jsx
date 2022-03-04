import Ripple from '../ripple'
import { createNamespace } from '../utils/create'
import { props } from './props'
import { createChildrenMixin } from '../utils/mixins/relation'

import '../styles/common.less'
import '../ripple/ripple.less'
import './option.less'

const { createComponent, namespace } = createNamespace('option')

const OptionPlugin = createComponent({
  mixins: [createChildrenMixin('select', { parentKey: 'select', childrenKey: 'options' })],

  directives: { Ripple },

  props,

  computed: {
    selected() {
      const value = this.value ?? this.label
      const selectValue = this.select?.value

      return this.select?.multiple ? selectValue.includes(value) : selectValue === value
    },
  },

  methods: {
    handleMouseenter() {
      if (this.disabled) {
        return
      }

      this.select?.onOptionEnter(this)
    },

    handleClick() {
      if (this.disabled) {
        return
      }

      this.select?.onOptionSelect(this)
    },

    renderLabel() {
      if (this.hasSlots()) {
        return this.slots()
      }

      return this.label
    },
  },

  render() {
    const { index, selected, handleMouseenter, disabled, handleClick, select } = this

    return (
      <div
        class={[
          namespace(),
          namespace(`--${select?.size}`),
          disabled ? namespace('--disabled') : null,
          index === select?.keyboardActiveIndex ? namespace('--key-active') : null,
          selected ? namespace('--selected') : null,
        ]}
        onMouseenter={handleMouseenter}
        onClick={handleClick}
        v-ripple={{ disabled }}
      >
        {this.renderLabel()}
      </div>
    )
  },
})

export const _OptionComponent = OptionPlugin

export default OptionPlugin
