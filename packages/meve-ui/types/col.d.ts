import { MComponent } from './component'

export type ColSizeDescriptor = {
  span?: string | number
  offset?: string | number
}

export type ColProps = {
  span?: string | number
  offset?: string | number
  xs?: string | number | ColSizeDescriptor
  sm?: string | number | ColSizeDescriptor
  md?: string | number | ColSizeDescriptor
  lg?: string | number | ColSizeDescriptor
  xl?: string | number | ColSizeDescriptor
  onClick?: (event: Event) => void
}

export class Col extends MComponent {
  $props: ColProps
}

export class _ColComponent extends Col {}
