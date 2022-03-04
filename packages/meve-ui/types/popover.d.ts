import { MComponent } from './component'

export type PopoverTrigger = 'hover' | 'click'

export type PopoverPlacement =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'top-start'
  | 'top-end'
  | 'bottom-start'
  | 'bottom-end'
  | 'left-start'
  | 'left-end'
  | 'right-start'
  | 'right-end'

export type PopoverProps = {
  trigger?: PopoverTrigger
  placement?: PopoverPlacement
  disabled?: boolean
  x?: number | string
  y?: number | string
  sameWidth?: boolean
  defaultStyle?: boolean
  onOpen?: () => void
  onClose?: () => void
}

export class Popover extends MComponent {
  $props: PopoverProps
}

export class _PopoverComponent extends Popover {}
