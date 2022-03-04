const sizeValidator = (size) => ['small', 'normal', 'large'].includes(size)

export const props = {
  options: {
    type: Array,
    default: () => [],
  },
  labelField: {
    type: String,
    default: 'label',
  },
  keyField: {
    type: String,
    default: 'key',
  },
  childrenField: {
    type: String,
    default: 'children',
  },
  iconField: {
    type: String,
    default: 'icon',
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
}
