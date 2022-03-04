import { MComponent } from './component'
import { DefaultSlots } from '../src/utils/create'
import { VNode } from 'vue'

export type LoadingProps = {
  loading?: boolean
  description?: string
  rotate?: boolean
  size?: number | string
  color?: string
}

export type LoadingSlots = DefaultSlots & {
  icon?: () => VNode
  description?: () => VNode
}

export class Loading extends MComponent {
  $props: LoadingProps
}

export class _LoadingComponent extends Loading {}
