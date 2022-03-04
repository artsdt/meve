import { MComponent } from './component'

export interface TabsProps {
  value?: string | number
  layoutDirection?: 'horizontal' | 'vertical'
  itemDirection?: 'horizontal' | 'vertical'
  activeColor?: string
  activeBackground?: string
  inactiveColor?: string
  inactiveBackground?: string
  disabledColor?: string
  disabledBackground?: string
  sticky?: boolean
  offsetTop?: string | number
  onClick?: (active: string | number) => void
  onChange?: (active: string | number) => void
  onInput?: (active: string | number) => void
}

export class Tabs extends MComponent {
  $props: TabsProps

  resize(): void
}

export class _TabsComponent extends Tabs {}
