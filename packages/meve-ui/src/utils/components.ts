import Vue, { ComponentOptions } from 'vue'
import { CombinedVueInstance } from 'vue/types/vue'

export interface MountComponentApi {
  instance: CombinedVueInstance<any, any, any, any, any>;
  unmount(): void;
}

export function mountComponent(component: ComponentOptions<Vue>, container: string, options = {}): MountComponentApi {
  const instance = new (Vue.extend(component))(options)
  const el = instance.$mount().$el
  const wrapper = document.querySelector(container)!
  wrapper.appendChild(el)

  return {
    instance,
    unmount() {
      instance.$destroy()
      wrapper.removeChild(el)
    },
  }
}

export function nextTick(): Promise<void> {
  return new Promise((resolve) => Vue.nextTick(resolve))
}
