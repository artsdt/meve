import Icon from '../icon'
import Ripple from '../ripple'
import { isFunction, isPlainObject, isString } from '../utils/shared'
import { createNamespace } from '../utils/create'
import { createChildrenMixin } from '../utils/mixins/relation'
import { toPxNum } from '../utils/elements'
import { props } from './props'

import '../styles/common.less'
import '../ripple/ripple.less'
import '../icon/icon.less'
import './menuItem.less'

const { createComponent, namespace } = createNamespace('menu-item')

const MenuItemPlugin = createComponent({
  mixins: [
    createChildrenMixin('menu', { parentKey: 'menuParent', childrenKey: 'menuItems' }),
    createChildrenMixin('menuItemGroup', { parentKey: 'menuItemGroupParent', childrenKey: 'menuItems' }),
  ],

  directives: { Ripple },

  props,

  data: () => ({
    selected: false,
  }),

  methods: {
    renderIcon() {
      if (this.hasSlots('icon')) {
        return this.slots('icon')
      }

      const { icon } = this

      if (isFunction(icon)) {
        return icon(this.$createElement)
      }

      if (isPlainObject(icon)) {
        return <Icon class={namespace('__icon')} menu-item-cover {...{ props: icon }} />
      }

      if (isString(icon)) {
        return <Icon class={namespace('__icon')} menu-item-cover name={icon} />
      }
    },

    renderLabel() {
      if (this.hasSlots('label')) {
        return this.slots('label')
      }

      const { label } = this

      if (isFunction(label)) {
        return label(this.$createElement)
      }

      return <div class={namespace('__label')}>{label}</div>
    },

    handleClick() {
      if (this.disabled) {
        return
      }

      this.menuParent.onItemChange(this)
    },
  },

  render() {
    const { disabled, selected, menuParent, menuItemGroupParent } = this

    return (
      <div
        class={[
          namespace(),
          'm--box',
          selected ? namespace('--selected') : null,
          disabled ? namespace('--disabled') : null,
        ]}
        onClick={this.handleClick}
        v-ripple={{ disabled }}
      >
        <div
          class={namespace('__indent')}
          style={{
            paddingLeft: menuItemGroupParent
              ? `${menuItemGroupParent.level * toPxNum(menuParent.indent)}px`
              : undefined,
          }}
        />
        {this.renderIcon()}
        {this.renderLabel()}
      </div>
    )
  },
})

export const _MenuItemComponent = MenuItemPlugin

export default MenuItemPlugin
