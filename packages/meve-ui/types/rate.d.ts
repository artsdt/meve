import { MComponent } from './component'

export type RateSize = 'normal' | 'small' | 'mini'

export type RateValidateTrigger = 'onChange'

export interface RateProps {
  value?: string | number
  label?: string | number
  count?: string | number
  icon?: string
  half?: boolean
  disabled?: boolean
  readonly?: boolean
  size?: RateSize
  ripple?: boolean
  validateTrigger?: Array<RateValidateTrigger>
  rules?: Array<(value: any) => any>
  onClick?: (value: string | number) => void
  onChange?: (value: string | number) => void
  onInput?: (value: string | number) => void
}

export class Rate extends MComponent {
  $props: RateProps

  validate(): Promise<boolean>

  resetValidation(): void

  reset(): void
}

export class _RateComponent extends Rate {}
