import { MComponent } from './component'
import { ButtonType } from './button'
import { VueConstructor } from 'vue'

export type DialogMessageAlign = 'left' | 'center' | 'right'

export interface DialogProps {
  value?: boolean
  loading?: boolean
  title?: string
  message?: string
  messageAlign?: DialogMessageAlign
  confirmButton?: boolean
  cancelButton?: boolean
  confirmButtonType?: ButtonType
  cancelButtonType?: ButtonType
  confirmButtonText?: string
  cancelButtonText?: string
  overlay?: boolean
  overlayClass?: string
  overlayStyle?: Record<string, any>
  lockScroll?: boolean
  closeOnClickOverlay?: boolean
  onOpen?: () => void
  onOpened?: () => void
  beforeClose?: (action: DialogActions, done: () => void) => void
  onClose?: () => void
  onClosed?: () => void
  onConfirm?: () => void
  onCancel?: () => void
  onClickOverlay?: () => void
}

export interface DialogOptions {
  value?: boolean
  loading?: boolean
  title?: string
  message?: string
  messageAlign?: DialogMessageAlign
  confirmButton?: boolean
  cancelButton?: boolean
  confirmButtonType?: ButtonType
  cancelButtonType?: ButtonType
  confirmButtonText?: string
  cancelButtonText?: string
  overlay?: boolean
  overlayClass?: string
  overlayStyle?: Record<string, any>
  lockScroll?: boolean
  closeOnClickOverlay?: boolean
  onOpen?: () => void
  onOpened?: () => void
  beforeClose?: (action: DialogActions, done: () => void) => void
  onClose?: () => void
  onClosed?: () => void
  onConfirm?: () => void
  onCancel?: () => void
  onClickOverlay?: () => void
}

export class DialogComponent extends MComponent {
  $props: DialogProps
}

export type DialogActions = 'confirm' | 'cancel' | 'close'

export interface IDialog {
  (options: DialogOptions | string): Promise<DialogActions>
  Component: typeof DialogComponent

  close(): void

  install(Vue: VueConstructor): void
}

export const Dialog: IDialog

export class _DialogComponent extends DialogComponent {}
