import Icon from '../icon'
import Ripple from '../ripple'
import { isFunction, isPlainObject, isString } from '../utils/shared'
import { createNamespace } from '../utils/create'
import { createChildrenMixin, createParentMixin } from '../utils/mixins/relation'
import { doubleRaf, toPxNum } from '../utils/elements'
import { nextTick } from '../utils/components'
import { props } from './props'

import '../styles/common.less'
import '../icon/icon.less'
import './menuItemGroup.less'

const { createComponent, namespace } = createNamespace('menu-item-group')

const MenuItemGroupPlugin = createComponent({
  mixins: [
    createChildrenMixin('menu', { parentKey: 'menuParent', childrenKey: 'menuItemGroups' }),
    createParentMixin('menuItemGroup', { childrenKey: 'menuItemGroups' }),
    createChildrenMixin('menuItemGroup', { parentKey: 'menuItemGroupParent', childrenKey: 'menuItemGroups' }),
    createParentMixin('menuItemGroup', { childrenKey: 'menuItems' }),
  ],

  directives: { Ripple },

  props,

  data: () => ({
    expanded: false,
    listHeight: 0,
    level: 0,
  }),

  mounted() {
    this.updateLevel()
  },

  updated() {
    this.updateLevel()
  },

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
        return <Icon class={namespace('__icon')} menu-item-group-cover {...{ props: icon }} />
      }

      if (isString(icon)) {
        return <Icon class={namespace('__icon')} menu-item-group-cover name={icon} />
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

      this.menuParent.onGroupChange(this)
    },

    reduce() {
      if (!this.expanded) {
        return
      }

      this.menuItemGroups.forEach((child) => child.reduce())

      this.expanded = false

      this.syncParentHeight(this.menuItemGroupParent, -this.listHeight)

      this.listHeight = 0
    },

    syncParentHeight(parent, height) {
      if (parent) {
        parent.listHeight += height
        this.syncParentHeight(parent.menuItemGroupParent, height)
      }
    },

    async expand() {
      if (this.expanded) {
        return
      }

      if (this.menuItemGroupParent) {
        await this.menuItemGroupParent.expand()
      }

      this.expanded = true

      await this.tickExpandAnimation()
    },

    async tickExpandAnimation() {
      this.listHeight = -1
      await nextTick()
      const listHeight = this.$refs.list?.offsetHeight ?? 0
      this.listHeight = 0
      await doubleRaf()
      this.listHeight = listHeight

      this.syncParentHeight(this.menuItemGroupParent, listHeight)
    },

    updateLevel() {
      let level = 0
      let groupParent = this.menuItemGroupParent

      while (groupParent) {
        level++
        groupParent = groupParent.menuItemGroupParent
      }

      this.level = level
    },
  },

  render() {
    const { disabled, listHeight, expanded, level, menuParent } = this

    return (
      <div class={[namespace(), 'm--box']}>
        <div
          class={[
            namespace('__trigger'),
            disabled ? namespace('--disabled') : null,
            expanded ? namespace('--trigger-expanded') : null,
          ]}
          onClick={this.handleClick}
          v-ripple={{ disabled }}
        >
          <div class={namespace('__indent')} style={{ paddingLeft: `${(level - 1) * toPxNum(menuParent.indent)}px` }} />
          {this.renderIcon()}
          {this.renderLabel()}
          <Icon
            class={[namespace('__arrow'), expanded ? namespace('--arrow-expanded') : null]}
            menu-item-group-cover
            name="menu-down"
          />
        </div>

        <div
          ref="list"
          class={[namespace('__list'), namespace('--list-height-transition')]}
          style={{ height: listHeight >= 0 ? `${listHeight}px` : undefined }}
        >
          {this.slots()}
        </div>
      </div>
    )
  },
})

export const _MenuItemGroupComponent = MenuItemGroupPlugin

export default MenuItemGroupPlugin
