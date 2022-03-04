import type { VueConstructor } from 'vue'
import type { DirectiveBinding } from 'vue/types/options'

export class MDirective {
  static install(app: VueConstructor): void

  static inserted(el: HTMLElement, binding: DirectiveBinding): void

  static update(el: HTMLElement, binding: DirectiveBinding): void

  static unbind(el: HTMLElement, binding: DirectiveBinding): void
}
