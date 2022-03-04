import Select from '..'
import Option from '../../option'
import { mount } from '@vue/test-utils'
import { delay, mockStubs, trigger } from '../../utils/jest'

async function clickOpen(wrapper) {
  wrapper.find('.m-select__select').trigger('click')
  await delay(300)
}

function expectPopoverShow() {
  expect(document.querySelector('.m-popover__container').style.display).toBe('')
}

function expectPopoverHide() {
  expect(document.querySelector('.m-popover__container').style.display).toBe('none')
}

async function tabFocus(wrapper) {
  await trigger(wrapper.find('.m-select__input'), 'focus')
}

async function mouseenterOption() {
  await trigger(document.querySelector('.m-option'), 'mouseenter')
}

async function selectOption() {
  await trigger(document.querySelector('.m-option'), 'click')
  await delay(300)
}

async function selectAllOption() {
  for (const option of document.querySelectorAll('.m-option')) {
    await trigger(option, 'touchstart')
    await trigger(option, 'click')
  }
  await delay(300)
}

async function selectAllOptionByKeyboard() {
  await trigger(window, 'keydown', 0, 0, 0, 0, 0, 0, { code: 'Enter' })
  await trigger(window, 'keydown', 0, 0, 0, 0, 0, 0, { code: 'ArrowDown' })
  await trigger(window, 'keydown', 0, 0, 0, 0, 0, 0, { code: 'Enter' })
  await trigger(window, 'keydown', 0, 0, 0, 0, 0, 0, { code: 'ArrowDown' })
  await trigger(window, 'keydown', 0, 0, 0, 0, 0, 0, { code: 'Enter' })
}

async function unSelectAllOptionByKeyboard() {
  await trigger(window, 'keydown', 0, 0, 0, 0, 0, 0, { code: 'Enter' })
  await trigger(window, 'keydown', 0, 0, 0, 0, 0, 0, { code: 'ArrowUp' })
  await trigger(window, 'keydown', 0, 0, 0, 0, 0, 0, { code: 'Enter' })
  await trigger(window, 'keydown', 0, 0, 0, 0, 0, 0, { code: 'ArrowUp' })
  await trigger(window, 'keydown', 0, 0, 0, 0, 0, 0, { code: 'Enter' })
}

async function selectOptionByKeyboard() {
  await trigger(window, 'keydown', 0, 0, 0, 0, 0, 0, { code: 'ArrowDown' })
  await trigger(window, 'keydown', 0, 0, 0, 0, 0, 0, { code: 'Enter' })
  await delay(300)
}

async function closeOption(wrapper) {
  const tag = wrapper.find('.m-tag__close-button')

  await trigger(tag, 'click')
  await delay(100)
}

function expectClearIconShow(wrapper) {
  expect(wrapper.find('.m-select__clear-icon')).toBeTruthy()
  expect(wrapper.find('.m-select--clear-icon-visible')).toBeTruthy()
}

function expectClearIconHide(wrapper) {
  expect(wrapper.find('.m-select__clear-icon')).toBeTruthy()
  expect(wrapper.find('.m-select__clear-icon').classes().includes('.m-select--clear-icon-visible')).toBeFalsy()
}

async function clickClearIcon(wrapper) {
  await wrapper.find('.m-select__clear-icon').trigger('click')
}

function destroy(wrapper) {
  wrapper.destroy()
  document.body.innerHTML = ''
}

test('test select option', async () => {
  const wrapper = mount(
    Select,
    {
      components: {
        [Option.name]: Option,
      },
      propsData: { value: '' },
      slots: {
        default: `
        <m-option label="Eat" />
        <m-option label="Sleep" />
        <m-option label="Coding"/>
      `,
      },
    },
    { attachTo: document.body }
  )

  await clickOpen(wrapper)
  expect(wrapper.emitted().click.length).toBe(1)
  expect(wrapper.emitted().focus.length).toBe(1)
  expectPopoverShow()

  await selectOption()

  expect(wrapper.emitted().input.length).toBe(1)
  expect(wrapper.emitted().input[0][0]).toBe('Eat')
  expect(wrapper.emitted().select.length).toBe(1)
  expect(wrapper.emitted().select[0][0]).toBe('Eat')
  expect(wrapper.emitted().blur.length).toBe(1)
  expectPopoverHide()

  destroy(wrapper)
})

