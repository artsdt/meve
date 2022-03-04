import { CreateElement, VNode } from 'vue'
import { IconProps } from './icon'
import { MComponent } from './component'

export type MenuItemGroupProps = {
  name?: string | number
  label?: ((h: CreateElement) => VNode) | string | number
  icon?: ((h: CreateElement) => VNode) | string | IconProps
  disabled?: boolean
}

export class MenuItemGroup extends MComponent {
  $props: MenuItemGroupProps
}

export class _MenuItemGroupComponent extends MenuItemGroup {}
