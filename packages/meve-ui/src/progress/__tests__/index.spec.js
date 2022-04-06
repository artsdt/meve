import Progress from '..'
import { mount } from '@vue/test-utils'

test('test progress with value', () => {
  const wrapper = mount(Progress, {
    propsData: {
      value: 50,
    },
  })

  expect(wrapper.html()).toMatchSnapshot()

  wrapper.destroy()
})

test('test progress custom style', () => {
  const wrapper = mount(Progress, {
    propsData: {
      value: 50,
      trackSize: 2,
      trackColor: 'red',
      color: 'green',
    },
  })

  expect(wrapper.html()).toMatchSnapshot()

  wrapper.destroy()
})

test('test progress show label', () => {
  const wrapper = mount(Progress, {
    propsData: {
      value: 50,
      label: true,
    },
  })

  expect(wrapper.html()).toMatchSnapshot()

  wrapper.destroy()
})

test('test progress default slot', () => {
  const wrapper = mount(Progress, {
    propsData: {
      value: 50,
      label: true,
    },
    scopedSlots: {
      default: '<div>default slot</div>',
    },
  })

  expect(wrapper.html()).toMatchSnapshot()

  wrapper.destroy()
})
