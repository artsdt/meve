import { MComponent } from './component'

export interface TabsItemsProps {
  value?: string | number
  onInput?: (active: string | number) => void
}

export class TabsItems extends MComponent {
  $props: TabsItemsProps
}

export class _TabsItemsComponent extends TabsItems {}
