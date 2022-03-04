import AutoComplete from '..'
import { mount } from '@vue/test-utils'
import { delay, mockOffset, mockStubs, trigger } from '../../utils/jest'

mockOffset()

test('test auto-complete value binding', () => {
  const wrapper = mount(AutoComplete, {
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

  wrapper.destroy()
})

test('test auto-complete size', () => {
  const wrapper = mount({
    components: {
      [AutoComplete.name]: AutoComplete,
    },
    template: `
      <div>
        <m-auto-complete/>
        <m-auto-complete size="small"/>
        <m-auto-complete size="mini"/>
      </div>
    `,
  })

  expect(wrapper.html()).toMatchSnapshot()

  wrapper.destroy()
})

test('test auto-complete focus & blur', async () => {
  const wrapper = mount(
    AutoComplete,
    {
      propsData: {
        value: 'hello',
        options: [
          {
            label: 'item 1',
            value: 'item 1',
          },
        ],
      },
    },
    { attachTo: document.body }
  )

  wrapper.vm.focus()
  await trigger(wrapper.find('.m-input__input'), 'focus')
  await delay(300)
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.emitted().focus.length).toBe(1)

  wrapper.vm.blur()
  await trigger(wrapper.find('.m-input__input'), 'blur')
  await delay(300)
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.emitted().blur.length).toBe(1)
  expect(document.querySelector('.m-popover__container')).toBeTruthy()
  wrapper.destroy()
  document.body.innerHTML = ''
})

test('test auto-complete textarea focus & blur', async () => {
  const wrapper = mount(AutoComplete, { propsData: { textarea: true } })

  wrapper.vm.focus()
  await trigger(wrapper.find('.m-input__textarea'), 'focus')
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.emitted().focus.length).toBe(1)

  wrapper.vm.blur()
  await trigger(wrapper.find('.m-input__textarea'), 'blur')
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.emitted().blur.length).toBe(1)

  wrapper.destroy()
})

test('test auto-complete maxlength', async () => {
  const wrapper = mount(AutoComplete, { propsData: { maxlength: 6, value: '' } })

  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.setProps({ value: 'hello' })

  expect(wrapper.html()).toMatchSnapshot()

  wrapper.destroy()
})

test('test auto-complete click event', async () => {
  const wrapper = mount(AutoComplete)

  await wrapper.find('.m-input').trigger('click')

  expect(wrapper.emitted().click.length).toBe(1)
  wrapper.destroy()
})

test('test auto-complete clear', async () => {
  const wrapper = mount(AutoComplete, { propsData: { clearable: true, value: 'hello' } })

  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.find('.m-input__clear-icon').classes().includes('m-input--clear-icon-visible')).toBeTruthy()

  await wrapper.find('.m-input__clear-icon').trigger('click')
  expect(wrapper.emitted().clear.length).toBe(1)
  expect(wrapper.emitted().input.length).toBe(1)
  expect(wrapper.emitted().input[0][0]).toBe(undefined)

  await wrapper.setProps({ value: '' })
  expect(wrapper.find('.m-input__clear-icon').classes().includes('m-input--clear-icon-visible')).toBeFalsy()
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.destroy()
})

test('test auto-complete slots', () => {
  const wrapper = mount(AutoComplete, {
    scopedSlots: {
      'prepend-icon': '<div>prepend icon</div>',
      'append-icon': '<div>append icon</div>',
    },
  })

  expect(wrapper.html()).toMatchSnapshot()

  wrapper.destroy()
})

test('test auto-complete disabled', async () => {
  const wrapper = mount(AutoComplete, {
    propsData: {
      disabled: true,
      clearable: true,
    },
  })

  await wrapper.find('.m-input').trigger('click')
  await wrapper.find('.m-input__clear-icon').trigger('click')
  expect(wrapper.emitted().click).toBeFalsy()
  expect(wrapper.emitted().clear).toBeFalsy()

  wrapper.destroy()
})

