import TimePicker from '..'
import dayjs from 'dayjs/esm'
import { mount } from '@vue/test-utils'
import { delay, mockDoubleRaf, mockStubs, trigger } from '../../utils/jest'

mockDoubleRaf()

async function pickNow() {
  await trigger(document.querySelector('.m-button'), 'click')
}

async function confirm() {
  await trigger(document.querySelectorAll('.m-button')[1], 'click')
}

async function mouseenterPopover() {
  await trigger(document.querySelector('.m-time-picker__popover-inner'), 'mouseenter')
}

async function mouseleavePopover() {
  await trigger(document.querySelector('.m-time-picker__popover-inner'), 'mouseleave')
}

async function clickInput(wrapper) {
  await wrapper.find('.m-input').trigger('click')
}

function destroy(wrapper) {
  wrapper.destroy()
  document.body.innerHTML = ''
}

test('test time picker pick time', async () => {
  const wrapper = mount(TimePicker, { attachTo: document.body })

  await clickInput(wrapper)
  await mouseenterPopover()
  await trigger(wrapper.vm.$refs['0-00'], 'click')
  await trigger(wrapper.vm.$refs['1-00'], 'click')
  await trigger(wrapper.vm.$refs['2-00'], 'click')
  await confirm()
  await mouseleavePopover()

  expect(wrapper.emitted().input.length).toBe(1)
  expect(wrapper.emitted().change.length).toBe(1)
  expect(wrapper.emitted().input[0][0]).toBe('00:00:00')
  expect(wrapper.emitted().change[0][0]).toBe('00:00:00')

  destroy(wrapper)
})

test('test time picker pick now', async () => {
  const wrapper = mount(TimePicker, { attachTo: document.body })
  const now = dayjs().format('HH:mm:ss')

  await clickInput(wrapper)
  await mouseenterPopover()
  await pickNow()
  await confirm()
  await mouseleavePopover()

  expect(wrapper.emitted().input.length).toBe(1)
  expect(wrapper.emitted().change.length).toBe(1)
  expect(wrapper.emitted().input[0][0]).toBe(now)
  expect(wrapper.emitted().change[0][0]).toBe(now)

  destroy(wrapper)
})

test('test time picker disabled', async () => {
  const wrapper = mount(TimePicker, {
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

test('test time picker readonly', async () => {
  const wrapper = mount(TimePicker, {
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

test('test time picker custom disabled', async () => {
  const wrapper = mount(TimePicker, {
    propsData: {
      customDisabled(column, time) {
        return column === 0 && time === '00'
      },
    },
    attachTo: document.body,
  })

  await clickInput(wrapper)
  await mouseenterPopover()
  await trigger(wrapper.vm.$refs['0-00'], 'click')
  await confirm()
  await mouseleavePopover()

  expect(wrapper.emitted().input).toBeFalsy()
  expect(wrapper.emitted().change).toBeFalsy()

  await clickInput(wrapper)
  await mouseenterPopover()
  await trigger(wrapper.vm.$refs['0-01'], 'click')
  await trigger(wrapper.vm.$refs['1-00'], 'click')
  await trigger(wrapper.vm.$refs['2-00'], 'click')
  await confirm()
  await mouseleavePopover()

  expect(wrapper.emitted().input.length).toBe(1)
  expect(wrapper.emitted().change.length).toBe(1)
  expect(wrapper.emitted().input[0][0]).toBe('01:00:00')
  expect(wrapper.emitted().change[0][0]).toBe('01:00:00')

  destroy(wrapper)
})

test('test time picker keyboard escape', async () => {
  const wrapper = mount(TimePicker, {
    attachTo: document.body,
  })

  await clickInput(wrapper)
  await mouseenterPopover()
  await trigger(wrapper.vm.$refs['0-00'], 'click')
  await trigger(wrapper.vm.$refs['1-00'], 'click')
  await trigger(wrapper.vm.$refs['2-00'], 'click')
  await trigger(window, 'keydown', 0, 0, 0, 0, 0, 0, { code: 'Escape' })
  await mouseleavePopover()

  expect(wrapper.emitted().input.length).toBe(1)
  expect(wrapper.emitted().change.length).toBe(1)
  expect(wrapper.emitted().input[0][0]).toBe('00:00:00')
  expect(wrapper.emitted().change[0][0]).toBe('00:00:00')

  destroy(wrapper)
})

test('test time picker clearable', async () => {
  const wrapper = mount(TimePicker, {
    propsData: {
      value: undefined,
      clearable: true,
    },
    attachTo: document.body,
  })

  expect(wrapper.find('.m-time-picker__clear-icon').classes().includes('m-time-picker--hide-clear-icon')).toBeTruthy()

  await wrapper.setProps({ value: '00:00:00' })

  expect(wrapper.find('.m-time-picker__clear-icon').classes().includes('m-time-picker--hide-clear-icon')).toBeFalsy()

  await wrapper.find('.m-time-picker__clear-icon').trigger('click')
  expect(wrapper.emitted().clear.length).toBe(1)
  expect(wrapper.emitted().change.length).toBe(1)
  expect(wrapper.emitted().input.length).toBe(1)
  expect(wrapper.emitted().clear[0][0]).toBe(undefined)
  expect(wrapper.emitted().input[0][0]).toBe(undefined)
  expect(wrapper.emitted().change[0][0]).toBe(undefined)

  destroy(wrapper)
})

test('test time picker validation', async () => {
  const { mockRestore } = mockStubs()
  const wrapper = mount(TimePicker, {
    propsData: {
      value: undefined,
      rules: [(v) => !!v || '不能为空'],
    },
    attachTo: document.body,
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
  destroy(wrapper)
})

test('test time picker blur confirm', async () => {
  const wrapper = mount(TimePicker, {
    attachTo: document.body,
  })

  await clickInput(wrapper)
  await mouseenterPopover()
  await trigger(wrapper.vm.$refs['0-00'], 'click')
  await trigger(wrapper.vm.$refs['1-00'], 'click')
  await trigger(wrapper.vm.$refs['2-00'], 'click')
  await mouseleavePopover()
  await wrapper.find('.m-input input').trigger('blur')

  expect(wrapper.emitted().input.length).toBe(1)
  expect(wrapper.emitted().change.length).toBe(1)
  expect(wrapper.emitted().input[0][0]).toBe('00:00:00')
  expect(wrapper.emitted().change[0][0]).toBe('00:00:00')

  destroy(wrapper)
})
