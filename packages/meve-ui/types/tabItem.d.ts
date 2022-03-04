import { MComponent } from './component'

export interface TabItemProps {
  name?: string | number
}

export class TabItem extends MComponent {
  $props: TabItemProps
}

export class _TabItemComponent extends TabItem {}
