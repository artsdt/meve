export const props = {
  options: {
    type: Array,
    default: () => [],
  },
  expandedNames: {
    type: Array,
    default: () => [],
  },
  selectedNames: {
    type: Array,
    default: () => [],
  },
  nameField: {
    type: String,
    default: 'name',
  },
  labelField: {
    type: String,
    default: 'label',
  },
  accordion: {
    type: Boolean,
    default: false,
  },
  indent: {
    type: [String, Number],
    default: 24,
  },
  multiple: {
    type: Boolean,
    default: false,
  },
}
