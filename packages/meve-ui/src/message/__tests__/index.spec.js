import Message from '..'
import { delay, trigger } from '../../utils/jest'

Message.config({
  duration: 100,
})

Message.configType('loading', {
  forbidClick: true,
  lockScroll: true,
})

test('test message default function call pass string', async () => {
  Message('hello world')

  await delay(0)
  const html = document.body.innerHTML
  expect(html).toMatchSnapshot()
  expect(html.includes('m-message--success')).toBe(true)
  await delay(200)
  expect(document.body.innerHTML).toBe('')
})

test('test message default function call pass options', async () => {
  Message({
    content: 'hello world',
    type: 'error',
  })

  await delay(0)
  const html = document.body.innerHTML
  expect(html).toMatchSnapshot()
  expect(html.includes('hello world')).toBe(true)
  expect(html.includes('m-message--error')).toBe(true)
  await delay(200)
  expect(document.body.innerHTML).toBe('')
})

test('test message success function call pass string', async () => {
  Message.success('hello world')

  await delay(0)
  const html = document.body.innerHTML
  expect(html).toMatchSnapshot()
  expect(html.includes('hello world')).toBe(true)
  expect(html.includes('m-message--success')).toBe(true)
  await delay(200)
  expect(document.body.innerHTML).toBe('')
})

test('test message info function call pass string', async () => {
  Message.info('hello world')

  await delay(0)
  const html = document.body.innerHTML
  expect(html).toMatchSnapshot()
  expect(html.includes('hello world')).toBe(true)
  expect(html.includes('m-message--info')).toBe(true)
  await delay(200)
  expect(document.body.innerHTML).toBe('')
})

test('test message warning function call pass string', async () => {
  Message.warning('hello world')

  await delay(0)
  const html = document.body.innerHTML
  expect(html).toMatchSnapshot()
  expect(html.includes('hello world')).toBe(true)
  expect(html.includes('m-message--warning')).toBe(true)
  await delay(200)
  expect(document.body.innerHTML).toBe('')
})

test('test message error function call pass string', async () => {
  Message.error('hello world')

  await delay(0)
  expect(document.body.innerHTML).toMatchSnapshot()
  expect(document.body.innerHTML.includes('hello world')).toBe(true)
  expect(document.body.innerHTML.includes('m-message--error')).toBe(true)
  await delay(200)
  expect(document.body.innerHTML).toBe('')
})

test('test message loading function call pass string', async () => {
  const { clear } = Message.loading('hello world')

  await delay(0)
  const html = document.body.innerHTML
  expect(html).toMatchSnapshot()
  expect(html.includes('hello world')).toBe(true)
  expect(html.includes('m-message--loading')).toBe(true)
  expect(html.includes('m-message--forbid-click')).toBe(true)
  expect(document.body.classList.contains('m--lock')).toBe(true)

  await delay(200)
  expect(html.includes('m-message--loading')).toBe(true)

  clear()
  await delay(200)
  expect(document.body.innerHTML).toBe('')
})

test('test message closeable and position function all pass options', async () => {
  Message.success({
    content: 'hello world',
    position: 'bottom',
    closeable: false,
  })

  await delay(0)
  const html = document.body.innerHTML
  expect(html).toMatchSnapshot()
  expect(html.includes('hello world')).toBe(true)
  expect(html.includes('m-message--success')).toBe(true)
  expect(html.includes('m-message--bottom')).toBe(true)
  expect(html.includes('m-message__close-icon')).toBe(false)

  await delay(200)
  expect(document.body.innerHTML).toBe('')
})

test('test message queue', async () => {
  Message.success('hello world')
  Message.warning('hello world')
  Message.error('hello world')

  await delay(0)
  const html = document.body.innerHTML
  expect(html).toMatchSnapshot()
  expect(html.includes('hello world')).toBe(true)
  expect(html.includes('m-message--success')).toBe(true)
  expect(html.includes('m-message--warning')).toBe(true)
  expect(html.includes('m-message--error')).toBe(true)

  await delay(200)
  expect(document.body.innerHTML).toBe('')
})

test('test message event', async () => {
  const onClose = jest.fn()
  const onLeave = jest.fn()
  const onAfterLeave = jest.fn()

  Message.success({
    duration: Infinity,
    content: 'hello world',
    onClose,
    onLeave,
    onAfterLeave,
  })

  await delay(0)
  expect(document.body.innerHTML.includes('hello world')).toBe(true)
  await trigger(document.querySelector('.m-message__close-icon'), 'click')

  await delay(200)
  expect(document.body.innerHTML).toBe('')
  expect(onClose).toHaveBeenCalledTimes(1)
  expect(onLeave).toHaveBeenCalledTimes(1)
  expect(onAfterLeave).toHaveBeenCalledTimes(1)
})

test('test message call clear after trigger close', async () => {
  const onClose = jest.fn()

  const { clear } = Message.success({
    duration: Infinity,
    content: 'hello world',
    onClose,
  })

  await delay(0)
  expect(document.body.innerHTML.includes('hello world')).toBe(true)
  await trigger(document.querySelector('.m-message__close-icon'), 'click')
  clear()

  await delay(200)
  expect(document.body.innerHTML).toBe('')
  expect(onClose).toHaveBeenCalledTimes(1)

  clear()
  await delay(0)
  expect(document.body.innerHTML).toBe('')
})
