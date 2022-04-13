import { MComponent } from './component'

type Range = [number, number]

export interface PaginationProps {
  current?: string | number
  size?: string | number
  total?: string | number
  disabled?: boolean
  showSizeChanger?: boolean
  showQuickJumper?: boolean
  sizeOption?: Array<number>
  showTotal?: (total: number, range: Range) => string
  onChange?: (current: number, size: number) => void
}

export class Pagination extends MComponent {
  $props: PaginationProps
}

export class _PaginationComponent extends Pagination {}
