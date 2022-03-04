const directionValidator = (direction) => ['horizontal', 'vertical'].includes(direction)

export const props = {
  value: {
    type: Array,
    default: () => [],
  },
  label: {
    type: [String, Number],
  },
  max: {
    type: [String, Number],
  },
  direction: {
    type: String,
    default: 'horizontal',
    validator: directionValidator,
  },
  validateTrigger: {
    type: Array,
    default: () => ['onChange'],
  },
  rules: {
    type: Array,
  },
}
