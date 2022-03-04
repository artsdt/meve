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
  closeable: {
    type: Boolean,
    default: false,
  },
  closeIconSize: {
    type: [String, Number],
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
  readonly: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
}
