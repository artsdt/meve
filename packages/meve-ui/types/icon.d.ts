import { MComponent } from './component'

export type IconProps = {
  name?: string
  size?: string | number
  color?: string
  namespace?: string
  onClick?: (event: Event) => void
}

export class Icon extends MComponent {
  $props: IconProps
}

export class _IconComponent extends Icon {}
