import { typeValidator } from '../button/props'

const messageAlignValidator = (messageAlign) => ['left', 'center', 'right'].includes(messageAlign)

export const props = {
  value: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  width: {
    type: [String, Number],
  },
  title: {
    type: String,
  },
  message: {
    type: String,
  },
  messageAlign: {
    type: String,
    default: 'left',
    validator: messageAlignValidator,
  },
  confirmButton: {
    type: Boolean,
    default: true,
  },
  cancelButton: {
    type: Boolean,
    default: true,
  },
  confirmButtonText: {
    type: String,
  },
  cancelButtonText: {
    type: String,
  },
  confirmButtonType: {
    type: String,
    default: 'primary',
    validator: typeValidator,
  },
  cancelButtonType: {
    type: String,
    default: 'primary',
    validator: typeValidator,
  },
  // popup props
  overlay: {
    type: Boolean,
    default: true,
  },
  overlayClass: {
    type: String,
  },
  overlayStyle: {
    type: Object,
  },
  lockScroll: {
    type: Boolean,
    default: true,
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: true,
  },
  // internal
  beforeClose: {
    type: Function,
  },
}
