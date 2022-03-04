import { MComponent } from './component'
import { IconProps } from './icon'
import { CreateElement, VNode } from 'vue'

export interface MenuOption {
  name: string | number
  label?: ((h: CreateElement) => VNode) | string | number
  icon?: ((h: CreateElement) => VNode) | string | IconProps
  disabled?: boolean
  children?: MenuOption[]
}

export type MenuProps = {
  options?: MenuOption
  expandedNames?: (string | number)[]
  selectedNames?: (string | number)[]
  accordion?: boolean
  indent?: string | number
  multiple?: boolean
  nameField?: string
  labelField?: string
}

export class Menu extends MComponent {
  $props: MenuProps
}

export class _MenuComponent extends Menu {}
