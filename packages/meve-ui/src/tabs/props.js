const directionValidator = (direction) => ['horizontal', 'vertical'].includes(direction)

export const props = {
  value: {
    type: [String, Number],
    default: 0,
  },
  layoutDirection: {
    type: String,
    default: 'horizontal',
    validator: directionValidator,
  },
  itemDirection: {
    type: String,
    default: 'horizontal',
    validator: directionValidator,
  },
  activeColor: {
    type: String,
  },
  activeBackground: {
    type: String,
  },
  inactiveColor: {
    type: String,
  },
  inactiveBackground: {
    type: String,
  },
  disabledColor: {
    type: String,
  },
  disabledBackground: {
    type: String,
  },
  sticky: {
    type: Boolean,
    default: false,
  },
  offsetTop: {
    type: [String, Number],
    default: 0,
  },
}
