import { MComponent } from './component'

export interface MFile {
  file?: File
  name?: string
  url?: string
  cover?: string
  progress?: number
  fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
  state?: 'loading' | 'success' | 'error'
}

export type UploaderValidateTrigger = 'onChange' | 'onRemove'

export type UploaderMFileUtils = {
  getLoading(): MFile[]
  getSuccess(): MFile[]
  getError(): MFile[]
}

interface UploaderProps {
  value?: MFile[]
  label?: string | number
  accept?: string
  capture?: boolean | 'user' | 'environment'
  multiple?: boolean
  readonly?: boolean
  disabled?: boolean
  removable?: boolean
  maxlength?: string | number
  maxsize?: string | number
  previewed?: boolean
  hideList?: boolean
  validateTrigger?: Array<UploaderValidateTrigger>
  rules?: Array<(v: MFile[], u: UploaderMFileUtils) => any>
  onBeforeRead?: (file: MFile) => Promise<boolean> | boolean
  onAfterRead?: (file: MFile) => any
  onOversize?: (file: MFile) => any
  onBeforeRemove?: (file: MFile) => any
  onRemove?: (file: MFile) => any
  onInput?: (files: MFile[]) => any
}

export class Uploader extends MComponent {
  $props: UploaderProps

  getLoading(): MFile[]

  getSuccess(): MFile[]

  getError(): MFile[]

  validate(): Promise<boolean>

  resetValidation(): void

  reset(): void
}

export class _UploaderComponent extends Uploader {}
