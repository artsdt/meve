import { MComponent } from './component'

export interface FormItemProps {
  label?: string | number
  value?: any
  rules?: Array<(v: any) => any>
}

export class FormItem extends MComponent {
  $props: FormItemProps

  validate(): Promise<boolean>

  resetValidation(): void
}

export class _FormItemComponent extends FormItem {}
