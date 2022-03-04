import Scroller from '..'
import { mount } from '@vue/test-utils'
import { delay, mockOffset, mockStubs, trigger, triggerDrag } from '../../utils/jest'

mockOffset({
  clientHeight: 300,
  scrollHeight: 600,
})

const component = {
  components: {
    [Scroller.name]: Scroller,
  },
  template: `
    <m-scroller :height="300">
      <div style="height: 100px"></div>
      <div style="height: 100px"></div>
      <div style="height: 100px"></div>
      <div style="height: 100px"></div>
      <div style="height: 100px"></div>
      <div style="height: 100px"></div>
    </m-scroller>
  `,
}

test('test scroller view height', async () => {
  const { mockRestore } = mockStubs()

  const wrapper = mount(component)

  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.find('.m-scroller__scrollbar').isVisible()).toBe(false)

  await wrapper.trigger('mouseenter')

  expect(wrapper.find('.m-scroller__scrollbar').isVisible()).toBe(true)
  expect(wrapper.html()).toMatchSnapshot()

  mockRestore()
})

test('test scroller mouse wheel', async () => {
  const { mockRestore } = mockStubs()

  const wrapper = mount(component)

  await wrapper.trigger('mouseenter')
  await trigger(document, 'mousewheel', 0, 0, 0, 300)
  expect(wrapper.find('.m-scroller__scrollbar-inner').element.style.top).toBe('150px')
  expect(wrapper.find('.m-scroller__scroll-view').element.style.transform).toBe('translateY(-300px)')

  await wrapper.trigger('mouseleave')
  await delay(300)
  expect(wrapper.find('.m-scroller__scrollbar').isVisible()).toBe(false)

  wrapper.destroy()
  mockRestore()
})

test('test scroller touch drag', async () => {
  const { mockRestore } = mockStubs()

  const wrapper = mount(component)
  await wrapper.trigger('mouseenter')
  await triggerDrag(wrapper.find('.m-scroller__scrollbar-inner'), 0, 150, true, true)
  expect(wrapper.find('.m-scroller__scrollbar-inner').element.style.top).toBe('150px')
  expect(wrapper.find('.m-scroller__scroll-view').element.style.transform).toBe('translateY(-300px)')
  await wrapper.trigger('mouseleave')
  await delay(300)
  expect(wrapper.find('.m-scroller__scrollbar').isVisible()).toBe(false)

  wrapper.destroy()
  mockRestore()
})

test('test scroller mouse wheel with touchstart', async () => {
  const wrapper = mount(component)

  await wrapper.trigger('mouseenter')
  await trigger(wrapper.find('.m-scroller__scrollbar-inner'), 'touchstart', 0, 0)
  await trigger(document, 'mousewheel', 0, 0, 0, 300)

  expect(wrapper.find('.m-scroller__scrollbar-inner').element.style.top).toBe('0px')
  expect(wrapper.find('.m-scroller__scroll-view').element.style.transform).toBe('translateY(0px)')
})

test('test scroller mouse wheel without mouseenter', async () => {
  const wrapper = mount(component)
  await trigger(document, 'mousewheel', 0, 0, 0, 300)
  expect(wrapper.find('.m-scroller__scrollbar-inner').element.style.top).toBe('0px')
  expect(wrapper.find('.m-scroller__scroll-view').element.style.transform).toBe('translateY(0px)')
})

test('test scroller drag without touchstart', async () => {
  const wrapper = mount(component)
  await wrapper.trigger('mouseenter')

  await trigger(document, 'touchmove', 0, 50)
  await trigger(document, 'touchmove', 0, 100)
  await trigger(document, 'touchmove', 0, 150)
  expect(wrapper.find('.m-scroller__scrollbar-inner').element.style.top).toBe('0px')
  expect(wrapper.find('.m-scroller__scroll-view').element.style.transform).toBe('translateY(0px)')
})
