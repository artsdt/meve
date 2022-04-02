import { MComponent } from './component'

export type DatePickerSize = 'normal' | 'small' | 'mini'

export type DatePickerValidateTrigger = 'onChange' | 'onClick' | 'onClear'

export interface DatePickerProps {
  value?: string | string[]
  label?: string | number
  placeholder?: string
  size?: DatePickerSize
  disabled?: boolean
  readonly?: boolean
  clearable?: boolean
  valueFormat?: string
  validateTrigger?: DatePickerValidateTrigger[]
  rules?: Array<(v: string | string[]) => any>
  customDisabled?: (date: any) => boolean
  onInput?: (value: string | string[]) => void
  onChange?: (value: string | string[]) => void
  onClear?: (value: string | string[]) => void
  onClick?: (event: Event) => void
  onFocus?: () => void
  onBlur?: () => void
  onOpen?: () => void
  onOpened?: () => void
  onClose?: () => void
  onClosed?: () => void
}

export class DatePicker extends MComponent {
  $props: DatePickerProps

  focus(): void

  blur(): void

  validate(): Promise<boolean>

  resetValidation(): void

  reset(): void

  open(): void

  close(): void
}

export class _DatePickerComponent extends DatePicker {}
