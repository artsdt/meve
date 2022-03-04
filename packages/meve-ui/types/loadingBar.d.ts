import { MComponent } from './component'

interface ILoadingBar {
  start(): void

  finish(): void

  error(): void
}

export const LoadingBar: ILoadingBar

export class _LoadingComponent extends MComponent {}
