const sizeValidator = (type) => ['normal', 'small', 'mini'].includes(type)

export const props = {
  value: {
    default: false,
  },
  label: {
    type: [String, Number],
  },
  checkedValue: {
    default: true,
  },
  uncheckedValue: {
    default: false,
  },
  size: {
    type: String,
    default: 'normal',
    validator: sizeValidator,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  ripple: {
    type: Boolean,
    default: true,
  },
  validateTrigger: {
    type: Array,
    default: () => ['onChange'],
  },
  rules: {
    type: Array,
  },
}
