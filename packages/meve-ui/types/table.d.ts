import { MComponent } from './component'

export type TableSize = 'normal' | 'small'

export type TableScroller = { x: number | string; y: number | string }

export type TableBodySpan = { colSpan?: number; rowSpan?: number }

export type TableSorter = { asc?: string; desc?: string }

export type TableColumn = {
  key?: string
  title?: string
  selection?: boolean
  style?: Record<string, any>
  sorter?: boolean | TableSorter
  sticky?: boolean
  headColSpan?: number
  bodySpan?(rowIndex: number, row: any, column: any): TableBodySpan | undefined
}

export type TableLoadPayload = {
  sorters: Record<string, any>
}

export type TableProps = {
  rowKey?: string
  selectedKeys?: any[]
  size?: TableSize
  tableLayout?: string
  childrenKey?: string
  scroller?: TableScroller
  border?: boolean
  columns?: TableColumn[]
  indent?: number | string
  onLoad?(payload: TableLoadPayload): any[] | Promise<any[]>
}

export class Table extends MComponent {
  $props: TableProps

  load(): Promise<void>

  getData(): any[]
}

export class _TableComponent extends Table {}
