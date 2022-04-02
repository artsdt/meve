export interface CacheInstance<T> {
  cache: T[];

  has(key: T): boolean;

  add(key: T): void;

  remove(key: T): void;

  clear(): void;
}

export const isString = (val: unknown): val is string => typeof val === 'string'

export const toNumber = (val: number | string | boolean | undefined | null): number => {
  if (val == null) return 0

  if (isString(val)) {
    val = parseFloat(val)
    val = Number.isNaN(val) ? 0 : val
    return val
  }

  if (isBoolean(val)) return Number(val)

  return val
}

export const isBoolean = (val: unknown): val is boolean => typeof val === 'boolean'

export const isFunction = (val: unknown): val is Function => typeof val === 'function'

export const isNumber = (val: unknown): val is number => typeof val === 'number'

export const isPlainObject = (val: unknown): val is Record<string, any> =>
  Object.prototype.toString.call(val) === '[object Object]'

export const isObject = (val: unknown): val is object => typeof val === 'object' && val !== null

export const isArray = (val: unknown): val is Array<any> => Array.isArray(val)

export const isEmpty = (val: unknown) =>
  val === undefined || val === null || val === '' || (Array.isArray(val) && !val.length)

export const removeItem = (arr: Array<unknown>, item: unknown) => {
  if (arr.length) {
    const index: number = arr.indexOf(item)
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

export const toggleItem = (arr: Array<unknown>, item: unknown) => {
  arr.includes(item) ? removeItem(arr, item) : arr.push(item)
}

export const throttle = (method: any, mustRunDelay = 200): (() => void) => {
  let timer: number
  let start = 0

  return function loop(this: unknown, ...args) {
    const now = Date.now()
    const elapsed = now - start

    if (!start) {
      start = now
    }

    if (timer) {
      window.clearTimeout(timer)
    }

    if (elapsed >= mustRunDelay) {
      method.apply(this, args)
      start = now
    } else {
      timer = window.setTimeout(() => {
        loop.apply(this, args)
      }, mustRunDelay - elapsed)
    }
  }
}

export const debounce = (method: any, delay = 200) => {
  let timer: number

  return function (this: unknown, ...args: any[]) {
    timer && window.clearTimeout(timer)
    timer = window.setTimeout(() => {
      method.apply(this, args)
    }, delay)
  }
}

export function kebabCase(str: string): string {
  const reg = /([^-])([A-Z])/g

  return str.replace(reg, '$1-$2').replace(reg, '$1-$2').toLowerCase()
}

export const camelize = (s: string): string => s.replace(/-(\w)/g, (_: any, p: string) => p.toUpperCase())

export const bigCamelize = (s: string): string => camelize(s).replace(s.charAt(0), s.charAt(0).toUpperCase())

export const range = (num: number, left: number, right: number) => {
  if (num < left) {
    return left
  }

  if (num > right) {
    return right
  }

  return num
}

export const delay = (time: number) => new Promise((resolve) => setTimeout(resolve, time))

export const inBrowser = () => typeof window !== 'undefined'

export const createCache = <T>(max: number): CacheInstance<T> => {
  const cache: T[] = []

  return {
    cache,

    has(key: T) {
      return this.cache.includes(key)
    },

    add(key: T) {
      if (this.has(key)) {
        return
      }

      this.cache.length === max && cache.shift()
      this.cache.push(key)
    },

    remove(key: T) {
      this.has(key) && removeItem(this.cache, key)
    },

    clear() {
      this.cache.length = 0
    },
  }
}

export const uniq = (arr: Array<any>) => [...new Set(arr)]

export const NOOP = () => {}
