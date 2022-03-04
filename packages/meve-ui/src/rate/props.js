const sizeValidator = (type) => ['normal', 'small', 'mini'].includes(type)

export const props = {
  value: {
    type: [String, Number],
    default: 0,
  },
  label: {
    type: [String, Number],
  },
  color: {
    type: String,
  },
  count: {
    type: [Number, String],
    default: 5,
  },
  icon: {
    type: String,
    default: 'star',
  },
  half: {
    type: Boolean,
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
