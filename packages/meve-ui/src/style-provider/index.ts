import StyleProviderPlugin from './StyleProvider.jsx'
import { formatStyleVars } from '../utils/elements'
import { VueConstructor } from 'vue'

export type StyleVars = Record<string, string>

const mountedVarKeys: string[] = []

function StyleProvider(styleVars: StyleVars | null = {}) {
  mountedVarKeys.forEach((key) => document.documentElement.style.removeProperty(key))
  mountedVarKeys.length = 0

  const styles: StyleVars = formatStyleVars(styleVars)
  Object.entries(styles).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value)
    mountedVarKeys.push(key)
  })
}

StyleProvider.Component = StyleProviderPlugin

StyleProvider.install = function (Vue: VueConstructor) {
  Vue.use(StyleProviderPlugin)
}

export const _StyleProviderComponent = StyleProviderPlugin

export default StyleProvider
