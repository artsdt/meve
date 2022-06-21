import { MComponent } from './component'

export type RowJustify = 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'flex-start' | 'flex-end'

export type RowAlign =
  | 'stretch'
  | 'center'
  | 'start'
  | 'end'
  | 'baseline'
  | 'initial'
  | 'inherit'
  | 'flex-start'
  | 'flex-end'

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
