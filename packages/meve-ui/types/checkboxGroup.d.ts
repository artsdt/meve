import { MComponent } from './component'

export type CheckboxGroupValidateTriggers = 'onChange'

export interface CheckboxGroupProps {
  value?: any
  label?: string | number
  direction?: 'horizontal' | 'vertical'
  validateTrigger?: Array<CheckboxGroupValidateTriggers>
  rules?: Array<(value: any) => any>
  onChange?: (value: any) => void
  onInput?: (value: any) => void
}

export class CheckboxGroup extends MComponent {
  $props: CheckboxGroupProps

  validate(): Promise<boolean>

  resetValidation(): void

  reset(): void

  checkAll(): any

  inverseAll(): any
}

export class _CheckboxGroupComponent extends CheckboxGroup {}
