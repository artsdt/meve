import Dialog from '..'
import Vue from 'vue'
import { delay, trigger } from '../../utils/jest'

test('test dialog function plugin', () => {
  Vue.use(Dialog)
  expect(Vue.component(Dialog.Component.name)).toBeTruthy()
})

test('test dialog function pass string', async () => {
  Dialog('hello world')
  await delay()
  expect(document.body.innerHTML).toMatchSnapshot()
  Dialog.close()
  await delay(300)
  expect(document.body.innerHTML).toBeFalsy()
})

test('test dialog function pass events callback', async () => {
  const onConfirm = jest.fn()
  const onCancel = jest.fn()
  const onClose = jest.fn()
  const onClosed = jest.fn()
  const onOpen = jest.fn()
  const onOpened = jest.fn()
  const onBeforeClose = jest.fn()
  const onClickOverlay = jest.fn()

  Dialog({
    title: 'this is title',
    message: 'this is message',
    onConfirm,
    onCancel,
    onClose,
    onClosed,
    onOpen,
    onOpened,
    onBeforeClose,
    onClickOverlay,
  })

  await delay()
  expect(onOpen).toHaveBeenCalledTimes(1)
  await delay(300)
  expect(onOpened).toHaveBeenCalledTimes(1)

  await trigger(document.querySelector('.m-dialog__confirm-button'), 'click')
  expect(onConfirm).toHaveBeenCalledTimes(1)

  await trigger(document.querySelector('.m-dialog__cancel-button'), 'click')
  expect(onCancel).toHaveBeenCalledTimes(1)

  await trigger(document.querySelector('.m-popup__overlay'), 'click')
  expect(onClickOverlay).toHaveBeenCalledTimes(1)

  await trigger(document.querySelector('.m-dialog__close-button'), 'click')

  expect(onBeforeClose).toHaveBeenCalledTimes(4)

  Dialog.close()
  await delay()

  expect(onClose).toHaveBeenCalledTimes(1)
  await delay(300)
  expect(onClosed).toHaveBeenCalledTimes(1)
})