test('test select option use keyboard', async () => {
  const wrapper = mount(
    Select,
    {
      components: {
        [Option.name]: Option,
      },
      propsData: { value: '' },
      slots: {
        default: `
        <m-option label="Eat" />
        <m-option label="Sleep" />
        <m-option label="Coding"/>
      `,
      },
    },
    { attachTo: document.body }
  )

  await clickOpen(wrapper)
  expect(wrapper.emitted().click.length).toBe(1)
  expect(wrapper.emitted().focus.length).toBe(1)
  expectPopoverShow()

  await selectOptionByKeyboard(wrapper)

  expect(wrapper.emitted().input.length).toBe(1)
  expect(wrapper.emitted().input[0][0]).toBe('Sleep')
  expect(wrapper.emitted().select.length).toBe(1)
  expect(wrapper.emitted().select[0][0]).toBe('Sleep')
  expect(wrapper.emitted().blur.length).toBe(1)
  expectPopoverHide()

  destroy(wrapper)
})

test('test select option relation value', async () => {
  const wrapper = mount(
    Select,
    {
      components: {
        [Option.name]: Option,
      },
      propsData: { value: '' },
      slots: {
        default: `
        <m-option label="Eat" :value="1" />
        <m-option label="Sleep" :value="2" />
        <m-option label="Coding" :value="3"/>
      `,
      },
    },
    { attachTo: document.body }
  )

  await clickOpen(wrapper)
  expect(wrapper.emitted().click.length).toBe(1)
  expect(wrapper.emitted().focus.length).toBe(1)
  expectPopoverShow()

  await selectOption()

  expect(wrapper.emitted().input.length).toBe(1)
  expect(wrapper.emitted().input[0][0]).toBe(1)
  expect(wrapper.emitted().select.length).toBe(1)
  expect(wrapper.emitted().select[0][0]).toBe(1)
  expect(wrapper.emitted().blur.length).toBe(1)
  expectPopoverHide()

  destroy(wrapper)
})

test('test select size', async () => {
  const wrapper = mount(
    {
      components: {
        [Select.name]: Select,
        [Option.name]: Option,
      },
      data: () => ({
        value: '',
      }),
      template: `
      <div>
        <m-select v-model="value">
          <m-option label="Eat"/>
        </m-select>
        <m-select size="small" v-model="value">
          <m-option label="Eat"/>
        </m-select>
        <m-select size="mini" v-model="value">
          <m-option label="Eat"/>
        </m-select>
      </div>
    `,
    },
    { attachTo: document.body }
  )

  expect(wrapper.html()).toMatchSnapshot()
  destroy(wrapper)
})

test('test select option clear', async () => {
  const wrapper = mount(
    Select,
    {
      components: {
        [Option.name]: Option,
      },
      propsData: { value: 'Eat', clearable: true },
      listeners: {
        input(v) {
          wrapper.setProps({ value: v })
        },
      },
      slots: {
        default: `
        <m-option label="Eat" />
        <m-option label="Sleep" />
        <m-option label="Coding"/>
      `,
      },
    },
    { attachTo: document.body }
  )

  expectClearIconShow(wrapper)
  await clickClearIcon(wrapper)

  expect(wrapper.emitted().input.length).toBe(1)
  expect(wrapper.emitted().input[0][0]).toBe(undefined)
  expect(wrapper.emitted().clear.length).toBe(1)
  expect(wrapper.emitted().clear[0][0]).toBe(undefined)
  expectClearIconHide(wrapper)

  destroy(wrapper)
})

