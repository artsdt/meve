const typeValidator = (type) => ['text', 'password', 'number'].includes(type)

const sizeValidator = (type) => ['normal', 'small', 'mini'].includes(type)

export const props = {
  value: {
    type: [String, Number],
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
  type: {
    type: String,
    default: 'text',
    validator: typeValidator,
  },
  textarea: {
    type: Boolean,
    default: false,
  },
  rows: {
    type: [String, Number],
    default: 5,
  },
  maxlength: {
    type: [String, Number],
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
  resize: {
    type: Boolean,
    default: true,
  },
  validateTrigger: {
    type: Array,
    default: () => ['onInput', 'onClear'],
  },
  rules: {
    type: Array,
  },
}
