import { MComponent } from './component'

export interface PopupProps {
  value?: boolean
  position?: 'top' | 'bottom' | 'right' | 'left' | 'center'
  overlay?: boolean
  overlayClass?: string
  overlayStyle?: Record<string, any>
  lockScroll?: boolean
  closeOnClickOverlay?: boolean
  onInput?: (value: boolean) => void
  onOpen?: () => void
  onOpened?: () => void
  onClose?: () => void
  onClosed?: () => void
  onClickOverlay?: () => void
}

export class Popup extends MComponent {
  $props: PopupProps
}

export class _PopupComponent extends Popup {}
