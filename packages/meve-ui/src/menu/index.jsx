import MenuItemGroup from '../menu-item-group'
import MenuItem from '../menu-item'
import { createNamespace } from '../utils/create'
import { props } from './props'
import { createParentMixin } from '../utils/mixins/relation'
import { isArray, removeItem } from '../utils/shared'
import { warn } from '../utils/logger'

import '../styles/common.less'
import '../menu-item/menuItem.less'
import '../menu-item-group/menuItemGroup.less'
import './menu.less'

const { createComponent, namespace } = createNamespace('menu')

const MenuPlugin = createComponent({
  mixins: [
    createParentMixin('menu', { childrenKey: 'menuItemGroups' }),
    createParentMixin('menu', { childrenKey: 'menuItems' }),
  ],
  props,

  watch: {
    expandedNames() {
      this.syncExpand()
    },

    selectedNames(newValue) {
      if (!this.multiple && newValue.length > 1) {
        warn('Not in multiple mode, it is detected that multiple menu-items are selected')
      }

      this.syncSelect()
    },

    menuItemGroups() {
      this.syncExpand()
      this.syncSelect()
    },

    menuItems() {
      this.syncExpand()
      this.syncSelect()
    },
  },

  mounted() {
    window.menu = this
  },

  methods: {
    onGroupChange(group) {
      const shouldExpand = !this.expandedNames.includes(group.name)
      const shouldReduce = !shouldExpand

      let expandedNames = [...this.expandedNames]

      if (this.accordion && shouldExpand) {
        const expandedSiblingGroups = this.getExpandedSiblingGroups(group)
        expandedNames = this.removeGroupsNames(expandedSiblingGroups, expandedNames)
        expandedNames.push(group.name)
      } else if (shouldExpand) {
        expandedNames.push(group.name)
      } else if (shouldReduce) {
        expandedNames = this.removeGroupNames(group, expandedNames)
      }

      this.$emit('update:expanded-names', expandedNames)
    },

    onItemChange(item) {
      const selectedNames = [...this.selectedNames]

      if (this.multiple) {
        const shouldSelect = !selectedNames.includes(item.name)

        if (shouldSelect) {
          selectedNames.push(item.name)
          this.$emit('update:selected-names', selectedNames)
        } else {
          removeItem(selectedNames, item.name)
          this.$emit('update:selected-names', selectedNames)
        }
      } else {
        this.$emit('update:selected-names', [item.name])
      }
    },

    syncExpand() {
      this.menuItemGroups.forEach((child) => {
        this.expandedNames.includes(child.name) ? child.expand() : child.reduce()
      })
    },

    syncSelect() {
      this.menuItems.forEach((child) => {
        child.selected = this.selectedNames.includes(child.name)
      })
    },

    getExpandedSiblingGroups(group) {
      return this.menuItemGroups.filter((child) => {
        return group !== child && child.expanded && child.level === group.level
      })
    },

    collectChildrenNames(group, names) {
      group.menuItemGroups.forEach((child) => {
        names.push(child.name)

        if (child.menuItemGroups.length) {
          this.collectChildrenNames(child, names)
        }
      })
    },

    findGroupChildrenNames(group) {
      const names = []

      this.collectChildrenNames(group, names)

      return names
    },

    removeGroupNames(group, rawNames) {
      const shouldRemovedNames = [group.name, ...this.findGroupChildrenNames(group)]
      return rawNames.filter((name) => !shouldRemovedNames.includes(name))
    },

    removeGroupsNames(groups, rawNames) {
      return groups.reduce((names, group) => this.removeGroupNames(group, names), rawNames)
    },

    normalizeOption(option) {
      return {
        ...option,
        name: option[this.nameField],
        label: option[this.labelField],
      }
    },

    renderOptions(options) {
      const isGroup = (children) => isArray(children) && children.length

      return options.map((option) => {
        const { children, icon, disabled, name, label } = this.normalizeOption(option)

        if (isGroup(children)) {
          return (
            <MenuItemGroup name={name} icon={icon} label={label} disabled={disabled}>
              {this.renderOptions(children)}
            </MenuItemGroup>
          )
        }

        return <MenuItem name={name} icon={icon} label={label} disabled={disabled} />
      })
    },
  },

  render() {
    return (
      <div class={[namespace(), 'm--box']}>{this.hasSlots() ? this.slots() : this.renderOptions(this.options)}</div>
    )
  },
})

export const _MenuComponent = MenuPlugin

export default MenuPlugin
