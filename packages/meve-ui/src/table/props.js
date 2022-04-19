const sizeValidator = (type) => ['normal', 'small'].includes(type)

export const props = {
  rowKey: {
    type: String,
    default: 'id',
  },
  selectedKeys: {
    type: Array,
    default: () => [],
  },
  size: {
    type: String,
    validator: sizeValidator,
    default: 'normal',
  },
  tableLayout: {
    type: String,
    default: 'auto',
  },
  childrenKey: {
    type: String,
    default: 'children',
  },
  scroller: {
    type: Object,
  },
  border: {
    type: Boolean,
    default: false,
  },
  columns: {
    type: Array,
    default: () => [],
  },
  indent: {
    type: [Number, String],
    default: 20,
  },
}
