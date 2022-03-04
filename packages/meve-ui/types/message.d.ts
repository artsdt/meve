export type MessageType = 'loading' | 'info' | 'warning' | 'error' | 'success'

export interface MessageOption {
  type?: MessageType
  position?: 'top' | 'bottom'
  content?: string
  duration?: number
  closable?: boolean
  forbidClick?: boolean
  lockScroll?: boolean
  onClose?: () => void
  onLeave?: () => void
  onAfterLeave?: () => void
}

export interface MessageInstance {
  clear(): void
}

export interface MessageCreator {
  (options: MessageOption | string): MessageInstance
  loading?(options: MessageOption | string): MessageInstance
  info?(options: MessageOption | string): MessageInstance
  warning?(options: MessageOption | string): MessageInstance
  error?(options: MessageOption | string): MessageInstance
  success?(options: MessageOption | string): MessageInstance
  config?(options: MessageOption): void
  configType?(type: MessageType, options: MessageOption): void
}

export const Message: MessageCreator
