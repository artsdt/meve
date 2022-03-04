import { MComponent } from './component'

export type ButtonType = 'default' | 'primary' | 'info' | 'success' | 'warning' | ' error'

export type ButtonSize = 'mini' | 'normal' | 'small' | 'large' | number | string

export type ButtonProps = {
  type?: ButtonType
  size?: ButtonSize
  loading?: boolean
  round?: boolean
  block?: boolean
  text?: boolean
  outline?: boolean
  disabled?: boolean
  loadingSize?: number | string
  onClick?: (event: Event) => void
  onTouchstart?: (event: Event) => void
}

export class Button extends MComponent {
  $props: ButtonProps
}

export class _ButtonComponent extends Button {}
