import { MComponent } from './component'

export type ProgressProps = {
  value?: string | number
  color?: string
  trackColor?: string
  trackSize?: string | number
  label?: boolean
}

export class Progress extends MComponent {
  $props: ProgressProps
}

export class _ProgressComponent extends Progress {}
