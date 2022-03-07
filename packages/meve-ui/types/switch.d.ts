import { MComponent } from './component'

export type SwitchSize = 'normal' | 'small' | 'mini'

export type SwitchValidateTrigger = 'onChange' | 'onClick'

export interface SwitchProps {
  value?: any
  label?: string | number
  activeValue?: any
  inactiveValue?: any
  loading?: boolean
  disabled?: boolean
  readonly?: boolean
  size?: SwitchSize
  ripple?: boolean
  validateTrigger?: Array<SwitchValidateTrigger>
  rules?: Array<(value: any) => any>
  onClick?: (e: Event) => void
  onChange?: (value: any) => void
  onInput?: (value: any) => void
}

export class Switch extends MComponent {
  $props: SwitchProps

  validate(): Promise<boolean>

  resetValidation(): void

  reset(): void

  toggle(value: any): void
}

export class _SwitchComponent extends Switch {}
