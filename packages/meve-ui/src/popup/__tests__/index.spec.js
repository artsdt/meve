import Popup from '..'
import { mount } from '@vue/test-utils'
import { delay, mockStubs } from '../../utils/jest'

test('test popup open and close', async () => {
  const { mockRestore } = mockStubs()
  const wrapper = mount(Popup, {
    slots: {
      default: 'content',
    },
  })

  await wrapper.setProps({ value: true })
  expect(wrapper.emitted().open).toBeTruthy()
  await delay(300)
  expect(wrapper.emitted().opened).toBeTruthy()
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.setProps({ value: false })
  expect(wrapper.emitted().close).toBeTruthy()
  await delay(300)
  expect(wrapper.emitted().closed).toBeTruthy()
  expect(wrapper.html()).toMatchSnapshot()

  mockRestore()
  wrapper.destroy()
})

test('test popup position', async () => {
  const { mockRestore } = mockStubs()
  const wrapper = mount(Popup, {
    slots: {
      default: 'content',
    },
  })

  await wrapper.setProps({ value: true })
  expect(wrapper.find('.m-popup--center')).toBeTruthy()
  await wrapper.setProps({ position: 'left' })
  expect(wrapper.find('.m-popup--left')).toBeTruthy()
  await wrapper.setProps({ position: 'right' })
  expect(wrapper.find('.m-popup--right')).toBeTruthy()
  await wrapper.setProps({ position: 'top' })
  expect(wrapper.find('.m-popup--top')).toBeTruthy()
  await wrapper.setProps({ position: 'bottom' })
  expect(wrapper.find('.m-popup--bottom')).toBeTruthy()

  mockRestore()
  wrapper.destroy()
})

test('test popup click overlay', async () => {
  const { mockRestore } = mockStubs()
  const wrapper = mount(Popup, {
    slots: {
      default: 'content',
    },
  })

  const overlay = wrapper.find('.m-popup__overlay')

  await wrapper.setProps({ value: true })
  await overlay.trigger('click')
  expect(wrapper.emitted().clickOverlay.length).toBe(1)
  expect(wrapper.emitted().input.length).toBe(1)

  await wrapper.setProps({ closeOnClickOverlay: false })
  await overlay.trigger('click')
  expect(wrapper.emitted().clickOverlay.length).toBe(2)
  expect(wrapper.emitted().input.length).toBe(1)

  mockRestore()
  wrapper.destroy()
})

test('test popup remove overlay', () => {
  const { mockRestore } = mockStubs()
  const wrapper = mount(Popup, {
    propsData: {
      overlay: false,
    },
    slots: {
      default: 'content',
    },
  })

  expect(wrapper.html()).toMatchSnapshot()

  mockRestore()
  wrapper.destroy()
})

test('test popup custom class and style for overlay', () => {
  const { mockRestore } = mockStubs()
  const wrapper = mount(Popup, {
    propsData: {
      overlayClass: 'custom-class',
      overlayStyle: {
        backgroundColor: 'blue',
      },
    },
    slots: {
      default: 'content',
    },
  })

  expect(wrapper.html()).toMatchSnapshot()

  mockRestore()
  wrapper.destroy()
})
