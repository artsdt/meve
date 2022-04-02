import StyleProvider from '../index'
import StyleProviderPlugin from '../StyleProvider'
import { mount } from '@vue/test-utils'
import { delay } from '../../utils/jest'
import Vue from 'vue'

test('test styleProvider function plugin', () => {
  Vue.use(StyleProvider)
  expect(Vue.component(StyleProvider.Component.name)).toBeTruthy()
})

test('test styleProvider functional', async () => {
  StyleProvider({
    'color-primary': 'green',
  })

  await delay(0)
  expect(getComputedStyle(document.documentElement).getPropertyValue('--color-primary')).toBe('green')
})

test('test styleProvider component', async () => {
  const wrapper = mount(StyleProviderPlugin)

  const el = wrapper.find('.m-style-provider')
  expect(el.exists()).toBe(true)

  await wrapper.setProps({
    styleVars: {
      'color-primary': 'green',
    },
  })
  expect(el.attributes('style')).toBe('--color-primary: green;')
})
