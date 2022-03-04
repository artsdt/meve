const positionValidator = (position) => ['top', 'bottom', 'right', 'left', 'center'].includes(position)

export const props = {
  value: {
    type: Boolean,
    default: false,
  },
  position: {
    type: String,
    default: 'center',
    validator: positionValidator,
  },
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
}
