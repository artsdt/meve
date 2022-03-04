import { MComponent } from './component'

export interface TabProps {
  name?: string | number
  disabled?: boolean
  onClick?: (active: string | number, e: Event) => void
}

export class Tab extends MComponent {
  $props: TabProps
}

export class _TabComponent extends Tab {}
