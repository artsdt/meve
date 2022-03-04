import { MComponent } from './component'

export type SelectSize = 'normal' | 'small' | 'mini'

export type SelectValidateTrigger = 'onClick' | 'onClear' | 'onTagClose' | 'onSelect'

export interface SelectProps {
  value?: any
  label?: string | number
  placeholder?: string
  multiple?: boolean
  size?: SelectSize
  disabled?: boolean
  readonly?: boolean
  clearable?: boolean
  validateTrigger?: SelectValidateTrigger[]
  rules?: Array<(v: any) => any>
  onInput?: (value: any) => void
  onSelect?: (value: any) => void
  onClear?: (value: any) => void
  onTagClose?: (value: any) => void
  onClick?: () => void
  onFocus?: () => void
  onBlur?: () => void
  onOpen?: () => void
  onOpened?: () => void
  onClose?: () => void
  onClosed?: () => void
}

export class Select extends MComponent {
  $props: SelectProps

  open(): void

  close(): void

  focus(): void

  blur(): void

  validate(): Promise<boolean>

  resetValidation(): void

  reset(): void
}

export class _SelectComponent extends Select {}
