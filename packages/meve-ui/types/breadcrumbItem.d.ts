import { MComponent } from './component'

export type BreadcrumbItemProps = {
  separator?: string
}

export class BreadcrumbItem extends MComponent {
  $props: BreadcrumbItemProps
}

export class _BreadcrumbItemComponent extends BreadcrumbItem {}
