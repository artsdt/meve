import { MComponent } from './component'

export type AutoCompleteSize = 'normal' | 'small' | 'mini'

export type AutoCompleteType = 'text' | 'password' | 'number'

export type AutoCompleteOption = { label: any; value: any }

export type AutoCompleteValidateTrigger = 'onClick' | 'onClear' | 'onInput' | 'onChange' | 'onSelect'

export interface AutoCompleteProps {
  value?: string | number
  label?: string | number
  options?: AutoCompleteOption[]
  placeholder?: string
  size?: AutoCompleteSize
  type?: AutoCompleteType
  textarea?: boolean
  rows?: string | number
  maxlength?: string | number
  disabled?: boolean
  readonly?: boolean
  clearable?: boolean
  resize?: boolean
  validateTrigger?: AutoCompleteValidateTrigger[]
  rules?: Array<(v: string | number) => any>
  onInput?: (value: string | number) => void
  onChange?: (value: string | number) => void
  onSelect?: (value: string | number) => void
  onClear?: (value: string | number) => void
  onClick?: (event: Event) => void
  onFocus?: () => void
  onBlur?: () => void
  onOpen?: () => void
  onOpened?: () => void
  onClose?: () => void
  onClosed?: () => void
}

export class AutoComplete extends MComponent {
  $props: AutoCompleteProps

  open(): void

  close(): void

  focus(): void

  blur(): void

  validate(): Promise<boolean>

  resetValidation(): void

  reset(): void
}

export class _AutoCompleteComponent extends AutoComplete {}
