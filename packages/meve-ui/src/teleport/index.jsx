import Vue from 'vue'
import { createNamespace } from '../utils/create'
import { props } from './props'

const { namespace, createComponent } = createNamespace('teleport')

const TeleportPlugin = createComponent({
  props,

  data: () => ({
    el: null,
    instance: null,
  }),

  watch: {
    disabled() {
      this.transfer()
    },

    to() {
      this.transfer()
    },
  },

  methods: {
    create() {
      this.instance = new (Vue.extend({
        render: () => <div>{this.slots()}</div>,
      }))()

      this.instance.$parent = this
      this.el = this.instance.$mount().$el
    },

    transfer() {
      const container = this.disabled ? this.$refs.teleport : document.querySelector(this.to)
      const parentNode = this.el.parentNode

      if (parentNode === container) {
        return
      }

      parentNode?.removeChild(this.el)
      container.appendChild(this.el)
    },
  },

  updated() {
    this.instance.$forceUpdate()
  },

  mounted() {
    this.create()
    this.transfer()
  },

  deactivated() {
    this.el.parentNode?.removeChild(this.el)
  },

  activated() {
    this.transfer()
  },

  beforeDestroy() {
    this.instance.$destroy()
    this.el.parentNode?.removeChild(this.el)
  },

  render() {
    return <div ref="teleport" class={namespace()} />
  },
})

export const _TeleportComponent = TeleportPlugin

export default TeleportPlugin
