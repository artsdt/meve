import { MComponent } from './component'

export type CheckboxSize = 'normal' | 'small' | 'mini'

export type CheckboxValidateTrigger = 'onChange' | 'onClick'

export interface CheckboxProps {
  value?: any
  label?: string | number
  checkedValue?: any
  uncheckedValue?: any
  indeterminate?: boolean
  disabled?: boolean
  readonly?: boolean
  size?: CheckboxSize
  ripple?: boolean
  validateTrigger?: Array<CheckboxValidateTrigger>
  rules?: Array<(value: any) => any>
  onClick?: (e: Event) => void
  onChange?: (value: any) => void
  onInput?: (value: any) => void
}

export class Checkbox extends MComponent {
  $props: CheckboxProps

  validate(): Promise<boolean>

  resetValidation(): void

  reset(): void

  toggle(value: any): void
}

export class _CheckboxComponent extends Checkbox {}
