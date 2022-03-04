const sizeValidator = (type) => ['normal', 'small', 'mini'].includes(type)

export const props = {
  value: {
    type: [String, Number, Array],
  },
  label: {
    type: [String, Number],
  },
  size: {
    type: String,
    default: 'normal',
    validator: sizeValidator,
  },
  multiple: {
    type: Boolean,
    default: false,
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
  validateTrigger: {
    type: Array,
    default: () => ['onSelect', 'onClear', 'onTagClose'],
  },
  rules: {
    type: Array,
  },
}
