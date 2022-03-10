const sizeValidator = (type) => ['normal', 'small', 'mini'].includes(type)

export const props = {
  value: {
    type: [Number, Array],
    default: 0,
  },
  label: {
    type: [String, Number],
  },
  size: {
    type: String,
    default: 'normal',
    validator: sizeValidator,
  },
  min: {
    type: [String, Number],
    default: 0,
  },
  max: {
    type: [String, Number],
    default: 100,
  },
  step: {
    type: [String, Number],
    default: 1,
  },
  range: {
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
  vertical: {
    type: Boolean,
    default: false,
  },
  verticalHeight: {
    type: [Number, String],
  },
  validateTrigger: {
    type: Array,
    default: () => ['onChange'],
  },
  rules: {
    type: Array,
  },
}
