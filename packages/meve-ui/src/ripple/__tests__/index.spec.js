import Ripple from '..'
import { mount } from '@vue/test-utils'
import { delay, mockOffset, trigger } from '../../utils/jest'

mockOffset()

const Wrapper = {
  directives: { Ripple },
  data: () => ({
    color: 'yellow',
    disabled: false,
  }),
  template: `
    <div class="ripple-container" style="width: 100px; height: 100px" v-ripple="{ color, disabled }"></div>
  `,
}

test('test ripple show & hide', async () => {
  const wrapper = mount(Wrapper, { attachTo: document.body })
  await trigger(wrapper, 'touchstart')
  await delay(60)
  expect(wrapper.find('.m-ripple').exists()).toBeTruthy()

  await trigger(document, 'touchend')
  await delay(600)
  expect(wrapper.find('.m-ripple').exists()).toBeFalsy()
  wrapper.destroy()
  document.body.innerHTML = ''
})

test('test ripple update & color', async () => {
  const wrapper = mount(Wrapper, { attachTo: document.body })
  await wrapper.setData({ color: 'green' })

  await trigger(wrapper, 'touchstart')
  await delay(60)
  expect(wrapper.find('.m-ripple').exists()).toBeTruthy()
  expect(wrapper.find('.m-ripple').element.style.backgroundColor).toBe('green')

  wrapper.destroy()
  document.body.innerHTML = ''
})

test('test ripple disabled', async () => {
  const wrapper = mount(Wrapper, { attachTo: document.body })
  await wrapper.setData({ disabled: true })

  await trigger(wrapper, 'touchstart')
  await delay(60)
  expect(wrapper.find('.m-ripple').exists()).toBeFalsy()

  wrapper.destroy()
  document.body.innerHTML = ''
})
