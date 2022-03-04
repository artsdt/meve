import { MComponent } from './component'

export type ScrollerProps = {
  height?: string | number
}

export class Scroller extends MComponent {
  $props: ScrollerProps
}

export class _ScrollerComponent extends Scroller {}
