import { MComponent } from './component'

export interface ImageProps {
  src?: string
  fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
  alt?: string
  width?: string | number
  height?: string | number
  radius?: string | number
  loading?: string
  error?: string
  lazy?: boolean
  ripple?: boolean
  block?: boolean
  previewDisabled?: boolean
  onClick?: (e: Event) => void
  onLoad?: (e: Event) => void
  onError?: (e: Event) => void
}

export class Image extends MComponent {
  $props: ImageProps
}

export class _ImageComponent extends Image {}
