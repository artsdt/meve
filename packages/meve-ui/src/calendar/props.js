export const props = {
  value: {
    type: [String, Array],
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  range: {
    type: Boolean,
    default: false,
  },
  valueFormat: {
    type: String,
    default: 'YYYY-MM-DD',
  },
  dateStyle: {
    type: Object,
  },
  dayStyle: {
    type: Object,
  },
  dateTextStyle: {
    type: Object,
  },
  customDisabled: {
    type: Function,
    default: () => false,
  },
  ripple: {
    type: Boolean,
    default: true,
  },
}