test('test auto-complete readonly', async () => {
  const wrapper = mount(AutoComplete, {
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

  wrapper.destroy()
})

test('test auto-complete validation', async () => {
  const { mockRestore } = mockStubs()
  const wrapper = mount(AutoComplete, {
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

  wrapper.destroy()
})

test('test auto-complete popover click', async () => {
  const wrapper = mount(
    AutoComplete,
    {
      propsData: {
        value: '',
        options: [
          {
            label: 'item 1',
            value: 'item 1',
          },
        ],
      },
    },
    { attachTo: document.body }
  )

  wrapper.find('input').setValue('h')

  await delay(300)

  await trigger(document.querySelector('.m-auto-complete__option'), 'click')
  expect(wrapper.emitted().input.length).toBe(2)
  expect(wrapper.emitted().input[1][0]).toBe('item 1')
  expect(wrapper.emitted().select.length).toBe(1)
  expect(wrapper.emitted().select[0][0]).toBe('item 1')

  wrapper.destroy()
  document.body.innerHTML = ''
})

test('test auto-complete popover keyboard', async () => {
  const wrapper = mount(
    AutoComplete,
    {
      propsData: {
        value: '',
        options: [
          {
            label: 'item 1',
            value: 'item 1',
          },
          {
            label: 'item 2',
            value: 'item 2',
          },
        ],
      },
    },
    { attachTo: document.body }
  )

  wrapper.find('input').setValue('h')

  await delay(300)

  await trigger(window, 'keydown', 0, 0, 0, 0, 0, 0, { code: 'ArrowDown' })

  await trigger(window, 'keydown', 0, 0, 0, 0, 0, 0, { code: 'Enter' })
  expect(wrapper.emitted().input.length).toBe(2)
  expect(wrapper.emitted().input[1][0]).toBe('item 2')

  wrapper.destroy()
  document.body.innerHTML = ''
})

test('test auto-complete popover open and close', async () => {
  const { mockRestore } = mockStubs()
  const wrapper = mount(
    AutoComplete,
    {
      propsData: {
        value: '',
        options: [
          {
            label: 'item 1',
            value: 'item 1',
          },
        ],
      },
    },
    { attachTo: document.body }
  )

  expect(document.querySelector('.m-popover__container').style.display).toBe('none')

  wrapper.vm.open()
  await delay(300)
  expect(document.querySelector('.m-popover__container').style.display).toBe('')
  await trigger(wrapper.find('.m-input__input'), 'blur')
  await delay(300)

  expect(document.querySelector('.m-popover__container').style.display).toBe('none')

  wrapper.destroy()
  document.body.innerHTML = ''
  mockRestore()
})

test('test auto-complete mouse enter options cant close', async () => {
  const { mockRestore } = mockStubs()
  const wrapper = mount(
    AutoComplete,
    {
      propsData: {
        value: '',
        options: [
          {
            label: 'item 1',
            value: 'item 1',
          },
        ],
      },
    },
    { attachTo: document.body }
  )

  expect(document.querySelector('.m-popover__container').style.display).toBe('none')

  wrapper.vm.open()
  await delay(300)
  expect(document.querySelector('.m-popover__container').style.display).toBe('')
  await trigger(document.querySelector('.m-auto-complete__options'), 'mouseenter')
  await trigger(wrapper.find('.m-input__input'), 'blur')
  await delay(300)
  expect(document.querySelector('.m-popover__container').style.display).toBe('')

  await trigger(document.querySelector('.m-auto-complete__options'), 'mouseleave')
  await trigger(wrapper.find('.m-input__input'), 'blur')
  await delay(300)
  expect(document.querySelector('.m-popover__container').style.display).toBe('none')

  wrapper.destroy()
  document.body.innerHTML = ''
  mockRestore()
})

test('test auto-complete mouse enter option and enter', async () => {
  const wrapper = mount(
    AutoComplete,
    {
      propsData: {
        value: '',
        options: [
          {
            label: 'item 1',
            value: 'item 1',
          },
          {
            label: 'item 2',
            value: 'item 2',
          },
        ],
      },
    },
    { attachTo: document.body }
  )

  wrapper.find('input').setValue('h')

  await delay(300)

  await trigger(document.querySelector('.m-auto-complete__option'), 'mouseenter')

  await trigger(window, 'keydown', 0, 0, 0, 0, 0, 0, { code: 'Enter' })
  expect(wrapper.emitted().input.length).toBe(2)
  expect(wrapper.emitted().input[1][0]).toBe('item 1')

  wrapper.destroy()
  document.body.innerHTML = ''
})

test('test auto-complete esc close', async () => {
  const wrapper = mount(
    AutoComplete,
    {
      propsData: {
        value: '',
        options: [
          {
            label: 'item 1',
            value: 'item 1',
          },
          {
            label: 'item 2',
            value: 'item 2',
          },
        ],
      },
    },
    { attachTo: document.body }
  )

  wrapper.find('input').setValue('h')
  await delay(300)
  expect(document.querySelector('.m-popover__container').style.display).toBe('')
  await trigger(window, 'keydown', 0, 0, 0, 0, 0, 0, { code: 'Escape' })
  await delay(300)
  expect(document.querySelector('.m-popover__container').style.display).toBe('none')
  wrapper.destroy()
  document.body.innerHTML = ''
})
