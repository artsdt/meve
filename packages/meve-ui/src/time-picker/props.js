const sizeValidator = (type) => ['normal', 'small', 'mini'].includes(type)

export const props = {
  value: {
    type: String,
  },
  label: {
    type: [String, Number],
  },
  size: {
    type: String,
    default: 'normal',
    validator: sizeValidator,
  },
  placeholder: {
    type: String,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  valueFormat: {
    type: String,
    default: 'HH:mm:ss',
  },
  customDisabled: {
    type: Function,
    default: () => false,
  },
  ripple: {
    type: Boolean,
    default: true,
  },
  validateTrigger: {
    type: Array,
    default: () => ['onChange', 'onClear'],
  },
  rules: {
    type: Array,
  },
}
