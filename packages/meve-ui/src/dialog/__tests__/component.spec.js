import Dialog from '..'
import { mount } from '@vue/test-utils'
import { mockStubs, delay } from '../../utils/jest'

test('test dialog open and close', async () => {
  const { mockRestore } = mockStubs()
  const wrapper = mount(Dialog.Component, {
    propsData: {
      title: '标题',
      message: '测试信息',
      value: false,
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
  await wrapper.setProps({ value: true })
  expect(wrapper.emitted().open).toBeTruthy()
  expect(wrapper.html()).toMatchSnapshot()
  await delay(300)
  expect(wrapper.emitted().opened).toBeTruthy()

  await wrapper.setProps({ value: false })
  expect(wrapper.emitted().close).toBeTruthy()
  expect(wrapper.html()).toMatchSnapshot()
  await delay(300)
  expect(wrapper.emitted().closed).toBeTruthy()

  mockRestore()
  wrapper.destroy()
})

test('test dialog hide button', async () => {
  const { mockRestore } = mockStubs()
  const wrapper = mount(Dialog.Component, {
    propsData: {
      confirmButton: false,
      cancelButton: false,
      value: true,
    },
  })

  expect(wrapper.html()).toMatchSnapshot()

  mockRestore()
  wrapper.destroy()
})

test('test dialog trigger', async () => {
  const { mockRestore } = mockStubs()

  const wrapper = mount(Dialog.Component, {
    propsData: {
      value: true,
    },
  })

  await wrapper.find('.m-dialog__cancel-button').trigger('click')
  expect(wrapper.emitted().input[0][0]).toBe(false)
  expect(wrapper.emitted().cancel).toBeTruthy()

  await wrapper.find('.m-dialog__confirm-button').trigger('click')
  expect(wrapper.emitted().input[1][0]).toBe(false)
  expect(wrapper.emitted().confirm).toBeTruthy()

  await wrapper.find('.m-dialog__close-button').trigger('click')
  expect(wrapper.emitted().input[2][0]).toBe(false)

  await wrapper.find('.m-popup__overlay').trigger('click')
  expect(wrapper.emitted().input[3][0]).toBe(false)

  mockRestore()
  wrapper.destroy()
})

test('test dialog before close hook', async () => {
  const { mockRestore } = mockStubs()

  const wrapper = mount(Dialog.Component, {
    propsData: {
      beforeClose: () => {},
      value: true,
    },
  })

  await wrapper.find('.m-dialog__cancel-button').trigger('click')
  expect(wrapper.emitted().input).toBeFalsy()

  await wrapper.find('.m-dialog__confirm-button').trigger('click')
  expect(wrapper.emitted().input).toBeFalsy()

  await wrapper.find('.m-dialog__close-button').trigger('click')
  expect(wrapper.emitted().input).toBeFalsy()

  await wrapper.find('.m-popup__overlay').trigger('click')
  expect(wrapper.emitted().input).toBeFalsy()

  await wrapper.setProps({ beforeClose: (action, done) => done() })
  await wrapper.find('.m-dialog__cancel-button').trigger('click')
  expect(wrapper.emitted().input).toBeTruthy()

  mockRestore()
  wrapper.destroy()
})

test('test dialog pass closeOnClickOverlay', async () => {
  const { mockRestore } = mockStubs()

  const wrapper = mount(Dialog.Component, {
    propsData: {
      closeOnClickOverlay: false,
      value: true,
    },
  })

  await wrapper.find('.m-popup__overlay').trigger('click')
  expect(wrapper.emitted().input).toBeFalsy()

  mockRestore()
  wrapper.destroy()
})

test('test dialog slots', async () => {
  const { mockRestore } = mockStubs()

  const wrapper = mount(Dialog.Component, {
    propsData: {
      value: true,
    },
    slots: {
      default: 'default slot',
      title: 'title slot',
      footer: 'footer slot',
    },
  })

  expect(wrapper.html()).toMatchSnapshot()

  mockRestore()
  wrapper.destroy()
})
