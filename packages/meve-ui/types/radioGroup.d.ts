import { MComponent } from './component'

export type RadioGroupValidateTriggers = 'onChange'

export interface RadioGroupProps {
  value?: any
  label?: string | number
  direction?: 'horizontal' | 'vertical'
  validateTrigger?: Array<RadioGroupValidateTriggers>
  rules?: Array<(value: any) => any>
  onChange?: (value: any) => void
  onInput?: (value: any) => void
}

export class RadioGroup extends MComponent {
  $props: RadioGroupProps

  validate(): Promise<boolean>

  resetValidation(): void

  reset(): void
}

export class _RadioGroupComponent extends RadioGroup {}
