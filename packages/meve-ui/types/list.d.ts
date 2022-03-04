import { MComponent } from './component'

export interface ListProps {
  loading?: boolean
  immediateCheck?: boolean
  finished?: boolean
  error?: boolean
  offset?: string | number
  loadingText?: string
  finishedText?: string
  errorText?: string
  onLoad?: () => void
}

export class List extends MComponent {
  $props: ListProps
}

export class _ListComponent extends List {}
