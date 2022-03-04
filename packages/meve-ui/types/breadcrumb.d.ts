import { MComponent } from './component'

export type BreadcrumbProps = {
  separator?: string
}

export class Breadcrumb extends MComponent {
  $props: BreadcrumbProps
}

export class _BreadcrumbComponent extends Breadcrumb {}
