import { MComponent } from './component'

export interface StickyProps {
  offsetTop?: string | number
  zIndex?: string | number
  cssMode?: boolean
  disabled?: boolean
  onScroll?: (offsetTop: number, isFixed: boolean) => void
}

export class Sticky extends MComponent {
  $props: StickyProps
}

export class _StickyComponent extends Sticky {}
