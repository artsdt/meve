import { CreateElement, VNode } from 'vue'
import { IconProps } from './icon'
import { MComponent } from './component'

export type MenuItemProps = {
  name?: string | number
  label?: ((h: CreateElement) => VNode) | string | number
  icon?: ((h: CreateElement) => VNode) | string | IconProps
  disabled?: boolean
}

export class MenuItem extends MComponent {
  $props: MenuItemProps
}

export class _MenuItemComponent extends MenuItem {}