test('test toggle option in multiple', async () => {
  const wrapper = mount(
    Select,
    {
      components: {
        [Option.name]: Option,
      },
      propsData: {
        value: [],
        multiple: true,
      },
      listeners: {
        input(v) {
          wrapper.setProps({ value: v })
        },
      },
      slots: {
        default: `
        <m-option label="Eat" />
        <m-option label="Sleep" />
        <m-option label="Coding"/>
      `,
      },
    },
    { attachTo: document.body }
  )
  await clickOpen(wrapper)
  expect(wrapper.emitted().click.length).toBe(1)
  expect(wrapper.emitted().focus.length).toBe(1)
  expectPopoverShow()

  await selectAllOption()
  // cancel
  await selectAllOption()

  expect(wrapper.emitted().input.length).toBe(6)
  expect(wrapper.emitted().input[0][0]).toStrictEqual(['Eat'])
  expect(wrapper.emitted().input[1][0]).toStrictEqual(['Eat', 'Sleep'])
  expect(wrapper.emitted().input[2][0]).toStrictEqual(['Eat', 'Sleep', 'Coding'])
  expect(wrapper.emitted().input[3][0]).toStrictEqual(['Sleep', 'Coding'])
  expect(wrapper.emitted().input[4][0]).toStrictEqual(['Coding'])
  expect(wrapper.emitted().input[5][0]).toStrictEqual([])

  destroy(wrapper)
})

test('test toggle option use keyboard in multiple', async () => {
  const wrapper = mount(
    Select,
    {
      components: {
        [Option.name]: Option,
      },
      propsData: {
        value: [],
        multiple: true,
      },
      listeners: {
        input(v) {
          wrapper.setProps({ value: v })
        },
      },
      slots: {
        default: `
        <m-option label="Eat" />
        <m-option label="Sleep" />
        <m-option label="Coding"/>
      `,
      },
    },
    { attachTo: document.body }
  )
  await clickOpen(wrapper)
  expect(wrapper.emitted().click.length).toBe(1)
  expect(wrapper.emitted().focus.length).toBe(1)
  expectPopoverShow()

  await selectAllOptionByKeyboard()
  await unSelectAllOptionByKeyboard()

  expect(wrapper.emitted().input.length).toBe(6)
  expect(wrapper.emitted().input[0][0]).toStrictEqual(['Eat'])
  expect(wrapper.emitted().input[1][0]).toStrictEqual(['Eat', 'Sleep'])
  expect(wrapper.emitted().input[2][0]).toStrictEqual(['Eat', 'Sleep', 'Coding'])
  expect(wrapper.emitted().input[3][0]).toStrictEqual(['Eat', 'Sleep'])
  expect(wrapper.emitted().input[4][0]).toStrictEqual(['Eat'])
  expect(wrapper.emitted().input[5][0]).toStrictEqual([])

  destroy(wrapper)
})

test('test select option clear in multiple', async () => {
  const wrapper = mount(
    Select,
    {
      components: {
        [Option.name]: Option,
      },
      propsData: {
        value: ['Eat', 'Sleep', 'Coding'],
        multiple: true,
        clearable: true,
      },
      listeners: {
        input(v) {
          wrapper.setProps({ value: v })
        },
      },
      slots: {
        default: `
        <m-option label="Eat" />
        <m-option label="Sleep" />
        <m-option label="Coding"/>
      `,
      },
    },
    { attachTo: document.body }
  )
  expectClearIconShow(wrapper)
  await clickClearIcon(wrapper)

  expect(wrapper.emitted().input.length).toBe(1)
  expect(wrapper.emitted().input[0][0]).toStrictEqual([])
  expect(wrapper.emitted().clear.length).toBe(1)
  expect(wrapper.emitted().clear[0][0]).toStrictEqual([])
  expectClearIconHide(wrapper)

  destroy(wrapper)
})

test('test select disabled', async () => {
  const wrapper = mount(
    Select,
    {
      components: {
        [Option.name]: Option,
      },
      propsData: {
        value: 'Eat',
        disabled: true,
        clearable: true,
      },
      slots: {
        default: `
        <m-option label="Eat" />
        <m-option label="Sleep" />
        <m-option label="Coding"/>
      `,
      },
    },
    { attachTo: document.body }
  )

  await clickOpen(wrapper)
  expectPopoverHide()
  await tabFocus(wrapper)
  expectPopoverHide()

  expectClearIconShow(wrapper)
  await clickClearIcon(wrapper)

  expect(wrapper.emitted().input).toBeFalsy()
  expect(wrapper.emitted().clear).toBeFalsy()
  expect(wrapper.html()).toMatchSnapshot()

  destroy(wrapper)
})

