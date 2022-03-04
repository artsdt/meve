import DialogPlugin from './Dialog'
import Vue, { ComponentOptions, VueConstructor } from 'vue'
import { inBrowser, isNumber, isString } from '../utils/shared'
import { mountComponent } from '../utils/components'

type ButtonType = 'default' | 'primary' | 'info' | 'success' | 'warning' | ' error'

type DialogMessageAlign = 'left' | 'center' | 'right'

interface DialogOptions {
  value?: boolean;
  title?: string;
  message?: string;
  messageAlign?: DialogMessageAlign;
  confirmButton?: boolean;
  cancelButton?: boolean;
  confirmButtonType?: ButtonType;
  cancelButtonType?: ButtonType;
  confirmButtonText?: string;
  cancelButtonText?: string;
  overlay?: boolean;
  overlayClass?: string;
  overlayStyle?: Record<string, any>;
  lockScroll?: boolean;
  closeOnClickOverlay?: boolean;
  onOpen?: () => void;
  onOpened?: () => void;
  onBeforeClose?: (action: DialogActions, done: () => void) => void;
  onClose?: () => void;
  onClosed?: () => void;
  onConfirm?: () => void;
  onCancel?: () => void;
  onClickOverlay?: () => void;
}

export type DialogActions = 'confirm' | 'cancel' | 'close'

let singletonInstance: any

function Dialog(options: DialogOptions | string | number): Promise<DialogActions | void> {
  if (!inBrowser()) {
    return Promise.resolve()
  }

  return new Promise((resolve) => {
    Dialog.close()

    const dialogOptions: DialogOptions = isString(options) || isNumber(options) ? { message: String(options) } : options

    const { instance, unmount } = mountComponent(DialogPlugin as ComponentOptions<Vue>, 'body', {
      propsData: {
        ...dialogOptions,
        beforeClose: dialogOptions.onBeforeClose,
      },
    })

    instance.value = true

    singletonInstance = instance

    instance.$on('input', (value: boolean) => {
      instance.value = value
    })

    instance.$on('open', () => dialogOptions.onOpen?.())

    instance.$on('opened', () => dialogOptions.onOpened?.())

    instance.$on('click-overlay', () => dialogOptions.onClickOverlay?.())

    instance.$on('close', () => {
      dialogOptions.onClose?.()
      resolve('close')
    })

    instance.$on('closed', () => {
      dialogOptions.onClosed?.()
      unmount()
      singletonInstance === instance && (singletonInstance = null)
    })

    instance.$on('confirm', () => {
      dialogOptions.onConfirm?.()
      resolve('confirm')
    })

    instance.$on('cancel', () => {
      dialogOptions.onCancel?.()
      resolve('cancel')
    })

    instance.$on('route-change', () => {
      unmount()
      singletonInstance === instance && (singletonInstance = null)
    })
  })
}

Dialog.close = () => {
  if (singletonInstance != null) {
    const prevSingletonInstance = singletonInstance
    singletonInstance = null

    Vue.nextTick(() => {
      prevSingletonInstance.show = false
    })
  }
}

Dialog.Component = DialogPlugin

Dialog.install = function (Vue: VueConstructor) {
  Vue.use(DialogPlugin)
}

export const _DialogComponent = DialogPlugin

export default Dialog
