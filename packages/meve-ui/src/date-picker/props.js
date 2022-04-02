const sizeValidator = (type) => ['normal', 'small', 'mini'].includes(type)

export const props = {
  value: {
    type: [String, Array],
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
    default: 'YYYY-MM-DD',
  },
  range: {
    type: Boolean,
    default: false,
  },
  customDisabled: {
    type: Function,
    default: () => false,
  },
  validateTrigger: {
    type: Array,
    default: () => ['onChange', 'onClear'],
  },
  rules: {
    type: Array,
  },
}
