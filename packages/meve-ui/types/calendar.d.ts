import { MComponent } from './component'

export interface CalendarProps {
  value?: string | number
  disabled?: boolean
  readonly?: boolean
  valueFormat?: string
  ripple?: boolean
  range?: boolean
  dateStyle?: Record<string, any>
  dayStyle?: Record<string, any>
  dateTextStyle?: Record<string, any>
  customDisabled?: (date: any) => boolean
  onInput?: (value: string) => void
  onChange?: (value: string) => void
  onClick?: (event: Event) => void
}

export class Calendar extends MComponent {
  $props: CalendarProps

  prev(): void

  next(): void

  toNow(): void
}

export class _CalendarComponent extends Calendar {}
