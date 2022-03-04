export const props = {
  right: {
    type: [Number, String],
  },
  bottom: {
    type: [Number, String],
  },
  visibilityHeight: {
    type: [Number, String],
    default: 200,
  },
  duration: {
    type: Number,
    default: 300,
  },
  target: {
    type: [String, Object, Window],
  },
}
