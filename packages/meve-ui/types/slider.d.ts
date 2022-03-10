import { MComponent } from './component'

export type SliderSize = 'normal' | 'small' | 'mini'

export type SliderValidateTrigger = 'onChange' | 'onClick'

export interface SliderProps {
  value?: string | number
  label?: string | number
  size?: SliderSize
  min?: string | number
  max?: string | number
  step?: string | number
  range?: boolean
  vertical?: boolean
  verticalHeight?: string | number
  disabled?: boolean
  readonly?: boolean
  validateTrigger?: SliderValidateTrigger[]
  rules?: Array<(v: number | Array) => any>
  onInput?: (v: number | Array) => void
  onChange?: (v: number | Array) => void
}

export class Slider extends MComponent {
  $props: SliderProps

  validate(): Promise<boolean>

  resetValidation(): void

  reset(): void
}

export class _SliderComponent extends Slider {}
