import Slider from '..'
import { mount } from '@vue/test-utils'
import { delay, mockOffset, mockStubs, trigger } from '../../utils/jest'
import Input from '../../input'

mockOffset({
  offsetWidth: 100,
  offsetHeight: 100,
})

async function slideTo(wrapper, x = 0, y = 0, startX = 0, startY = 0) {
  await trigger(wrapper.find('.m-slider__track'), 'touchstart', startX, startY)
  await trigger(document, 'touchmove', x, y)
  await trigger(document, 'touchend')
}

test('test slide value', async () => {
  const wrapper = mount(Slider)

  await slideTo(wrapper, 1, 0)
  expect(wrapper.emitted().change[0][0]).toBe(1)
  expect(wrapper.emitted().input[0][0]).toBe(1)

  wrapper.destroy()
})

test('test slide value for round', async () => {
  const wrapper = mount(Slider)

  await slideTo(wrapper, 0.4, 0)
  expect(wrapper.emitted().change).toBeFalsy()
  expect(wrapper.emitted().input).toBeFalsy()

  await slideTo(wrapper, 0.5, 0)
  expect(wrapper.emitted().change[0][0]).toBe(1)
  expect(wrapper.emitted().input[0][0]).toBe(1)

  wrapper.destroy()
})

test('test slider step', async () => {
  const wrapper = mount(Slider, { propsData: { step: 10 } })

  await slideTo(wrapper, 4, 0)
  expect(wrapper.emitted().change).toBeFalsy()
  expect(wrapper.emitted().input).toBeFalsy()

  await slideTo(wrapper, 10, 0)
  expect(wrapper.emitted().change[0][0]).toBe(10)
  expect(wrapper.emitted().input[0][0]).toBe(10)

  wrapper.destroy()
})

test('test slider min', async () => {
  const wrapper = mount(Slider, { propsData: { value: 10, min: 10 } })

  await slideTo(wrapper, 1, 0)
  expect(wrapper.emitted().change[0][0]).toBe(11)
  expect(wrapper.emitted().input[0][0]).toBe(11)

  wrapper.destroy()
})

test('test slider max', async () => {
  const wrapper = mount(Slider, { propsData: { value: 10, max: 90 } })

  await slideTo(wrapper, 100, 0)
  expect(wrapper.emitted().change[0][0]).toBe(90)
  expect(wrapper.emitted().input[0][0]).toBe(90)

  wrapper.destroy()
})

test('test slider vertical', async () => {
  const wrapper = mount(Slider, { propsData: { vertical: true } })

  await slideTo(wrapper, 0, 99, 0, 100)
  expect(wrapper.emitted().change[0][0]).toBe(1)
  expect(wrapper.emitted().input[0][0]).toBe(1)

  wrapper.destroy()
})

test('test slider range', async () => {
  let wrapper = mount(Slider, {
    propsData: {
      value: [0, 100],
      range: true,
    },
  })

  await slideTo(wrapper, 10, 0)
  expect(wrapper.emitted().change[0][0]).toStrictEqual([10, 100])
  expect(wrapper.emitted().input[0][0]).toStrictEqual([10, 100])
  wrapper.destroy()

  wrapper = mount(Slider, {
    propsData: {
      value: [0, 100],
      range: true,
    },
  })

  await slideTo(wrapper, 90, 0, 100, 0)
  expect(wrapper.emitted().change[0][0]).toStrictEqual([0, 90])
  expect(wrapper.emitted().input[0][0]).toStrictEqual([0, 90])
  wrapper.destroy()
})

test('test slider range in vertical mode', async () => {
  let wrapper = mount(Slider, {
    propsData: {
      value: [0, 100],
      vertical: true,
      range: true,
    },
  })

  await slideTo(wrapper, 0, 90, 0, 100)
  expect(wrapper.emitted().change[0][0]).toStrictEqual([10, 100])
  expect(wrapper.emitted().input[0][0]).toStrictEqual([10, 100])
  wrapper.destroy()

  wrapper = mount(Slider, {
    propsData: {
      value: [0, 100],
      vertical: true,
      range: true,
    },
  })

  await slideTo(wrapper, 0, 0, 0, 10)
  expect(wrapper.emitted().change[0][0]).toStrictEqual([0, 90])
  expect(wrapper.emitted().input[0][0]).toStrictEqual([0, 90])
  wrapper.destroy()
})

test('test slider tooltip display', async () => {
  const wrapper = mount(Slider, { propsData: { range: true } })

  await trigger(wrapper.find('.m-slider__button'), 'mouseenter')
  await trigger(wrapper.find('.m-slider__reverse-button'), 'mouseenter')
  await delay()
  expect(wrapper.html()).toMatchSnapshot()

  await trigger(wrapper.find('.m-slider__button'), 'mouseleave')
  await trigger(wrapper.find('.m-slider__reverse-button'), 'mouseleave')
  await delay(400)
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.destroy()
})

test('test slider validation', async () => {
  const { mockRestore } = mockStubs()
  const wrapper = mount(Slider, {
    propsData: {
      value: 0,
      rules: [(v) => v > 10 || '选择的值大于10'],
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

  wrapper.destroy()
})

test('test slider onClick', () => {
  const wrapper = mount(Slider)

  wrapper.find('.m-slider').trigger('click')
  expect(wrapper.emitted().click).toBeTruthy()

  wrapper.destroy()
})

test('test slider disabled', async () => {
  const wrapper = mount(Slider, { propsData: { disabled: true } })

  wrapper.find('.m-slider').trigger('click')
  expect(wrapper.emitted().click).toBeFalsy()

  await slideTo(wrapper, 1, 0)
  expect(wrapper.emitted().change).toBeFalsy()
  expect(wrapper.emitted().input).toBeFalsy()

  wrapper.destroy()
})

test('test slider readonly', async () => {
  const wrapper = mount(Slider, { propsData: { readonly: true } })

  wrapper.find('.m-slider').trigger('click')
  expect(wrapper.emitted().click).toBeTruthy()

  await slideTo(wrapper, 1, 0)
  expect(wrapper.emitted().change).toBeFalsy()
  expect(wrapper.emitted().input).toBeFalsy()

  wrapper.destroy()
})
