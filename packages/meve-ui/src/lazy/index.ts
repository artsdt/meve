import { getAllParentScroller, inViewport } from '../utils/elements'
import { createCache, removeItem, throttle } from '../utils/shared'
import type { VueConstructor } from 'vue'
import type { DirectiveBinding } from 'vue/types/options'
import type { CacheInstance } from '../utils/shared'
import { DirectiveOptions } from 'vue'
import { ComponentPlugin } from '../utils/create'

interface LazyOptions {
  loading?: string;
  error?: string;
  attempt?: number;
  throttleWait?: number;
  filter?: (lazy: Lazy) => void;
  events?: string[];
}

type LazyState = 'pending' | 'success' | 'error'

type Lazy = LazyOptions & {
  src: string;
  arg: string | undefined;
  currentAttempt: number;
  attemptLock: boolean;
  state: LazyState;
  preloadImage?: HTMLImageElement;
}

interface LazyHTMLElement extends HTMLElement {
  _lazy: Lazy;
}

type ListenTarget = Window | HTMLElement

const BACKGROUND_IMAGE_ARG_NAME = 'background-image'
const LAZY_LOADING = 'lazy-loading'
const LAZY_ERROR = 'lazy-error'
const LAZY_ATTEMPT = 'lazy-attempt'
const EVENTS = ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend', 'touchmove']
export const PIXEL = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='
const lazyElements: LazyHTMLElement[] = []
const listenTargets: ListenTarget[] = []

export const imageCache: CacheInstance<string> = createCache<string>(100)

export const defaultLazyOptions: LazyOptions = {
  loading: PIXEL,
  error: PIXEL,
  attempt: 3,
  throttleWait: 300,
  events: EVENTS,
}

let checkAllWithThrottle = throttle(checkAll, defaultLazyOptions.throttleWait)

function setSRC(el: LazyHTMLElement, src: string) {
  if (el._lazy.arg === BACKGROUND_IMAGE_ARG_NAME) {
    el.style.backgroundImage = `url(${src})`
  } else {
    el.setAttribute('src', src)
  }
}

function setLoading(el: LazyHTMLElement) {
  el._lazy.loading && setSRC(el, el._lazy.loading)

  checkAll()
}

function setError(el: LazyHTMLElement) {
  el._lazy.error && setSRC(el, el._lazy.error)
  el._lazy.state = 'error'

  unbind(el)
  checkAll()
}

function setSuccess(el: LazyHTMLElement, attemptSRC: string) {
  setSRC(el, attemptSRC)
  el._lazy.state = 'success'

  unbind(el)
  checkAll()
}

function bindEvents(listenTarget: ListenTarget) {
  if (listenTargets.includes(listenTarget)) {
    return
  }
  listenTargets.push(listenTarget)

  defaultLazyOptions.events?.forEach((event: string) => {
    listenTarget.addEventListener(event, checkAllWithThrottle, { passive: true })
  })
}

function unbindEvents() {
  listenTargets.forEach((listenTarget: ListenTarget) => {
    defaultLazyOptions.events?.forEach((event: string) => {
      listenTarget.removeEventListener(event, checkAllWithThrottle)
    })
  })

  listenTargets.length = 0
}

function createLazy(el: HTMLElement, binding: DirectiveBinding): LazyHTMLElement {
  const lazyOptions: LazyOptions = {
    loading: el.getAttribute(LAZY_LOADING) ?? defaultLazyOptions.loading,
    error: el.getAttribute(LAZY_ERROR) ?? defaultLazyOptions.error,
    attempt: el.getAttribute(LAZY_ATTEMPT) ? Number(el.getAttribute(LAZY_ATTEMPT)) : defaultLazyOptions.attempt,
  }

  const lazyEl = Object.assign(el, {
    _lazy: {
      src: binding.value,
      arg: binding.arg,
      currentAttempt: 0,
      state: 'pending',
      attemptLock: false,
      ...lazyOptions,
    },
  }) as LazyHTMLElement

  setSRC(lazyEl, PIXEL)

  defaultLazyOptions.filter?.(lazyEl._lazy)

  return lazyEl
}

function createImage(el: LazyHTMLElement, attemptSRC: string) {
  const image: HTMLImageElement = new Image()
  image.src = attemptSRC
  el._lazy.preloadImage = image

  image.addEventListener('load', () => {
    el._lazy.attemptLock = false

    imageCache.add(attemptSRC)
    setSuccess(el, attemptSRC)
  })
  image.addEventListener('error', () => {
    el._lazy.attemptLock = false
    ;(el._lazy.currentAttempt as number) >= (el._lazy.attempt as number) ? setError(el) : attemptLoad(el)
  })
}

function attemptLoad(el: LazyHTMLElement) {
  if (el._lazy.attemptLock) {
    return
  }
  el._lazy.attemptLock = true
  el._lazy.currentAttempt++

  const { src: attemptSRC }: Lazy = el._lazy

  if (imageCache.has(attemptSRC)) {
    setSuccess(el, attemptSRC)
    el._lazy.attemptLock = false
    return
  }

  setLoading(el)
  createImage(el, attemptSRC)
}

async function check(el: LazyHTMLElement) {
  ;(await inViewport(el)) && attemptLoad(el)
}

function checkAll() {
  lazyElements.forEach((el: LazyHTMLElement) => check(el))
}

async function add(el: LazyHTMLElement) {
  !lazyElements.includes(el) && lazyElements.push(el)
  getAllParentScroller(el).forEach(bindEvents)
  await check(el)
}

function unbind(el: HTMLElement) {
  removeItem(lazyElements, el)
  lazyElements.length === 0 && unbindEvents()
}

function diff(el: LazyHTMLElement, binding: DirectiveBinding): boolean {
  const { src, arg } = el._lazy

  return src !== binding.value || arg !== binding.arg
}

async function inserted(el: HTMLElement, binding: DirectiveBinding) {
  await add(createLazy(el, binding))
}

async function update(el: HTMLElement, binding: DirectiveBinding) {
  const lazyEl = el as LazyHTMLElement

  if (!diff(lazyEl, binding)) {
    lazyElements.includes(lazyEl) && (await check(lazyEl))
    return
  }

  await inserted(el, binding)
}

function mergeLazyOptions(lazyOptions: LazyOptions = {}) {
  const { events, loading, error, attempt, throttleWait, filter } = lazyOptions

  defaultLazyOptions.events = events ?? defaultLazyOptions.events
  defaultLazyOptions.loading = loading ?? defaultLazyOptions.loading
  defaultLazyOptions.error = error ?? defaultLazyOptions.error
  defaultLazyOptions.attempt = attempt ?? defaultLazyOptions.attempt
  defaultLazyOptions.throttleWait = throttleWait ?? defaultLazyOptions.throttleWait
  defaultLazyOptions.filter = filter
}

const Lazy: DirectiveOptions & ComponentPlugin = {
  inserted,
  unbind,
  update,
  install(app: VueConstructor, lazyOptions: LazyOptions) {
    mergeLazyOptions(lazyOptions)

    checkAllWithThrottle = throttle(checkAll, defaultLazyOptions.throttleWait)

    app.directive('lazy', this)
  },
}

export const _LazyComponent = Lazy

export default Lazy
