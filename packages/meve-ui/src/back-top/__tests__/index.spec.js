import BackTop from '..'
import { mount } from '@vue/test-utils'
import { delay, mockScrollTo, trigger } from '../../utils/jest'

test('test back top visible', async () => {
  const wrapper = mount(BackTop, {
    attachTo: document.body,
  })

  expect(wrapper.html()).toMatchSnapshot()

  window.pageYOffset = 300
  await trigger(window, 'scroll')
  expect(wrapper.classes('m-back-top--active')).toBeTruthy()
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.destroy()
})

test('test back top target is string', async () => {
  const wrapper = mount(BackTop, {
    propsData: {
      target: 'body',
    },
    attachTo: document.body,
  })

  document.body.scrollTop = 300
  await trigger(document.body, 'scroll')
  expect(wrapper.classes('m-back-top--active')).toBeTruthy()

  wrapper.destroy()
})

test('test back top target is object', async () => {
  const addEventListener = jest.fn()
  const removeEventListener = jest.fn()

  const fakeElement = {
    addEventListener,
    removeEventListener,
    scrollTop: 0,
  }

  const wrapper = mount(BackTop, {
    propsData: {
      target: fakeElement,
    },
    attachTo: document.body,
  })

  expect(addEventListener).toHaveBeenCalledTimes(1)

  wrapper.destroy()

  expect(removeEventListener).toHaveBeenCalledTimes(1)
})

test('test back top slots', async () => {
  const wrapper = mount(BackTop, {
    scopedSlots: {
      default: '<div>default slot</div>',
    },
  })

  expect(wrapper.html()).toMatchSnapshot()

  wrapper.destroy()
})

test('test back top trigger', async () => {
  const wrapper = mount(BackTop, {
    propsData: {
      target: 'body',
    },
    attachTo: document.body,
  })

  mockScrollTo(HTMLBodyElement)

  document.body.scrollTop = 300
  await trigger(document.body, 'scroll')

  await wrapper.trigger('click')
  await delay(400)

  expect(document.body.scrollTop).toBe(0)

  expect(wrapper.emitted().click.length).toBe(1)
  wrapper.destroy()
})
