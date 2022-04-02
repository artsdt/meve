import { mount } from '@vue/test-utils'
import DatePicker from '../../date-picker'
import { delay, mockStubs, trigger } from '../../utils/jest'
import dayjs from 'dayjs/esm'

async function mouseenterPopover() {
  await trigger(document.querySelector('.m-date-picker__popover-inner'), 'mouseenter')
}

async function mouseleavePopover() {
  await trigger(document.querySelector('.m-date-picker__popover-inner'), 'mouseleave')
}

async function now() {
  await trigger(document.querySelector('.m-date-picker__now-button'), 'click')
}

async function confirm() {
  await trigger(document.querySelector('.m-date-picker__confirm-button'), 'click')
}

async function clickInput(wrapper) {
  await wrapper.find('.m-input').trigger('click')
}

function mockNow(wrapper) {
  wrapper.vm.$refs.calendar.current = dayjs('2022-03-17')
  wrapper.vm.$refs.calendar.now = dayjs('2022-03-17')
}

function destroy(wrapper) {
  wrapper.destroy()
  document.body.innerHTML = ''
}

test('test date picker pick date', async () => {
  const wrapper = mount(DatePicker, { attachTo: document.body })

  mockNow(wrapper)
  await clickInput(wrapper)
  await mouseenterPopover()
  await trigger(document.querySelector('.m-calendar__date-cell'), 'click')
  await confirm()
  await mouseleavePopover()

  expect(wrapper.emitted().input.length).toBe(1)
  expect(wrapper.emitted().change.length).toBe(1)
  expect(wrapper.emitted().input[0][0]).toBe('2022-02-27')
  expect(wrapper.emitted().change[0][0]).toBe('2022-02-27')

  destroy(wrapper)
})

test('test date picker pick now', async () => {
  const wrapper = mount(DatePicker, { attachTo: document.body })
  mockNow(wrapper)

  await clickInput(wrapper)
  await mouseenterPopover()
  await now()
  await confirm()
  await mouseleavePopover()

  const n = dayjs().format('YYYY-MM-DD')
  expect(wrapper.emitted().input.length).toBe(1)
  expect(wrapper.emitted().change.length).toBe(1)
  expect(wrapper.emitted().input[0][0]).toBe(n)
  expect(wrapper.emitted().change[0][0]).toBe(n)

  destroy(wrapper)
})

test('test date picker pick range', async () => {
  const wrapper = mount(DatePicker, {
    propsData: {
      value: [],
      range: true,
    },
    attachTo: document.body,
  })
  mockNow(wrapper)

  await clickInput(wrapper)
  await mouseenterPopover()
  await trigger(document.querySelector('.m-calendar__date-cell'), 'click')
  await trigger(document.querySelectorAll('.m-calendar__date-cell')[1], 'click')
  await confirm()
  await mouseleavePopover()

  expect(wrapper.emitted().input.length).toBe(1)
  expect(wrapper.emitted().change.length).toBe(1)
  expect(wrapper.emitted().input[0][0]).toStrictEqual(['2022-02-27', '2022-02-28'])
  expect(wrapper.emitted().change[0][0]).toStrictEqual(['2022-02-27', '2022-02-28'])

  destroy(wrapper)
})

test('test date picker disabled', async () => {
  const wrapper = mount(DatePicker, {
    propsData: {
      disabled: true,
    },
    attachTo: document.body,
  })

  await clickInput(wrapper)
  expect(document.querySelector('.m-popover__container').style.display).toBe('none')
  expect(wrapper.html()).toMatchSnapshot()

  expect(wrapper.emitted().click).toBeFalsy()

  await wrapper.setProps({ disabled: false })
  await clickInput(wrapper)
  expect(wrapper.html()).toMatchSnapshot()
  expect(document.querySelector('.m-popover__container').style.display).toBe('')

  expect(wrapper.emitted().click.length).toBe(1)

  destroy(wrapper)
})

