import { MComponent } from './component'

export type InputSize = 'normal' | 'small' | 'mini'

export type InputType = 'text' | 'password' | 'number'

export type InputValidateTrigger = 'onChange' | 'onClick' | 'onClear' | 'onInput'

export interface InputProps {
  value?: string | number
  label?: string | number
  placeholder?: string
  size?: InputSize
  type?: InputType
  textarea?: boolean
  rows?: string | number
  maxlength?: string | number
  disabled?: boolean
  readonly?: boolean
  clearable?: boolean
  resize?: boolean
  validateTrigger?: InputValidateTrigger[]
  rules?: Array<(v: string | number) => any>
  onInput?: (value: string | number) => void
  onChange?: (value: string | number) => void
  onClear?: (value: string | number) => void
  onClick?: (event: Event) => void
  onFocus?: () => void
  onBlur?: () => void
}

export class Input extends MComponent {
  $props: InputProps

  focus(): void

  blur(): void

  validate(): Promise<boolean>

  resetValidation(): void

  reset(): void
}

export class _InputComponent extends Input {}
