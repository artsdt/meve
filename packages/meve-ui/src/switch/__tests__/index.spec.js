import Switch from '..'
import { mount } from '@vue/test-utils'
import { delay, mockStubs } from '../../utils/jest'

test('test switch active value', async () => {
  const wrapper = mount(Switch, {
    propsData: {
      value: false,
    },
  })

  await wrapper.find('.m-switch').trigger('click')
  expect(wrapper.emitted().input.length).toBe(1)
  expect(wrapper.emitted().input[0][0]).toBe(true)

  await wrapper.find('.m-switch').trigger('click')
  expect(wrapper.emitted().input.length).toBe(2)
  expect(wrapper.emitted().input[1][0]).toBe(false)

  wrapper.destroy()
})

test('test switch active value with relation value', async () => {
  const wrapper = mount(Switch, {
    propsData: {
      value: 0,
      inactiveValue: 0,
      activeValue: 1,
    },
  })

  await wrapper.find('.m-switch').trigger('click')
  expect(wrapper.emitted().input.length).toBe(1)
  expect(wrapper.emitted().input[0][0]).toBe(1)

  wrapper.destroy()
})

test('test switch onClick and onChange', async () => {
  const wrapper = mount(Switch, {
    propsData: {
      value: false,
    },
  })

  await wrapper.find('.m-switch').trigger('click')
  expect(wrapper.emitted().change.length).toBe(1)
  expect(wrapper.emitted().change[0][0]).toBe(true)
  expect(wrapper.emitted().click.length).toBe(1)

  wrapper.destroy()
})

test('test switch toggle method', async () => {
  const wrapper = mount(Switch, {
    propsData: {
      value: false,
    },
  })

  wrapper.vm.toggle()
  await delay(16)

  expect(wrapper.emitted().input.length).toBe(1)
  expect(wrapper.emitted().input[0][0]).toBe(true)

  wrapper.destroy()
})

test('test switch disabled', async () => {
  const wrapper = mount(Switch, {
    propsData: {
      value: false,
      disabled: true,
    },
  })

  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.find('.m-switch').trigger('click')

  expect(wrapper.emitted().input).toBeFalsy()
  expect(wrapper.emitted().click).toBeFalsy()
  expect(wrapper.emitted().change).toBeFalsy()

  wrapper.destroy()
})

test('test switch readonly', async () => {
  const wrapper = mount(Switch, {
    propsData: {
      value: false,
      readonly: true,
    },
  })

  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.find('.m-switch').trigger('click')

  expect(wrapper.emitted().input).toBeFalsy()
  expect(wrapper.emitted().click).toBeTruthy()
  expect(wrapper.emitted().change).toBeFalsy()

  wrapper.destroy()
})

test('test switch loading', async () => {
  const wrapper = mount(Switch, {
    propsData: {
      value: false,
      loading: true,
    },
  })

  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.find('.m-switch').trigger('click')

  expect(wrapper.emitted().input).toBeFalsy()
  expect(wrapper.emitted().click).toBeTruthy()
  expect(wrapper.emitted().change).toBeFalsy()

  wrapper.destroy()
})

test('test switch validation', async () => {
  const { mockRestore } = mockStubs()
  const wrapper = mount(Switch, {
    propsData: {
      value: false,
      rules: [(v) => !!v || '必须开启'],
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
  expect(wrapper.emitted().input[0][0]).toBe(false)
  mockRestore()
})
