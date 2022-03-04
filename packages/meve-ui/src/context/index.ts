import Vue from 'vue'

interface Context {
  locks: Record<any, number>;
  zIndex: number;
}

const context: Context = {
  locks: {},
  zIndex: 2000,
}

const reactiveContext = Vue.observable(context)

export const _ContextComponent = reactiveContext

export default reactiveContext
