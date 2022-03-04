import type { VueConstructor } from 'vue'

export class MComponent {
  static name: string

  static install(app: VueConstructor): void
}
