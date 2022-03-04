import RadioGroup from '..'
import Radio from '../../radio'
import { mount } from '@vue/test-utils'
import { delay, mockStubs } from '../../utils/jest'
import Input from '../../input'

test('test radio check value', async () => {
  const wrapper = mount(Radio, {
    propsData: {
      value: false,
    },
  })

  await wrapper.find('.m-radio__input').trigger('click')
  expect(wrapper.emitted().input.length).toBe(1)
  expect(wrapper.emitted().input[0][0]).toBe(true)

  await wrapper.find('.m-radio__input').trigger('click')
  expect(wrapper.emitted().input.length).toBe(2)
  expect(wrapper.emitted().input[1][0]).toBe(false)

  wrapper.destroy()
})

test('test radio check value with relation value', async () => {
  const wrapper = mount(Radio, {
    propsData: {
      value: 0,
      uncheckedValue: 0,
      checkedValue: 1,
    },
  })

  await wrapper.find('.m-radio__input').trigger('click')
  expect(wrapper.emitted().input.length).toBe(1)
  expect(wrapper.emitted().input[0][0]).toBe(1)

  wrapper.destroy()
})

test('test radio onClick and onChange', async () => {
  const wrapper = mount(Radio, {
    propsData: {
      value: false,
    },
  })

  await wrapper.find('.m-radio__input').trigger('click')
  expect(wrapper.emitted().change.length).toBe(1)
  expect(wrapper.emitted().change[0][0]).toBe(true)
  expect(wrapper.emitted().click.length).toBe(1)

  wrapper.destroy()
})

test('test radio toggle method', async () => {
  const wrapper = mount(Radio, {
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

test('test radio disabled', async () => {
  const wrapper = mount(Radio, {
    propsData: {
      value: false,
      disabled: true,
    },
  })

  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.find('.m-radio__input').trigger('click')

  expect(wrapper.emitted().input).toBeFalsy()
  expect(wrapper.emitted().click).toBeFalsy()
  expect(wrapper.emitted().change).toBeFalsy()

  wrapper.destroy()
})

test('test radio readonly', async () => {
  const wrapper = mount(Radio, {
    propsData: {
      value: false,
      readonly: true,
    },
  })

  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.find('.m-radio__input').trigger('click')

  expect(wrapper.emitted().input).toBeFalsy()
  expect(wrapper.emitted().click).toBeTruthy()
  expect(wrapper.emitted().change).toBeFalsy()

  wrapper.destroy()
})

test('test radio with radio group', async () => {
  const wrapper = mount({
    components: {
      [RadioGroup.name]: RadioGroup,
      [Radio.name]: Radio,
    },
    data: () => ({
      value: 2,
    }),
    template: `
      <m-radio-group v-model="value">
        <m-radio :checked-value="1" />
        <m-radio :checked-value="2" />
      </m-radio-group>
    `,
  })

  await wrapper.find('.m-radio__input').trigger('click')
  expect(wrapper.vm.value).toBe(1)

  await wrapper.find('.m-radio__input').trigger('click')
  expect(wrapper.vm.value).toBe(1)

  wrapper.destroy()
})

test('test radio validation', async () => {
  const { mockRestore } = mockStubs()
  const wrapper = mount(Radio, {
    propsData: {
      value: false,
      rules: [(v) => !!v || '必须选中'],
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

test('test radio group validation', async () => {
  const { mockRestore } = mockStubs()

  const wrapper = mount({
    components: {
      [RadioGroup.name]: RadioGroup,
      [Radio.name]: Radio,
    },
    data: () => ({
      value: 2,
    }),
    template: `
      <m-radio-group
        ref="radioGroup"
        :rules="[v => v === 1 || '必须选第一个']"
        v-model="value"
      >
        <m-radio :checked-value="1" />
        <m-radio :checked-value="2" />
      </m-radio-group>
    `,
  })

  const { radioGroup } = wrapper.vm.$refs

  radioGroup.validate()
  await delay(100)
  expect(wrapper.html()).toMatchSnapshot()

  radioGroup.resetValidation()
  await delay(100)
  expect(wrapper.html()).toMatchSnapshot()

  radioGroup.reset()
  expect(wrapper.vm.value).toBe(undefined)

  wrapper.destroy()
  mockRestore()
})

test('test radio group layout direction', async () => {
  const wrapper = mount({
    components: {
      [RadioGroup.name]: RadioGroup,
      [Radio.name]: Radio,
    },
    data: () => ({
      value: 2,
    }),
    template: `
      <m-radio-group direction="vertical" v-model="value">
        <m-radio :checked-value="1" />
        <m-radio :checked-value="2" />
      </m-radio-group>
    `,
  })

  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})