test('test select readonly', async () => {
  const wrapper = mount(
    Select,
    {
      components: {
        [Option.name]: Option,
      },
      propsData: {
        value: 'Eat',
        readonly: true,
        clearable: true,
      },
      slots: {
        default: `
        <m-option label="Eat" />
        <m-option label="Sleep" />
        <m-option label="Coding"/>
      `,
      },
    },
    { attachTo: document.body }
  )

  await clickOpen(wrapper)
  expectPopoverHide()
  await tabFocus(wrapper)
  expectPopoverHide()

  expectClearIconShow(wrapper)
  await clickClearIcon(wrapper)

  expect(wrapper.emitted().input).toBeFalsy()
  expect(wrapper.emitted().clear).toBeFalsy()
  expect(wrapper.html()).toMatchSnapshot()

  destroy(wrapper)
})

test('test select validation', async () => {
  const { mockRestore } = mockStubs()

  const wrapper = mount(
    Select,
    {
      components: {
        [Option.name]: Option,
      },
      propsData: {
        value: '',
        rules: [(v) => !!v || '不能为空'],
      },
      slots: {
        default: `
        <m-option label="Eat" />
        <m-option label="Sleep" />
        <m-option label="Coding"/>
      `,
      },
    },
    { attachTo: document.body }
  )

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

  destroy(wrapper)
})

test('test select validation in multiple', async () => {
  const { mockRestore } = mockStubs()

  const wrapper = mount(
    Select,
    {
      components: {
        [Option.name]: Option,
      },
      propsData: {
        value: [],
        multiple: true,
        rules: [(v) => v.length > 0 || '不能为空'],
      },
      slots: {
        default: `
        <m-option label="Eat" />
        <m-option label="Sleep" />
        <m-option label="Coding"/>
      `,
      },
    },
    { attachTo: document.body }
  )

  wrapper.vm.validate()
  await delay(100)
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.vm.resetValidation()
  await delay(100)
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.vm.reset()
  expect(wrapper.emitted().input.length).toBe(1)
  expect(wrapper.emitted().input[0][0]).toStrictEqual([])
  mockRestore()

  destroy(wrapper)
})

test('test select focus and blur', async () => {
  const wrapper = mount(
    Select,
    {
      components: {
        [Option.name]: Option,
      },
      propsData: { value: '' },
      slots: {
        default: `
        <m-option label="Eat" />
        <m-option label="Sleep" />
        <m-option label="Coding"/>
      `,
      },
    },
    { attachTo: document.body }
  )

  wrapper.vm.focus()
  await delay(300)
  expectPopoverShow()

  wrapper.vm.blur()
  await delay(300)
  expectPopoverHide()

  expect(wrapper.emitted().focus.length).toBe(1)
  expect(wrapper.emitted().blur.length).toBe(1)

  destroy(wrapper)
})

test('test select close in multiple', async () => {
  const wrapper = mount(
    Select,
    {
      components: {
        [Option.name]: Option,
      },
      propsData: {
        value: ['Eat', 'Sleep', 'Coding'],
        multiple: true,
      },
      listeners: {
        input(v) {
          wrapper.setProps({ value: v })
        },
      },
      slots: {
        default: `
        <m-option label="Eat" />
        <m-option label="Sleep" />
        <m-option label="Coding"/>
      `,
      },
    },
    { attachTo: document.body }
  )

  await closeOption(wrapper)
  await closeOption(wrapper)
  await closeOption(wrapper)
  expect(wrapper.emitted().input[0][0]).toStrictEqual(['Sleep', 'Coding'])
  expect(wrapper.emitted().input[1][0]).toStrictEqual(['Coding'])
  expect(wrapper.emitted().input[2][0]).toStrictEqual([])
  expect(wrapper.emitted()['tag-close'][0][0]).toStrictEqual(['Sleep', 'Coding'])
  expect(wrapper.emitted()['tag-close'][1][0]).toStrictEqual(['Coding'])
  expect(wrapper.emitted()['tag-close'][2][0]).toStrictEqual([])

  destroy(wrapper)
})

test('test select tab focus and esc blur', async () => {
  const wrapper = mount(
    Select,
    {
      components: {
        [Option.name]: Option,
      },
      propsData: { value: '' },
      slots: {
        default: `
        <m-option label="Eat" />
        <m-option label="Sleep" />
        <m-option label="Coding"/>
      `,
      },
    },
    { attachTo: document.body }
  )

  await tabFocus(wrapper)
  await delay(300)
  expectPopoverShow()

  await trigger(window, 'keydown', 0, 0, 0, 0, 0, 0, { code: 'Escape' })
  await delay(300)
  expectPopoverHide()

  expect(wrapper.emitted().focus.length).toBe(1)
  expect(wrapper.emitted().blur.length).toBe(1)

  destroy(wrapper)
})

