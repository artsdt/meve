import Vue from 'vue'
import { Wrapper, config } from '@vue/test-utils'
import { isPlainObject } from './shared'

export const delay = (time = 0) => new Promise((resolve) => setTimeout(resolve, time))

export function mockOffset({
  offsetWidth,
  offsetHeight,
  clientWidth,
  clientHeight,
  offsetLeft,
  offsetTop,
  scrollWidth,
  scrollHeight,
}: {
  offsetWidth?: number;
  offsetHeight?: number;
  clientWidth?: number;
  clientHeight?: number;
  offsetLeft?: number;
  offsetTop?: number;
  scrollWidth?: number;
  scrollHeight?: number;
} = {}) {
  Object.defineProperties(HTMLElement.prototype, {
    offsetWidth: {
      get() {
        return offsetWidth ?? (parseFloat(window.getComputedStyle(this).width) || 0)
      },
    },
    offsetHeight: {
      get() {
        return offsetHeight ?? (parseFloat(window.getComputedStyle(this).height) || 0)
      },
    },
    clientWidth: {
      get() {
        return clientWidth ?? (parseFloat(window.getComputedStyle(this).width) || 0)
      },
    },
    clientHeight: {
      get() {
        return clientHeight ?? (parseFloat(window.getComputedStyle(this).height) || 0)
      },
    },
    offsetLeft: {
      get() {
        return offsetLeft ?? (parseFloat(window.getComputedStyle(this).marginLeft) || 0)
      },
    },
    offsetTop: {
      get() {
        return offsetTop ?? (parseFloat(window.getComputedStyle(this).marginTop) || 0)
      },
    },
    offsetParent: {
      get() {
        return this.parentNode ?? {}
      },
    },
    scrollWidth: {
      get() {
        return scrollWidth ?? 0
      },
    },
    scrollHeight: {
      get() {
        return scrollHeight ?? 0
      },
    },
  })

  return {
    mockRestore() {
      Object.defineProperties(HTMLElement.prototype, {
        offsetWidth: {
          get() {
            return parseFloat(window.getComputedStyle(this).width) || 0
          },
        },
        offsetHeight: {
          get() {
            return parseFloat(window.getComputedStyle(this).height) || 0
          },
        },
        clientWidth: {
          get() {
            return parseFloat(window.getComputedStyle(this).width) || 0
          },
        },
        clientHeight: {
          get() {
            return parseFloat(window.getComputedStyle(this).height) || 0
          },
        },
        offsetLeft: {
          get() {
            return parseFloat(window.getComputedStyle(this).marginLeft) || 0
          },
        },
        offsetTop: {
          get() {
            return parseFloat(window.getComputedStyle(this).marginTop) || 0
          },
        },
        offsetParent: {
          get() {
            return this.parentNode ?? {}
          },
        },
        scrollWidth: {
          get() {
            return 0
          },
        },
        scrollHeight: {
          get() {
            return 0
          },
        },
      })
    },
  }
}

export async function triggerDrag(
  el: Wrapper<Vue> | HTMLElement | Window,
  x = 0,
  y = 0,
  triggerTouchend = true,
  triggerDocument = false
) {
  const delegationEl = triggerDocument ? document : el

  await trigger(el, 'touchstart', 0, 0)
  await trigger(delegationEl, 'touchmove', x / 4, y / 4)
  await trigger(delegationEl, 'touchmove', x / 3, y / 3)
  await trigger(delegationEl, 'touchmove', x / 2, y / 2)
  await trigger(delegationEl, 'touchmove', x, y)

  if (triggerTouchend) {
    await trigger(delegationEl, 'touchend', x, y)
  }
}

export function getTouch(el: Element | Window | Document, x: number, y: number) {
  return {
    identifier: Date.now(),
    target: el,
    pageX: x,
    pageY: y,
    clientX: x,
    clientY: y,
    radiusX: 2.5,
    radiusY: 2.5,
    rotationAngle: 10,
    force: 0.5,
  }
}

export function trigger(
  wrapper: Wrapper<Vue> | HTMLElement | Window | Document,
  eventName: string,
  x = 0,
  y = 0,
  deltaX = 0,
  deltaY = 0,
  offsetX = 0,
  offsetY = 0,
  args = {}
) {
  const el = 'element' in wrapper ? wrapper.element : wrapper
  const touchList = [getTouch(el, x, y)]

  const event = document.createEvent('CustomEvent')
  event.initCustomEvent(eventName, true, true, {})

  Object.assign(event, {
    clientX: x,
    clientY: y,
    deltaX,
    deltaY,
    offsetX,
    offsetY,
    touches: touchList,
    targetTouches: touchList,
    changedTouches: touchList,
    ...args,
  })

  el.dispatchEvent(event)

  return Vue.nextTick()
}

export function mockStubs() {
  const originStubs = config.stubs

  config.stubs = {}

  return {
    mockRestore() {
      config.stubs = originStubs
    },
  }
}

export function mockDoubleRaf() {
  const originMethod = window.requestAnimationFrame

  Object.assign(window, {
    requestAnimationFrame(fn: any) {
      setTimeout(fn, 16)
    },
  })

  return {
    mockRestore() {
      window.requestAnimationFrame = originMethod
    },
  }
}

export function mockScrollTo(Element: any) {
  Element.prototype.scrollTo = function (x: ScrollToOptions | number, y?: number) {
    if (isPlainObject(x)) {
      this.scrollLeft = x.left
      this.scrollTop = x.top
    } else {
      this.scrollLeft = x
      this.scrollTop = y
    }
  }
}
