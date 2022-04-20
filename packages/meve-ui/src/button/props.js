export const typeValidator = (type) => ['default', 'primary', 'info', 'success', 'warning', 'error'].includes(type)

const sizeValidator = (size) => ['mini', 'normal', 'small', 'large'].includes(size)

export const props = {
  type: {
    type: String,
    default: 'default',
    validator: typeValidator,
  },
  size: {
    type: String,
    default: 'normal',
    validator: sizeValidator,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  round: {
    type: Boolean,
    default: false,
  },
  block: {
    type: Boolean,
    default: false,
  },
  text: {
    type: Boolean,
    default: false,
  },
  outline: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  ripple: {
    type: Boolean,
    default: true,
  },
  autoLoading: {
    type: Boolean,
    default: false,
  },
  loadingSize: {
    type: [Number, String],
  },
}
