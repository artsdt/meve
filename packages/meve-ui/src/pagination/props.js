export const props = {
  current: {
    type: [String, Number],
    default: 1,
  },
  size: {
    type: [String, Number],
    default: 10,
  },
  total: {
    type: [String, Number],
    default: 0,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  showSizeChanger: {
    type: Boolean,
    default: false,
  },
  showQuickJumper: {
    type: Boolean,
    default: false,
  },
  sizeOption: {
    type: Array,
    default: () => [10, 20, 50, 100],
  },
  showTotal: {
    type: Function,
  },
}
