const justifyValidator = (justify) =>
  ['flex-start', 'start', 'flex-end', 'end', 'center', 'space-between', 'space-around'].includes(justify)

const alignValidator = (align) =>
  ['flex-start', 'start', 'end', 'center', 'flex-end', 'stretch', 'baseline'].includes(align)

export const props = {
  gutter: {
    type: [String, Number],
    default: 0,
  },
  justify: {
    type: String,
    default: 'flex-start',
    validator: justifyValidator,
  },
  align: {
    type: String,
    default: 'flex-start',
    validator: alignValidator,
  },
}
