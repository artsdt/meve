import Sticky from '..'
import { trigger } from '../../utils/jest'
import { mount } from '@vue/test-utils'

test('test sticky z-index', () => {
  const wrapper = mount(Sticky, {
    propsData: {
      zIndex: 100,
    },
    attachTo: document.body,
  })

  expect(wrapper.element.style.zIndex).toBe('100')
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})

test('test sticky onScroll', async () => {
  const wrapper = mount(Sticky, {
    slots: {
      default: 'sticky content',
    },
    attachTo: document.body,
  })

  expect(wrapper.emitted().scroll.length).toBe(1)
  await trigger(window, 'scroll')
  expect(wrapper.emitted().scroll.length).toBe(2)
  wrapper.destroy()
})

test('test sticky scrolling with css sticky position', async () => {
  const mockGetComputedStyle = jest.spyOn(window, 'getComputedStyle').mockReturnValue({ position: 'sticky' })

  const wrapper = mount(Sticky, {
    propsData: {
      offsetTop: 100,
      cssMode: true,
    },
    slots: {
      default: 'sticky content',
    },
    attachTo: document.body,
  })

  const mockGetBoundingClientRect = jest.spyOn(wrapper.element, 'getBoundingClientRect').mockReturnValue({ top: 200 })
  await trigger(window, 'scroll')
  expect(wrapper.html()).toMatchSnapshot()

  jest.spyOn(wrapper.element, 'getBoundingClientRect').mockReturnValue({
    top: 100,
  })
  await trigger(window, 'scroll')
  expect(wrapper.html()).toMatchSnapshot()

  mockGetComputedStyle.mockRestore()
  mockGetBoundingClientRect.mockRestore()
  wrapper.destroy()
})

test('test sticky scrolling without css sticky position', async () => {
  const mockGetComputedStyle = jest.spyOn(window, 'getComputedStyle').mockReturnValue({ position: 'relative' })

  const wrapper = mount(Sticky, {
    propsData: {
      offsetTop: 100,
    },
    slots: {
      default: 'sticky content',
    },
    attachTo: document.body,
  })

  const mockGetBoundingClientRect = jest.spyOn(wrapper.element, 'getBoundingClientRect').mockReturnValue({ top: 200 })

  await trigger(window, 'scroll')
  expect(wrapper.html()).toMatchSnapshot()

  jest.spyOn(wrapper.element, 'getBoundingClientRect').mockReturnValue({ top: 100 })
  await trigger(window, 'scroll')
  expect(wrapper.html()).toMatchSnapshot()

  mockGetComputedStyle.mockRestore()
  mockGetBoundingClientRect.mockRestore()
  wrapper.destroy()
})

test('test sticky disabled with css sticky position', async () => {
  const mockGetComputedStyle = jest.spyOn(window, 'getComputedStyle').mockReturnValue({ position: 'sticky' })

  const wrapper = mount(Sticky, {
    propsData: {
      offsetTop: 100,
      cssMode: true,
      disabled: true,
    },
    slots: {
      default: 'sticky content',
    },
    attachTo: document.body,
  })

  const mockGetBoundingClientRect = jest.spyOn(wrapper.element, 'getBoundingClientRect').mockReturnValue({ top: 200 })
  await trigger(window, 'scroll')
  expect(wrapper.html()).toMatchSnapshot()

  jest.spyOn(wrapper.element, 'getBoundingClientRect').mockReturnValue({
    top: 100,
  })
  await trigger(window, 'scroll')
  expect(wrapper.html()).toMatchSnapshot()

  mockGetComputedStyle.mockRestore()
  mockGetBoundingClientRect.mockRestore()
  wrapper.destroy()
})

test('test sticky disabled without css sticky position', async () => {
  const mockGetComputedStyle = jest.spyOn(window, 'getComputedStyle').mockReturnValue({ position: 'relative' })

  const wrapper = mount(Sticky, {
    props: {
      offsetTop: 100,
      disabled: true,
    },
    slots: {
      default: 'sticky content',
    },
    attachTo: document.body,
  })

  const mockGetBoundingClientRect = jest.spyOn(wrapper.element, 'getBoundingClientRect').mockReturnValue({ top: 200 })

  await trigger(window, 'scroll')
  expect(wrapper.html()).toMatchSnapshot()

  jest.spyOn(wrapper.element, 'getBoundingClientRect').mockReturnValue({ top: 100 })
  await trigger(window, 'scroll')
  expect(wrapper.html()).toMatchSnapshot()

  mockGetComputedStyle.mockRestore()
  mockGetBoundingClientRect.mockRestore()
  wrapper.destroy()
})
