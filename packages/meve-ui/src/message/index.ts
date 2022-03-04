import MessageComponent from './Message'
import { mountComponent } from '../utils/components'
import { CombinedVueInstance } from 'vue/types/vue'
import { ComponentOptions } from 'vue'
import { isNumber, isString } from '../utils/shared'
import type { Vue } from 'vue/types/vue'

let instance: CombinedVueInstance<any, any, any, any, any> | null
let unmount: (() => void) | null
let id = 0
let visibleCount = 0

export type MessageType = 'loading' | 'info' | 'warning' | 'error' | 'success'

export interface MessageOption {
  id?: number;
  type?: MessageType;
  position?: 'top' | 'bottom';
  content?: string;
  duration?: number;
  closeable?: boolean;
  forbidClick?: boolean;
  lockScroll?: boolean;
  onClose?: () => void;
  onLeave?: () => void;
  onAfterLeave?: () => void;
}

let defaultMessageOptions: MessageOption = {
  type: 'success',
  position: 'top',
  content: '',
  duration: 3000,
  closeable: true,
  forbidClick: false,
  lockScroll: false,
}

const typeMessageOptions: Record<MessageType, MessageOption> = {
  loading: {},
  info: {},
  warning: {},
  error: {},
  success: {},
}

export interface MessageInstance {
  clear(): void;
}

export interface MessageCreator {
  (options: MessageOption | string): MessageInstance;
  loading?(options: MessageOption | string): MessageInstance;
  info?(options: MessageOption | string): MessageInstance;
  warning?(options: MessageOption | string): MessageInstance;
  error?(options: MessageOption | string): MessageInstance;
  success?(options: MessageOption | string): MessageInstance;
  config?(options: MessageOption): void;
  configType?(type: MessageType, options: MessageOption): void;
}

function createMessage(options: MessageOption) {
  if (!instance) {
    const component = mountComponent(MessageComponent as ComponentOptions<Vue>, 'body')
    instance = component.instance
    unmount = component.unmount
  }

  instance.$on('remove', (id: number) => {
    if (id !== options.id) {
      return
    }

    options.onClose?.()
  })
  instance.$on('leave', (id: number) => {
    if (id !== options.id) {
      return
    }

    options.onLeave?.()
  })
  instance.$on('after-leave', (id: number) => {
    if (id !== options.id) {
      return
    }

    options.onAfterLeave?.()

    visibleCount--
    if (visibleCount === 0) {
      umountComponent()
    }
  })

  instance.position = options.position
  instance.createMessage(options)
  visibleCount++
}

function umountComponent() {
  if (instance && unmount) {
    unmount()
    instance = null
    unmount = null
    visibleCount = 0
    id = 0
  }
}

const Message: MessageCreator = function (options: MessageOption | string): MessageInstance {
  if (isString(options) || isNumber(options)) {
    options = { content: String(options) }
  }

  options = {
    ...defaultMessageOptions,
    ...options,
    id: id++,
  }

  createMessage(options)

  const clear = () => instance?.removeMessage(options)

  return { clear }
}

const messageTypes: MessageType[] = ['loading', 'info', 'warning', 'error', 'success']

messageTypes.forEach((type) => {
  Message[type] = function (options: MessageOption | string): MessageInstance {
    if (isString(options)) {
      options = { content: options }
    }

    options = { ...typeMessageOptions[type], ...options }

    options = {
      ...defaultMessageOptions,
      ...options,
      id: id++,
      type,
    }

    createMessage(options)

    const clear = () => instance?.removeMessage(options)

    return { clear }
  }
})

Message.config = function (options: MessageOption) {
  defaultMessageOptions = { ...defaultMessageOptions, ...options }
}

Message.configType = function (type: MessageType, options: MessageOption) {
  typeMessageOptions[type] = { ...typeMessageOptions[type], ...options }
}

export const _MessageComponent = {}

export default Message
