import { MComponent } from './component'

export type CardProps = {
  title?: string
  subtitle?: string
  description?: string
}

export class Card extends MComponent {
  $props: CardProps
}

export class _CardComponent extends Card {}
