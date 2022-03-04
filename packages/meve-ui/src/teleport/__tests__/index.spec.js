import Teleport from '..'
import { mount } from '@vue/test-utils'

const component = {
  components: {
    [Teleport.name]: Teleport,
  },
  data: () => ({
    disabled: false,
  }),
  template: `<m-teleport to="body" :disabled="disabled">hello</m-teleport>`,
}

const componentWithKeep = {
  components: {
    [Teleport.name]: Teleport,
  },
  data: () => ({
    show: true,
  }),
  template: `
    <div>
      <keep-alive>
        <m-teleport v-if="show" to="body">hello</m-teleport>
      </keep-alive>
    </div>
  `,
}

const componentWithApp = {
  components: {
    [Teleport.name]: Teleport,
  },
  data: () => ({
    to: 'body',
  }),
  template: `<m-teleport :to="to">hello</m-teleport>`,
}

test('test teleport transfer', () => {
  const wrapper = mount(component)

  expect(wrapper.html()).toMatchSnapshot()
  expect(document.body.innerHTML).toBe('<div>hello</div>')

  wrapper.destroy()
  expect(document.body.innerHTML).toBe('')
})

test('test teleport disabled', async () => {
  const wrapper = mount(component)
  expect(document.body.innerHTML).toBe('<div>hello</div>')

  await wrapper.setData({ disabled: true })
  expect(document.body.innerHTML).toBe('')
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})

test('test teleport with keepalive', async () => {
  const wrapper = mount(componentWithKeep)
  expect(document.body.innerHTML).toBe('<div>hello</div>')

  await wrapper.setData({ show: false })
  expect(document.body.innerHTML).toBe('')

  await wrapper.setData({ show: true })
  expect(document.body.innerHTML).toBe('<div>hello</div>')
  wrapper.destroy()
})

test('test teleport to', async () => {
  document.body.innerHTML = '<div id="app"></div>'
  const wrapper = mount(componentWithApp)
  expect(document.body.innerHTML).toMatchSnapshot()

  await wrapper.setData({ to: '#app' })
  expect(document.body.innerHTML).toMatchSnapshot()

  wrapper.destroy()
})
