import type { VueConstructor } from 'vue'
import { MComponent } from './component'

export type StyleVars = Record<string, string>

export interface StyleProviderProps {
  styleVars?: StyleVars
}

export class StyleProviderComponent extends MComponent {
  $props: StyleProviderProps
}

export interface IStyleProvider {
  (options: StyleVars | null): void
  Component: typeof StyleProviderComponent

  install(app: VueConstructor): void
}

export const StyleProvider: IStyleProvider

export class _StyleProviderComponent extends StyleProviderComponent {}
