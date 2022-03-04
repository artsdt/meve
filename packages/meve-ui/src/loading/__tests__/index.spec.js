import Loading from '..'
import { mount } from '@vue/test-utils'

test('test loading to be false', () => {
  const wrapper = mount(Loading, {
    propsData: {
      loading: false,
    },
  })

  expect(wrapper.find('.m-loading__circle').isVisible()).toBe(false)
  expect(wrapper.find('.m-loading__description-container').isVisible()).toBe(false)

  wrapper.destroy()
})

test('test loading to be true', () => {
  const wrapper = mount(Loading, {
    propsData: {
      loading: true,
    },
  })

  expect(wrapper.find('.m-loading__circle').isVisible()).toBe(true)
  expect(wrapper.find('.m-loading__description-container').isVisible()).toBe(true)

  wrapper.destroy()
})

test('test loading styles', () => {
  const wrapper = mount(Loading, {
    propsData: {
      rotate: false,
      loading: true,
      description: 'description text',
      size: 40,
      color: '#000',
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})

test('test loading slots', () => {
  const wrapper = mount(Loading, {
    propsData: {
      loading: true,
    },
    scopedSlots: {
      default: () => 'default slot',
      icon: () => 'icon slot',
      description: () => 'description slot',
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})
