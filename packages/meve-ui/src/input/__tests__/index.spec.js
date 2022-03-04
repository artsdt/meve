import Input from '..'
import { mount } from '@vue/test-utils'
import { delay, mockStubs, trigger } from '../../utils/jest'

test('test input value binding', () => {
  const wrapper = mount(Input, {
    propsData: {
      value: 'hello',
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
  wrapper.find('input').setValue('hello world')
  wrapper.find('input').trigger('change')
  expect(wrapper.emitted().input.length).toBe(1)
  expect(wrapper.emitted().change.length).toBe(1)
  expect(wrapper.emitted().input[0][0]).toBe('hello world')
  expect(wrapper.emitted().change[0][0]).toBe('hello world')
  expect(wrapper.html()).toMatchSnapshot()
})

test('test input size', () => {
  const wrapper = mount({
    components: {
      [Input.name]: Input,
    },
    template: `
      <div>
        <m-input/>
        <m-input size="small"/>
        <m-input size="mini"/>
      </div>
    `,
  })

  expect(wrapper.html()).toMatchSnapshot()
})

test('test input focus & blur', async () => {
  const wrapper = mount(Input)

  wrapper.vm.focus()
  await trigger(wrapper.find('.m-input__input'), 'focus')
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.emitted().focus.length).toBe(1)

  wrapper.vm.blur()
  await trigger(wrapper.find('.m-input__input'), 'blur')
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.emitted().blur.length).toBe(1)
})

test('test textarea focus & blur', async () => {
  const wrapper = mount(Input, { propsData: { textarea: true } })

  wrapper.vm.focus()
  await trigger(wrapper.find('.m-input__textarea'), 'focus')
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.emitted().focus.length).toBe(1)

  wrapper.vm.blur()
  await trigger(wrapper.find('.m-input__textarea'), 'blur')
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.emitted().blur.length).toBe(1)
})

test('test input maxlength', async () => {
  const wrapper = mount(Input, { propsData: { maxlength: 6, value: '' } })

  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.setProps({ value: 'hello' })

  expect(wrapper.html()).toMatchSnapshot()
})

test('test input click event', async () => {
  const wrapper = mount(Input)

  await wrapper.find('.m-input').trigger('click')

  expect(wrapper.emitted().click.length).toBe(1)
})

test('test input clear', async () => {
  const wrapper = mount(Input, { propsData: { clearable: true, value: 'hello' } })

  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.find('.m-input__clear-icon').classes().includes('m-input--clear-icon-visible')).toBeTruthy()

  await wrapper.find('.m-input__clear-icon').trigger('click')
  expect(wrapper.emitted().clear.length).toBe(1)
  expect(wrapper.emitted().input.length).toBe(1)
  expect(wrapper.emitted().input[0][0]).toBe(undefined)

  await wrapper.setProps({ value: '' })
  expect(wrapper.find('.m-input__clear-icon').classes().includes('m-input--clear-icon-visible')).toBeFalsy()
  expect(wrapper.html()).toMatchSnapshot()
})

test('test input slots', () => {
  const wrapper = mount(Input, {
    scopedSlots: {
      'prepend-icon': '<div>prepend icon</div>',
      'append-icon': '<div>append icon</div>',
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
})

test('test input disabled', async () => {
  const wrapper = mount(Input, {
    propsData: {
      value: 'hello',
      disabled: true,
      clearable: true,
    },
  })

  await wrapper.find('.m-input').trigger('click')
  await wrapper.find('.m-input__clear-icon').trigger('click')
  expect(wrapper.emitted().click).toBeFalsy()
  expect(wrapper.emitted().clear).toBeFalsy()
})

test('test input readonly', async () => {
  const wrapper = mount(Input, {
    propsData: {
      value: 'hello',
      readonly: true,
      clearable: true,
    },
  })

  await wrapper.find('.m-input').trigger('click')
  await wrapper.find('.m-input__clear-icon').trigger('click')
  expect(wrapper.emitted().click.length).toBe(2)
  expect(wrapper.emitted().clear).toBeFalsy()
})

test('test input validation', async () => {
  const { mockRestore } = mockStubs()
  const wrapper = mount(Input, {
    propsData: {
      value: '',
      rules: [(v) => (v && v.length > 6) || '长度必须大于6'],
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
  expect(wrapper.emitted().input[0][0]).toBe(undefined)
  mockRestore()
})
