import { MComponent } from './component'

export interface FormProps {
  disabled?: boolean
  readonly?: boolean
}

export class Form extends MComponent {
  $props: FormProps

  validate(): Promise<boolean>

  resetValidation(): void

  reset(): void
}

export class _FormComponent extends Form {}
