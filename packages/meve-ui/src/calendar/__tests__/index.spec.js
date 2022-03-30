import Calendar from '..'
import dayjs from 'dayjs/esm'
import { mount } from '@vue/test-utils'
import { delay } from '../../utils/jest'

test('test calendar v-model', async () => {
  const wrapper = mount(Calendar, {
    propsData: {
      value: '2022-03-17',
    },
  })

  wrapper.vm.current = dayjs('2022-03-17')
  wrapper.vm.now = dayjs('2022-03-17')
  await delay(16)

  await wrapper.find('.m-calendar__date-cell').trigger('click')

  expect(wrapper.emitted().input.length).toBe(1)
  expect(wrapper.emitted().change.length).toBe(1)
  expect(wrapper.emitted().click.length).toBe(1)

  expect(wrapper.emitted().input[0][0]).toBe('2022-02-27')
  expect(wrapper.emitted().change[0][0]).toBe('2022-02-27')
  expect(wrapper.emitted().click[0][0]).toBe('2022-02-27')

  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})

test('test calendar v-model in range mode', async () => {
  const wrapper = mount(Calendar, {
    propsData: {
      value: [],
      range: true,
    },
  })

  wrapper.vm.current = dayjs('2022-03-17')
  wrapper.vm.now = dayjs('2022-03-17')
  await delay(16)

  await wrapper.find('.m-calendar__date-cell').trigger('click')

  expect(wrapper.emitted().input.length).toBe(1)
  expect(wrapper.emitted().change.length).toBe(1)
  expect(wrapper.emitted().click.length).toBe(1)
  expect(wrapper.emitted().input[0][0]).toStrictEqual(['2022-02-27'])
  expect(wrapper.emitted().change[0][0]).toStrictEqual(['2022-02-27'])
  expect(wrapper.emitted().click[0][0]).toStrictEqual('2022-02-27')

  await wrapper.setProps({ value: ['2022-02-27'] })

  await wrapper.findAll('.m-calendar__date-cell').at(2).trigger('click')

  expect(wrapper.emitted().input.length).toBe(2)
  expect(wrapper.emitted().change.length).toBe(2)
  expect(wrapper.emitted().click.length).toBe(2)
  expect(wrapper.emitted().input[1][0]).toStrictEqual(['2022-02-27', '2022-03-01'])
  expect(wrapper.emitted().change[1][0]).toStrictEqual(['2022-02-27', '2022-03-01'])
  expect(wrapper.emitted().click[1][0]).toStrictEqual('2022-03-01')

  await wrapper.setProps({ value: ['2022-02-27', '2022-03-01'] })
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.destroy()
})

test('test calendar exposed methods', async () => {
  const wrapper = mount(Calendar, {
    propsData: {
      value: '2022-03-17',
    },
  })

  wrapper.vm.current = dayjs('2022-03-17')
  wrapper.vm.now = dayjs('2022-03-17')
  await delay(16)

  wrapper.vm.prev()
  expect(wrapper.vm.current.format('YYYY-MM-DD')).toBe('2022-02-17')

  wrapper.vm.next()
  expect(wrapper.vm.current.format('YYYY-MM-DD')).toBe('2022-03-17')

  wrapper.vm.toNow()
  expect(wrapper.vm.current.isSame(dayjs(), 'date')).toBeTruthy()

  wrapper.destroy()
})

test('test calendar header slot', async () => {
  const wrapper = mount(Calendar, {
    propsData: {
      value: '2022-03-17',
    },
    scopedSlots: {
      header: '<div>header slot</div>',
    },
  })

  wrapper.vm.current = dayjs('2022-03-17')
  wrapper.vm.now = dayjs('2022-03-17')
  await delay(16)

  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})

test('test calendar extra slot', async () => {
  const wrapper = mount(Calendar, {
    propsData: {
      value: '2022-03-17',
    },
    scopedSlots: {
      extra: ({ date }) => {
        return date.date() % 2 === 0 ? 'hello' : 'world'
      },
    },
  })

  wrapper.vm.current = dayjs('2022-03-17')
  wrapper.vm.now = dayjs('2022-03-17')
  await delay(16)

  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})

test('test calendar disabled', async () => {
  const wrapper = mount(Calendar, {
    propsData: {
      value: '2022-03-17',
      disabled: true,
    },
  })

  wrapper.vm.current = dayjs('2022-03-17')
  wrapper.vm.now = dayjs('2022-03-17')
  await delay(16)

  await wrapper.find('.m-calendar__date-cell').trigger('click')

  expect(wrapper.emitted().input).toBeFalsy()
  expect(wrapper.emitted().change).toBeFalsy()
  expect(wrapper.emitted().click).toBeFalsy()

  wrapper.destroy()
})

test('test calendar readonly', async () => {
  const wrapper = mount(Calendar, {
    propsData: {
      value: '2022-03-17',
      readonly: true,
    },
  })

  wrapper.vm.current = dayjs('2022-03-17')
  wrapper.vm.now = dayjs('2022-03-17')
  await delay(16)

  await wrapper.find('.m-calendar__date-cell').trigger('click')

  expect(wrapper.emitted().input).toBeFalsy()
  expect(wrapper.emitted().change).toBeFalsy()
  expect(wrapper.emitted().click).toBeTruthy()

  wrapper.destroy()
})

test('test calendar custom disabled', async () => {
  const wrapper = mount(Calendar, {
    propsData: {
      value: '2022-03-17',
      customDisabled(date) {
        return date.date() === 27
      },
    },
  })

  wrapper.vm.current = dayjs('2022-03-17')
  wrapper.vm.now = dayjs('2022-03-17')
  await delay(16)

  await wrapper.find('.m-calendar__date-cell').trigger('click')

  expect(wrapper.emitted().input).toBeFalsy()
  expect(wrapper.emitted().change).toBeFalsy()
  expect(wrapper.emitted().click).toBeFalsy()

  await wrapper.findAll('.m-calendar__date-cell').at(1).trigger('click')

  expect(wrapper.emitted().input).toBeTruthy()
  expect(wrapper.emitted().change).toBeTruthy()
  expect(wrapper.emitted().click).toBeTruthy()

  wrapper.destroy()
})