test('test date picker readonly', async () => {
  const wrapper = mount(DatePicker, {
    propsData: {
      readonly: true,
    },
    attachTo: document.body,
  })

  await clickInput(wrapper)
  expect(document.querySelector('.m-popover__container').style.display).toBe('none')
  expect(wrapper.html()).toMatchSnapshot()

  expect(wrapper.emitted().click.length).toBe(1)

  await wrapper.setProps({ readonly: false })
  await clickInput(wrapper)
  expect(wrapper.html()).toMatchSnapshot()
  expect(document.querySelector('.m-popover__container').style.display).toBe('')

  expect(wrapper.emitted().click.length).toBe(2)

  destroy(wrapper)
})

test('test date picker custom disabled', async () => {
  const wrapper = mount(DatePicker, {
    propsData: {
      customDisabled(date) {
        return date.date() === 27
      },
    },
    attachTo: document.body,
  })

  mockNow(wrapper)

  await clickInput(wrapper)
  await mouseenterPopover()
  await trigger(document.querySelector('.m-calendar__date-cell'), 'click')
  await confirm()
  await mouseleavePopover()

  expect(wrapper.emitted().input).toBeFalsy()
  expect(wrapper.emitted().change).toBeFalsy()

  destroy(wrapper)
})

test('test date picker keyboard escape', async () => {
  const wrapper = mount(DatePicker, {
    attachTo: document.body,
  })

  mockNow(wrapper)

  await clickInput(wrapper)
  await mouseenterPopover()
  await trigger(document.querySelector('.m-calendar__date-cell'), 'click')
  await trigger(window, 'keydown', 0, 0, 0, 0, 0, 0, { code: 'Escape' })
  await mouseleavePopover()

  expect(wrapper.emitted().input.length).toBe(1)
  expect(wrapper.emitted().change.length).toBe(1)
  expect(wrapper.emitted().input[0][0]).toBe('2022-02-27')
  expect(wrapper.emitted().change[0][0]).toBe('2022-02-27')

  destroy(wrapper)
})

test('test date picker clearable', async () => {
  const wrapper = mount(DatePicker, {
    propsData: {
      value: undefined,
      clearable: true,
    },
    attachTo: document.body,
  })

  expect(wrapper.find('.m-date-picker__clear-icon').classes().includes('m-date-picker--hide-clear-icon')).toBeTruthy()

  await wrapper.setProps({ value: '2022-02-27' })

  expect(wrapper.find('.m-date-picker__clear-icon').classes().includes('m-date-picker--hide-clear-icon')).toBeFalsy()

  await wrapper.find('.m-date-picker__clear-icon').trigger('click')
  expect(wrapper.emitted().clear.length).toBe(1)
  expect(wrapper.emitted().change.length).toBe(1)
  expect(wrapper.emitted().input.length).toBe(1)
  expect(wrapper.emitted().clear[0][0]).toBe(undefined)
  expect(wrapper.emitted().input[0][0]).toBe(undefined)
  expect(wrapper.emitted().change[0][0]).toBe(undefined)

  destroy(wrapper)
})

test('test date picker validation', async () => {
  const { mockRestore } = mockStubs()
  const wrapper = mount(DatePicker, {
    propsData: {
      value: undefined,
      rules: [(v) => !!v || '不能为空'],
    },
    attachTo: document.body,
  })

  mockNow(wrapper)

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

test('test date picker blur confirm', async () => {
  const wrapper = mount(DatePicker, {
    attachTo: document.body,
  })

  mockNow(wrapper)

  await clickInput(wrapper)
  await mouseenterPopover()
  await trigger(document.querySelector('.m-calendar__date-cell'), 'click')
  await mouseleavePopover()
  await wrapper.find('.m-input input').trigger('blur')

  expect(wrapper.emitted().input.length).toBe(1)
  expect(wrapper.emitted().change.length).toBe(1)
  expect(wrapper.emitted().input[0][0]).toBe('2022-02-27')
  expect(wrapper.emitted().input[0][0]).toBe('2022-02-27')

  destroy(wrapper)
})
