import { MComponent } from './component'

export interface OptionProps {
  label?: any
  value?: any
  disabled?: boolean
}

export class Option extends MComponent {
  $props: OptionProps
}

export class _OptionComponent extends Option {}
