import Rate from '..'
import { mount } from '@vue/test-utils'
import { delay, mockStubs, trigger } from '../../utils/jest'

test('test rate change', async () => {
  const wrapper = mount(Rate, {
    propsData: {
      value: 1,
    },
  })

  expect(wrapper.html()).toMatchSnapshot()

  wrapper.findAll('.m-rate__rate-item').at(1).trigger('click')
  expect(wrapper.emitted().click[0][0]).toBe(2)
  expect(wrapper.emitted().change[0][0]).toBe(2)
  expect(wrapper.emitted().input[0][0]).toBe(2)

  wrapper.destroy()
})

test('test rate half change', async () => {
  const wrapper = mount(Rate, {
    propsData: {
      value: 1,
      half: true,
    },
  })

  expect(wrapper.html()).toMatchSnapshot()

  wrapper.findAll('.m-rate__rate-item').at(2).trigger('click')
  expect(wrapper.emitted().click[0][0]).toBe(1.5)
  expect(wrapper.emitted().change[0][0]).toBe(1.5)
  expect(wrapper.emitted().input[0][0]).toBe(1.5)

  wrapper.destroy()
})

test('test rate disabled', async () => {
  const wrapper = mount(Rate, {
    propsData: {
      value: 0,
      disabled: true,
    },
  })

  expect(wrapper.html()).toMatchSnapshot()

  wrapper.find('.m-rate__rate-item').trigger('click')
  expect(wrapper.emitted().click).toBeFalsy()
  expect(wrapper.emitted().change).toBeFalsy()
  expect(wrapper.emitted().input).toBeFalsy()

  wrapper.destroy()
})

test('test rate readonly', async () => {
  const wrapper = mount(Rate, {
    propsData: {
      value: 0,
      readonly: true,
    },
  })

  expect(wrapper.html()).toMatchSnapshot()

  wrapper.find('.m-rate__rate-item').trigger('click')
  expect(wrapper.emitted().click[0][0]).toBe(1)
  expect(wrapper.emitted().change).toBeFalsy()
  expect(wrapper.emitted().input).toBeFalsy()

  wrapper.destroy()
})

test('test rate mouse event', async () => {
  const wrapper = mount(Rate, {
    propsData: {
      value: 0,
    },
  })

  expect(wrapper.html()).toMatchSnapshot()

  await trigger(wrapper.find('.m-rate__rate-item'), 'mouseenter')

  expect(wrapper.html()).toMatchSnapshot()

  await trigger(wrapper.find('.m-rate__rates'), 'mouseleave')

  expect(wrapper.html()).toMatchSnapshot()

  wrapper.destroy()
})

test('test rate validation', async () => {
  const { mockRestore } = mockStubs()

  const wrapper = mount(Rate, {
    propsData: {
      value: 0,
      rules: [(v) => v === 5 || '必须选择5分'],
    },
  })

  wrapper.vm.validate()
  await delay(100)
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.vm.resetValidation()
  await delay(100)
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.vm.reset()
  expect(wrapper.emitted().input.length).toBe(1)
  expect(wrapper.emitted().input[0][0]).toBe(0)
  mockRestore()
})
