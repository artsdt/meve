import { MComponent } from './component'

export type RowJustify = 'start' | 'end' | 'center' | 'space-around' | 'space-between'

export type RowAlign = 'stretch' | 'center' | 'start' | 'end' | 'baseline' | 'initial' | 'inherit'

export type RowProps = {
  gutter?: string | number
  justify?: RowJustify
  align?: RowAlign
  onClick?: (event: Event) => void
}

export class Row extends MComponent {
  $props: RowProps
}

export class _RowComponent extends Row {}
