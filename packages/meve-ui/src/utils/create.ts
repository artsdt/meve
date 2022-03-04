import type Vue from 'vue'
import { VNodeData, ComponentOptions, VueConstructor, CreateElement, VNode, RenderContext } from 'vue'
import { PropsDefinition } from 'vue/types/options'
import { bigCamelize, isArray, isFunction, kebabCase } from './shared'
import { SlotsMixin } from './mixins/slots'

export type DefaultProps = Record<string, any>

export type DefaultSlots = {
  default?: ScopedSlot;
}

export type ScopedSlot<Props = any> = (props?: Props) => VNode[] | undefined

export type ScopedSlots = {
  [key: string]: ScopedSlot | undefined;
} & DefaultSlots

export type FunctionComponent<Props = DefaultProps, PropsDefinitions = PropsDefinition<Props>> = {
  (h: CreateElement, props: Props, slots: ScopedSlots, context: RenderContext<Props>): VNode | undefined;
  name?: string;
  props?: PropsDefinitions;
}

export type FunctionComponentPlugin = FunctionComponent & ComponentPlugin

export type TsxBaseProps<Slots> = {
  key: string | number;
  props: any;
  class: any;
  style: string | object[] | object;
  scopedSlots: Slots;
}

export type TsxComponent<Props, Events, Slots> = (props: Partial<Props & Events & TsxBaseProps<Slots>>) => VNode

export interface ComponentPlugin {
  install?: (app: VueConstructor, options?: any) => void;
}

export type ComponentOptionsPlugin = ComponentOptions<Vue> & ComponentPlugin

export function mergeSlots(context: RenderContext) {
  const scopedSlots = context.scopedSlots ?? context.data.scopedSlots ?? {}
  const slots = context.slots()

  Object.keys(slots).forEach((key) => {
    if (!scopedSlots[key]) {
      scopedSlots[key] = () => slots[key]
    }
  })

  return scopedSlots
}

export function wrapFunctionComponent(
  functionComponent: FunctionComponent
): ComponentOptionsPlugin & { functional?: boolean } {
  return {
    functional: true,
    props: functionComponent.props,
    render: (h: CreateElement, context: RenderContext): any =>
      functionComponent(h, context.props, mergeSlots(context), context),
  }
}

export function install(this: ComponentOptions<Vue>, Vue: VueConstructor) {
  Vue.component(this.name as string, this)
}

export function createComponent<Props = DefaultProps, Events = {}, Slots = {}>(
  name: string,
  sfc: ComponentOptionsPlugin | FunctionComponentPlugin
) {
  if (isFunction(sfc)) {
    sfc = wrapFunctionComponent(sfc as FunctionComponentPlugin)
  } else if ((sfc as ComponentOptionsPlugin).mixins) {
    ;(sfc as ComponentOptionsPlugin).mixins!.push(SlotsMixin)
  } else {
    ;(sfc as ComponentOptionsPlugin).mixins = [SlotsMixin]
  }

  sfc.name = `M${bigCamelize(name)}`
  sfc.install = install

  return sfc as TsxComponent<Props, Events, Slots>
}

export function createNamespace(name: string) {
  return {
    createComponent<Props, Events, Slots>(sfc: ComponentOptionsPlugin | FunctionComponentPlugin) {
      return createComponent<Props, Events, Slots>(name, sfc)
    },
    namespace: (suffix = '') => `m-${kebabCase(name)}${suffix}`,
  }
}

export type Context = RenderContext & { data: VNodeData & Record<string, any> }

export type InheritContext = Partial<VNodeData> & Record<string, any>

const inheritKeys = [
  'ref',
  'key',
  'style',
  'class',
  'attrs',
  'refInFor',
  'nativeOn',
  'directives',
  'staticClass',
  'staticStyle',
]

export function inherit(context: Context): InheritContext {
  return inheritKeys.reduce((ret, key) => {
    if (context.data[key]) {
      ret[key === 'nativeOn' ? 'on' : key] = context.data[key]
    }
    return ret
  }, {} as InheritContext)
}

export function emit(context: RenderContext, eventName: string, ...args: any[]) {
  const listeners = context.listeners[eventName]
  if (isArray(listeners)) {
    listeners.forEach((listener) => listener(...args))
  } else {
    listeners?.(...args)
  }
}
