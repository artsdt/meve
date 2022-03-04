import LoadingBarComponent from './LoadingBar'
import { mountComponent, MountComponentApi } from '../utils/components'
import Vue, { ComponentOptions } from 'vue'

interface LoadingBarApi {
  start(): void;

  finish(): void;

  error(): void;
}

let instance: MountComponentApi

function ensureInstance() {
  if (!instance) {
    instance = mountComponent(LoadingBarComponent as ComponentOptions<Vue>, 'body')
  }
}

function start() {
  ensureInstance()

  instance.instance.transition = undefined
  instance.instance.error = false
  instance.instance.value = 0
  instance.instance.opacity = 1

  requestAnimationFrame(() => {
    instance.instance.transition = 'width 4s linear, opacity 1s linear, background-color 2s'
    instance.instance.value = 80
  })
}

function finish() {
  if (!instance) {
    return
  }

  instance.instance.transition = 'width .3s linear, opacity 1s linear, background-color 2s'
  instance.instance.error = false
  instance.instance.value = 100
  instance.instance.opacity = 0
}

function error() {
  ensureInstance()

  instance.instance.transition = undefined
  instance.instance.value = 0
  instance.instance.opacity = 1
  instance.instance.error = true

  requestAnimationFrame(() => {
    instance.instance.transition = 'width .3s linear, opacity 1s linear, background-color 2s'
    instance.instance.value = 100
    instance.instance.opacity = 0
  })
}

const LoadingBar: LoadingBarApi = {
  start,
  finish,
  error,
}

export const _LoadingBarComponent = LoadingBarComponent

export default LoadingBar
