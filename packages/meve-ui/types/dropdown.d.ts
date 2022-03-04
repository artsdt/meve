import { MComponent } from './component'
import type { VNode, CreateElement } from 'vue'

export type DropdownSize = 'small' | 'normal' | 'large'

export interface DropdownOption {
  key: any
  label?: (h: CreateElement) => VNode | string | number
  icon?: (h: CreateElement) => VNode | string
  children?: DropdownOption[]
  disabled?: boolean
}

export type DropdownProps = {
  options?: DropdownOption
  size?: DropdownSize
  disabled?: boolean
  labelField?: string
  keyField?: string
  childrenField?: string
  iconField?: string
  onSelect?: (option: DropdownOption) => void
  onOpen?: () => void
  onClose?: () => void
}

export class Dropdown extends MComponent {
  $props: DropdownProps
}

export class _DropdownComponent extends Dropdown {}
