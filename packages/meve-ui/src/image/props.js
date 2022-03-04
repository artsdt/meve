function fitValidator(fit) {
  return ['fill', 'contain', 'cover', 'none', 'scale-down'].includes(fit)
}

export const props = {
  src: {
    type: String,
  },
  fit: {
    type: String,
    validator: fitValidator,
    default: 'fill',
  },
  alt: {
    type: String,
  },
  width: {
    type: [String, Number],
  },
  height: {
    type: [String, Number],
  },
  radius: {
    type: [String, Number],
    default: 0,
  },
  loading: {
    type: String,
  },
  error: {
    type: String,
  },
  lazy: {
    type: Boolean,
    default: false,
  },
  ripple: {
    type: Boolean,
    default: false,
  },
  block: {
    type: Boolean,
    default: true,
  },
  previewDisabled: {
    type: Boolean,
    default: false,
  },
}
