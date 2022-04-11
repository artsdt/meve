export const props = {
  value: {
    type: Array,
    default: () => [],
  },
  label: {
    type: [String, Number],
  },
  accept: {
    type: String,
    default: '*',
  },
  capture: {
    type: [String, Boolean],
    default: undefined,
  },
  multiple: {
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
  removable: {
    type: Boolean,
    default: true,
  },
  maxlength: {
    type: [Number, String],
  },
  maxsize: {
    type: [Number, String],
  },
  previewed: {
    type: Boolean,
    default: true,
  },
  validateTrigger: {
    type: Array,
    default: () => ['onChange', 'onRemove'],
  },
  rules: {
    type: Array,
  },
  hideList: {
    type: Boolean,
    default: false,
  },
}
