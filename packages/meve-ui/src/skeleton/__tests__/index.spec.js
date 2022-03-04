import Skeleton from '..'
import { mount } from '@vue/test-utils'

test('test skeleton loading pass true', async () => {
  const wrapper = mount(Skeleton, {
    propsData: {
      loading: true,
    },
    scopedSlots: {
      default: '<div class="skeleton-default-slot"></div>',
    },
  })

  expect(wrapper.find('.skeleton-default-slot').exists()).toBeFalsy()

  wrapper.destroy()
})

test('test skeleton loading pass false', async () => {
  const wrapper = mount(Skeleton, {
    propsData: {
      loading: false,
    },
    scopedSlots: {
      default: '<div class="skeleton-default-slot"></div>',
    },
  })

  expect(wrapper.find('.skeleton-default-slot').exists()).toBeTruthy()
  wrapper.destroy()
})

test('test skeleton styles', () => {
  const wrapper = mount(Skeleton, {
    propsData: {
      title: true,
      card: true,
      avatar: true,
      titleWidth: '100px',
      avatarSize: '100px',
      cardHeight: '100px',
      rows: 2,
      rowsWidth: ['600px', '500px'],
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})

test('test skeleton fullscreen', () => {
  const wrapper = mount(Skeleton, {
    propsData: {
      fullscreen: true,
      fullscreenZIndex: 999,
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})