test('test select tab focus and touch document blur', async () => {
  const wrapper = mount(
    Select,
    {
      components: {
        [Option.name]: Option,
      },
      propsData: { value: '' },
      slots: {
        default: `
        <m-option label="Eat" />
        <m-option label="Sleep" />
        <m-option label="Coding"/>
      `,
      },
    },
    { attachTo: document.body }
  )

  await tabFocus(wrapper)
  await delay(300)
  expectPopoverShow()

  await trigger(document, 'touchstart')
  await delay(300)
  expectPopoverHide()

  expect(wrapper.emitted().focus.length).toBe(1)
  expect(wrapper.emitted().blur.length).toBe(1)

  destroy(wrapper)
})

test('test select popover events', async () => {
  const { mockRestore } = mockStubs()

  const wrapper = mount(
    Select,
    {
      components: {
        [Option.name]: Option,
      },
      propsData: { value: '' },
      slots: {
        default: `
        <m-option label="Eat" />
        <m-option label="Sleep" />
        <m-option label="Coding"/>
      `,
      },
    },
    { attachTo: document.body }
  )

  await clickOpen(wrapper)
  expect(wrapper.emitted().open.length).toBe(1)

  await selectOption()
  expect(wrapper.emitted().close.length).toBe(1)
  expect(wrapper.emitted().closed.length).toBe(1)

  mockRestore()
  destroy(wrapper)
})

test('test select slots', async () => {
  const wrapper = mount(
    Select,
    {
      components: {
        [Option.name]: Option,
      },
      propsData: { value: '' },
      slots: {
        default: `
        <m-option label="Eat" />
        <m-option label="Sleep" />
        <m-option label="Coding"/>
      `,
        'prepend-icon': '<div>prepend icon</div>',
        'append-icon': '<div>append icon</div>',
      },
    },
    { attachTo: document.body }
  )

  expect(wrapper.html()).toMatchSnapshot()

  destroy(wrapper)
})

test('test select keyboard trigger on popover hide', async () => {
  const wrapper = mount(
    Select,
    {
      components: {
        [Option.name]: Option,
      },
      propsData: { value: '' },
      slots: {
        default: `
        <m-option label="Eat" />
        <m-option label="Sleep" />
        <m-option label="Coding"/>
      `,
      },
    },
    { attachTo: document.body }
  )

  await trigger(window, 'keydown', 0, 0, 0, 0, 0, 0, { code: 'Enter' })
  await trigger(window, 'keydown', 0, 0, 0, 0, 0, 0, { code: 'ArrowDown' })
  await trigger(window, 'keydown', 0, 0, 0, 0, 0, 0, { code: 'ArrowUp' })
  await trigger(window, 'keydown', 0, 0, 0, 0, 0, 0, { code: 'Escape' })

  await delay(300)
  expect(Object.keys(wrapper.emitted()).length).toBe(0)
  destroy(wrapper)
})

test('test select option mouseenter', async () => {
  const wrapper = mount(
    Select,
    {
      components: {
        [Option.name]: Option,
      },
      propsData: { value: '' },
      slots: {
        default: `
        <m-option label="Eat" />
        <m-option label="Sleep" />
        <m-option label="Coding"/>
      `,
      },
    },
    { attachTo: document.body }
  )

  await clickOpen(wrapper)
  await mouseenterOption()
  expect(document.querySelector('.m-option').classList.contains('m-option--key-active')).toBeTruthy()

  destroy(wrapper)
})

test('test select option all disabled', async () => {
  const wrapper = mount(
    Select,
    {
      components: {
        [Option.name]: Option,
      },
      propsData: { value: '' },
      slots: {
        default: `
        <m-option label="Eat" disabled />
        <m-option label="Sleep" disabled />
        <m-option label="Coding" disabled />
      `,
      },
    },
    { attachTo: document.body }
  )

  await delay(16)
  await clickOpen(wrapper)
  expectPopoverHide()
  destroy(wrapper)
})
