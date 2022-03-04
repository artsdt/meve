import { createNamespace } from '../utils/create'
import { props } from './props'
import { createParentMixin } from '../utils/mixins/relation'

import '../styles/common.less'

const { createComponent, namespace } = createNamespace('form')

const FormPlugin = createComponent({
  mixins: [
    createParentMixin('form', { childrenKey: 'formItems' }),
    createParentMixin('form', { childrenKey: 'formComponents' }),
  ],

  props,

  methods: {
    // expose
    async validate() {
      const res = await Promise.all(this.formItems.map(({ validate }) => validate()))

      return res.every((r) => r === true)
    },

    // expose
    reset() {
      this.formComponents.forEach(({ reset }) => reset())
    },

    // expose
    resetValidation() {
      this.formItems.forEach(({ resetValidation }) => resetValidation())
    },
  },

  render() {
    return <div class={namespace()}>{this.slots()}</div>
  },
})

export const _FormComponent = FormPlugin

export default FormPlugin
