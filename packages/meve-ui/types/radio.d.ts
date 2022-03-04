import { MComponent } from './component'

export type RadioSize = 'normal' | 'small' | 'mini'

export type RadioValidateTrigger = 'onChange' | 'onClick'

export interface RadioProps {
  value?: any
  label?: string | number
  checkedValue?: any
  uncheckedValue?: any
  disabled?: boolean
  readonly?: boolean
  size?: RadioSize
  ripple?: boolean
  validateTrigger?: Array<RadioValidateTrigger>
  rules?: Array<(value: any) => any>
  onClick?: (e: Event) => void
  onChange?: (value: any) => void
  onInput?: (value: any) => void
}

export class Radio extends MComponent {
  $props: RadioProps

  validate(): Promise<boolean>

  resetValidation(): void

  reset(): void

  toggle(value: any): void
}

export class _RadioComponent extends Radio {}
