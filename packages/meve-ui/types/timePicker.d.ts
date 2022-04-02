import { MComponent } from './component'

export type TimePickerSize = 'normal' | 'small' | 'mini'

export type TimePickerValidateTrigger = 'onChange' | 'onClick' | 'onClear'

export interface TimePickerProps {
  value?: string
  label?: string | number
  placeholder?: string
  size?: TimePickerSize
  disabled?: boolean
  readonly?: boolean
  clearable?: boolean
  valueFormat?: string
  validateTrigger?: TimePickerValidateTrigger[]
  rules?: Array<(v: string) => any>
  ripple?: boolean
  customDisabled?: (column: number, time: string) => boolean
  onInput?: (value: string) => void
  onChange?: (value: string) => void
  onClear?: (value: string) => void
  onClick?: (event: Event) => void
  onFocus?: () => void
  onBlur?: () => void
  onOpen?: () => void
  onOpened?: () => void
  onClose?: () => void
  onClosed?: () => void
}

export class TimePicker extends MComponent {
  $props: TimePickerProps

  focus(): void

  blur(): void

  validate(): Promise<boolean>

  resetValidation(): void

  reset(): void

  open(): void

  close(): void
}

export class _TimePickerComponent extends TimePicker {}
