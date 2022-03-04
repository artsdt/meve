const triggerValidator = (trigger) => ['hover', 'click', 'manual'].includes(trigger)

const placementValidator = (placement) =>
  [
    'top',
    'bottom',
    'left',
    'right',
    'left-start',
    'right-start',
    'left-end',
    'right-end',
    'top-start',
    'top-end',
    'bottom-start',
    'bottom-end',
  ].includes(placement)

export const props = {
  trigger: {
    type: String,
    validator: triggerValidator,
    default: 'hover',
  },
  placement: {
    type: String,
    default: 'bottom',
    validator: placementValidator,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  x: {
    type: [Number, String],
    default: 0,
  },
  y: {
    type: [Number, String],
    default: 0,
  },
  sameWidth: {
    type: Boolean,
    default: false,
  },
  defaultStyle: {
    type: Boolean,
    default: true,
  },
}
