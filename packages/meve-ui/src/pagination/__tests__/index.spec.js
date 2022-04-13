import Pagination from '..'
import { mount } from '@vue/test-utils'
import { trigger } from '../../utils/jest'

test('test pagination current change', async () => {
  const wrapper = mount(Pagination, {
    propsData: {
      current: 1,
      total: 100,
    },
  })

  expect(wrapper.emitted()['update:current'].length).toBe(2)
  expect(wrapper.emitted()['update:current'][1][0]).toBe(1)
  expect(wrapper.html()).toMatchSnapshot()

  const pager2 = wrapper.findAll('.m-pagination__pager').at(2)
  pager2.trigger('click')
  expect(wrapper.emitted()['update:current'].length).toBe(3)
  expect(wrapper.emitted()['update:current'][2][0]).toBe(2)

  const pager10 = wrapper.findAll('.m-pagination__pager').at(6)
  pager10.trigger('click')
  expect(wrapper.emitted()['update:current'].length).toBe(4)
  expect(wrapper.emitted()['update:current'][3][0]).toBe(10)

  const nextButton = wrapper.findAll('.m-pagination__pager').at(7)
  nextButton.trigger('click')
  expect(wrapper.emitted()['update:current'].length).toBe(5)
  expect(wrapper.emitted()['update:current'][4][0]).toBe(2)

  const ellNextButton = wrapper.findAll('.m-pagination__pager').at(5)
  ellNextButton.trigger('click')
  expect(wrapper.emitted()['update:current'].length).toBe(6)
  expect(wrapper.emitted()['update:current'][5][0]).toBe(4)

  await wrapper.setProps({ current: 10 })
  expect(wrapper.emitted()['update:current'].length).toBe(7)
  expect(wrapper.emitted()['update:current'][6][0]).toBe(10)
  expect(wrapper.html()).toMatchSnapshot()

  const ellPrevButton = wrapper.findAll('.m-pagination__pager').at(2)
  ellPrevButton.trigger('click')
  expect(wrapper.emitted()['update:current'].length).toBe(8)
  expect(wrapper.emitted()['update:current'][7][0]).toBe(7)

  wrapper.destroy()
})

test('test pagination hide when total = 0', () => {
  const wrapper = mount(Pagination, {
    propsData: {
      current: 1,
      total: 0,
    },
  })

  expect(wrapper.isVisible()).toBeFalsy()

  wrapper.destroy()
})

test('test pagination exposed methods', async () => {
  const wrapper = mount(Pagination, {
    propsData: {
      current: 1,
      total: 100,
    },
  })

  expect(wrapper.emitted()['update:current'].length).toBe(2)
  expect(wrapper.emitted()['update:current'][1][0]).toBe(1)

  const { prev, next, to } = wrapper.vm

  prev()
  expect(wrapper.emitted()['update:current'].length).toBe(2)
  expect(wrapper.emitted()['update:current'][1][0]).toBe(1)

  next()
  expect(wrapper.emitted()['update:current'].length).toBe(3)
  expect(wrapper.emitted()['update:current'][2][0]).toBe(2)

  await wrapper.setProps({ current: 10 })
  expect(wrapper.emitted()['update:current'].length).toBe(4)
  expect(wrapper.emitted()['update:current'][3][0]).toBe(10)

  prev()
  expect(wrapper.emitted()['update:current'].length).toBe(5)
  expect(wrapper.emitted()['update:current'][4][0]).toBe(9)

  next()
  expect(wrapper.emitted()['update:current'].length).toBe(5)
  expect(wrapper.emitted()['update:current'][4][0]).toBe(9)

  to(5)
  expect(wrapper.emitted()['update:current'].length).toBe(6)
  expect(wrapper.emitted()['update:current'][5][0]).toBe(5)

  wrapper.destroy()
})

test('test pagination size change', async () => {
  const wrapper = mount(Pagination, {
    propsData: {
      current: 1,
      total: 100,
      showSizeChanger: true,
    },
  })

  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.find('.m-select__select').trigger('click')
  await trigger(document.querySelectorAll('.m-option')[1], 'click')
  expect(wrapper.emitted()['update:size'].length).toBe(1)
  expect(wrapper.emitted()['update:size'][0][0]).toBe(20)

  wrapper.destroy()
})

test('test pagination show total', () => {
  const wrapper = mount(Pagination, {
    propsData: {
      current: 1,
      total: 100,
      showTotal(total) {
        return `共${total}条`
      },
    },
  })

  expect(wrapper.html()).toMatchSnapshot()

  wrapper.destroy()
})

test('test pagination show double ellipsis', () => {
  const wrapper = mount(Pagination, {
    propsData: {
      current: 4,
      total: 100,
    },
  })

  expect(wrapper.html()).toMatchSnapshot()

  wrapper.destroy()
})

test('test pagination slots', () => {
  const wrapper = mount(Pagination, {
    propsData: {
      current: 1,
      total: 100,
    },
    scopedSlots: {
      'prev-button': '<div>prev button</div>',
      'next-button': '<div>next button</div>',
    },
  })

  expect(wrapper.html()).toMatchSnapshot()

  wrapper.destroy()
})

test('test pagination quick jumper', () => {
  const wrapper = mount(Pagination, {
    propsData: {
      current: 1,
      total: 100,
      showQuickJumper: true,
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.emitted()['update:current'].length).toBe(2)
  expect(wrapper.emitted()['update:current'][1][0]).toBe(1)

  wrapper.find('.m-input__input').setValue(2)
  wrapper.find('.m-input__input').trigger('change')

  expect(wrapper.emitted()['update:current'].length).toBe(3)
  expect(wrapper.emitted()['update:current'][2][0]).toBe(2)

  wrapper.destroy()
})

test('test pagination disabled', () => {
  const wrapper = mount(Pagination, {
    propsData: {
      current: 1,
      total: 100,
      disabled: true,
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.emitted()['update:current'].length).toBe(2)
  expect(wrapper.emitted()['update:current'][1][0]).toBe(1)

  const pager2 = wrapper.findAll('.m-pagination__pager').at(2)
  pager2.trigger('click')
  expect(wrapper.emitted()['update:current'].length).toBe(2)
  expect(wrapper.emitted()['update:current'][1][0]).toBe(1)

  const prevButton = wrapper.findAll('.m-pagination__pager').at(0)
  prevButton.trigger('click')
  expect(wrapper.emitted()['update:current'].length).toBe(2)
  expect(wrapper.emitted()['update:current'][1][0]).toBe(1)

  const nextButton = wrapper.findAll('.m-pagination__pager').at(7)
  nextButton.trigger('click')
  expect(wrapper.emitted()['update:current'].length).toBe(2)
  expect(wrapper.emitted()['update:current'][1][0]).toBe(1)

  wrapper.destroy()
})
