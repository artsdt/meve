import CheckboxGroup from '..'
import Checkbox from '../../checkbox'
import { mount } from '@vue/test-utils'
import { delay, mockStubs } from '../../utils/jest'

test('test checkbox check value', async () => {
  const wrapper = mount(Checkbox, {
    propsData: {
      value: false,
    },
  })

  await wrapper.find('.m-checkbox__input').trigger('click')
  expect(wrapper.emitted().input.length).toBe(1)
  expect(wrapper.emitted().input[0][0]).toBe(true)

  await wrapper.find('.m-checkbox__input').trigger('click')
  expect(wrapper.emitted().input.length).toBe(2)
  expect(wrapper.emitted().input[1][0]).toBe(false)

  wrapper.destroy()
})

test('test checkbox check value with relation value', async () => {
  const wrapper = mount(Checkbox, {
    propsData: {
      value: 0,
      uncheckedValue: 0,
      checkedValue: 1,
    },
  })

  await wrapper.find('.m-checkbox__input').trigger('click')
  expect(wrapper.emitted().input.length).toBe(1)
  expect(wrapper.emitted().input[0][0]).toBe(1)

  wrapper.destroy()
})

test('test checkbox onClick and onChange', async () => {
  const wrapper = mount(Checkbox, {
    propsData: {
      value: false,
    },
  })

  await wrapper.find('.m-checkbox__input').trigger('click')
  expect(wrapper.emitted().change.length).toBe(1)
  expect(wrapper.emitted().change[0][0]).toBe(true)
  expect(wrapper.emitted().click.length).toBe(1)

  wrapper.destroy()
})

test('test checkbox toggle method', async () => {
  const wrapper = mount(Checkbox, {
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

test('test checkbox disabled', async () => {
  const wrapper = mount(Checkbox, {
    propsData: {
      value: false,
      disabled: true,
    },
  })

  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.find('.m-checkbox__input').trigger('click')

  expect(wrapper.emitted().input).toBeFalsy()
  expect(wrapper.emitted().click).toBeFalsy()
  expect(wrapper.emitted().change).toBeFalsy()

  wrapper.destroy()
})

test('test checkbox readonly', async () => {
  const wrapper = mount(Checkbox, {
    propsData: {
      value: false,
      readonly: true,
    },
  })

  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.find('.m-checkbox__input').trigger('click')

  expect(wrapper.emitted().input).toBeFalsy()
  expect(wrapper.emitted().click).toBeTruthy()
  expect(wrapper.emitted().change).toBeFalsy()

  wrapper.destroy()
})

test('test checkbox with checkbox group', async () => {
  const wrapper = mount({
    components: {
      [CheckboxGroup.name]: CheckboxGroup,
      [Checkbox.name]: Checkbox,
    },
    data: () => ({
      value: [],
    }),
    template: `
      <m-checkbox-group v-model="value">
        <m-checkbox :checked-value="1" />
        <m-checkbox :checked-value="2" />
      </m-checkbox-group>
    `,
  })

  await wrapper.find('.m-checkbox__input').trigger('click')
  expect(wrapper.vm.value).toStrictEqual([1])

  await wrapper.findAll('.m-checkbox__input').at(1).trigger('click')
  expect(wrapper.vm.value).toStrictEqual([1, 2])

  await wrapper.findAll('.m-checkbox__input').at(1).trigger('click')
  expect(wrapper.vm.value).toStrictEqual([1])

  wrapper.destroy()
})

test('test checkbox validation', async () => {
  const { mockRestore } = mockStubs()
  const wrapper = mount(Checkbox, {
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

test('test checkbox group validation', async () => {
  const { mockRestore } = mockStubs()

  const wrapper = mount({
    components: {
      [CheckboxGroup.name]: CheckboxGroup,
      [Checkbox.name]: Checkbox,
    },
    data: () => ({
      value: [1],
    }),
    template: `
      <m-checkbox-group
        ref="checkboxGroup"
        :rules="[v => v.length === 2 || '必须全选']"
        v-model="value"
      >
        <m-checkbox :checked-value="1" />
        <m-checkbox :checked-value="2" />
      </m-checkbox-group>
    `,
  })

  const { checkboxGroup } = wrapper.vm.$refs

  checkboxGroup.validate()
  await delay(100)
  expect(wrapper.html()).toMatchSnapshot()

  checkboxGroup.resetValidation()
  await delay(100)
  expect(wrapper.html()).toMatchSnapshot()

  checkboxGroup.reset()
  expect(wrapper.vm.value).toStrictEqual([])

  wrapper.destroy()
  mockRestore()
})

test('test checkbox group layout direction', async () => {
  const wrapper = mount({
    components: {
      [CheckboxGroup.name]: CheckboxGroup,
      [Checkbox.name]: Checkbox,
    },
    data: () => ({
      value: [1],
    }),
    template: `
      <m-checkbox-group direction="vertical" v-model="value">
        <m-checkbox :checked-value="1" />
        <m-checkbox :checked-value="2" />
      </m-checkbox-group>
    `,
  })

  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})

test('test checkbox group checkAll and inverseAll', async () => {
  const wrapper = mount({
    components: {
      [CheckboxGroup.name]: CheckboxGroup,
      [Checkbox.name]: Checkbox,
    },
    data: () => ({
      value: [],
    }),
    template: `
      <m-checkbox-group ref="checkboxGroup" v-model="value">
        <m-checkbox :checked-value="1" />
        <m-checkbox :checked-value="2" />
      </m-checkbox-group>
    `,
  })

  const { checkboxGroup } = wrapper.vm.$refs

  checkboxGroup.checkAll()
  await delay(100)
  expect(wrapper.vm.value).toStrictEqual([...new Set([1, 2])])
  wrapper.vm.value = [1, 2]
  await delay(100)

  checkboxGroup.inverseAll()
  await delay(100)
  expect(wrapper.vm.value).toStrictEqual([...new Set([])])

  wrapper.destroy()
})
