export const positionValidator = (position) => ['top', 'bottom'].includes(position)

export const props = {
  position: {
    type: String,
    default: 'top',
    validator: positionValidator,
  },
}
