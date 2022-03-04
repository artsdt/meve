import Popover from '../popover'
import Ripple from '../ripple'
import Icon from '../icon'
import { createNamespace } from '../utils/create'
import { isArray, isFunction, isNumber, isString } from '../utils/shared'
import { props } from './props'

import '../styles/common.less'
import '../icon/icon.less'
import '../popover/popover.less'
import '../ripple/ripple.less'
import './dropdown.less'

const { namespace, createComponent } = createNamespace('dropdown')

const DropdownPlugin = createComponent({
  props,
  directives: { Ripple },

  methods: {
    handleCellClick(event, option) {
      if (option.disabled || isArray(option[this.childrenField])) {
        return
      }

      // Disable propagation to popover because the popover will trigger the reopening
      event.stopPropagation()

      this.$emit('select', option)

      this.$refs.popover.close()
    },

    renderIcon(option) {
      const icon = option[this.iconField]

      if (isFunction(icon)) {
        return icon(this.$createElement)
      }

      if (isString(icon)) {
        return <Icon dropdown-cover class={namespace('__icon')} name={icon} />
      }
    },

    renderLabel(option) {
      const label = option[this.labelField]

      if (isFunction(label)) {
        return label(this.$createElement)
      }

      if (isString(label) || isNumber(label)) {
        return <div class={namespace('__label')}>{label}</div>
      }
    },

    renderCell(option) {
      const { disabled } = option
      const children = option[this.childrenField]
      const key = option[this.keyField]

      return (
        <div
          key={key}
          class={[namespace('__cell'), namespace(`--${this.size}`), disabled ? namespace('--disabled') : null]}
          onClick={(event) => this.handleCellClick(event, option)}
          v-ripple={{ disabled }}
        >
          {this.renderIcon(option)}
          {this.renderLabel(option)}
          {isArray(children) && <Icon dropdown-cover class={namespace('__arrow')} name="arrow-right" />}
        </div>
      )
    },

    renderChildren(children) {
      return <div class={namespace('__wrapper')}>{this.renderOptions(children)}</div>
    },

    renderOptions(options) {
      return options.map((option) => {
        return isArray(option[this.childrenField]) ? (
          <Popover
            disabled={option.disabled}
            key={option[this.keyField]}
            x={4}
            trigger="click"
            placement="right-start"
            defaultStyle={false}
            scopedSlots={{
              trigger: () => this.renderCell(option),
            }}
          >
            {this.renderChildren(option[this.childrenField])}
          </Popover>
        ) : (
          this.renderCell(option)
        )
      })
    },
  },

  render() {
    const { options, disabled, renderOptions } = this

    return (
      <div class={namespace()}>
        <Popover
          ref="popover"
          y={4}
          disabled={disabled}
          trigger="click"
          defaultStyle={false}
          scopedSlots={{
            trigger: () => this.slots(),
          }}
          onOpen={() => this.$emit('open')}
          onOpened={() => this.$emit('opened')}
          onClose={() => this.$emit('close')}
          onClosed={() => this.$emit('closed')}
        >
          <div class={namespace('__wrapper')}>{renderOptions(options)}</div>
        </Popover>
      </div>
    )
  },
})

export const _DropdownComponent = DropdownPlugin

export default DropdownPlugin
