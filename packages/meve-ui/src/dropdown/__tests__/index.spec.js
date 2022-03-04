import Dropdown from '..'
import { mount } from '@vue/test-utils'
import { delay, mockOffset, trigger } from '../../utils/jest'

mockOffset()

test('test dropdown open', async () => {
  const wrapper = mount(Dropdown, {
    propsData: {
      options: [
        { key: 1, label: 'hello' },
        { key: 2, label: 'world' },
      ],
    },
    slots: {
      default: '<button class="trigger">hello</button>',
    },
    attachTo: document.body,
  })

  await wrapper.find('.trigger').trigger('click')
  await delay(100)

  expect(document.body.innerHTML.includes('display: none')).toBe(false)

  wrapper.destroy()
  document.body.innerHTML = ''
})

test('test dropdown size', async () => {
  const wrapper = mount(Dropdown, {
    propsData: {
      options: [
        { key: 1, label: 'hello', icon: 'error' },
        { key: 2, label: 'world', icon: 'error' },
      ],
      size: 'small',
    },
    slots: {
      default: '<button class="trigger">hello</button>',
    },
    attachTo: document.body,
  })

  expect(document.body.innerHTML).toMatchSnapshot()
  expect(document.body.innerHTML.includes('m-dropdown--small')).toBe(true)

  wrapper.destroy()
  document.body.innerHTML = ''
})

test('test dropdown select', async () => {
  const wrapper = mount(Dropdown, {
    propsData: {
      options: [
        { key: 1, label: 'hello' },
        { key: 2, label: 'world' },
      ],
    },
    slots: {
      default: '<button class="trigger">hello</button>',
    },
    attachTo: document.body,
  })

  await wrapper.find('.trigger').trigger('click')
  await delay(100)
  expect(wrapper.emitted().open.length).toBe(1)
  await trigger(document.querySelector('.m-dropdown__cell'), 'click')
  expect(wrapper.emitted().select.length).toBe(1)
  expect(wrapper.emitted().select[0][0].key).toBe(1)
  await delay(300)
  expect(wrapper.emitted().close.length).toBe(1)
  wrapper.destroy()
  document.body.innerHTML = ''
})

test('test dropdown select disabled', async () => {
  const wrapper = mount(Dropdown, {
    propsData: {
      options: [
        { key: 1, label: 'hello', disabled: true },
        { key: 2, label: 'world' },
      ],
    },
    slots: {
      default: '<button class="trigger">hello</button>',
    },
    attachTo: document.body,
  })

  await wrapper.find('.trigger').trigger('click')
  await delay(100)
  await trigger(document.querySelector('.m-dropdown__cell'), 'click')
  expect(wrapper.emitted().select).toBeFalsy()
  wrapper.destroy()
  document.body.innerHTML = ''
})

test('test dropdown custom render', async () => {
  const wrapper = mount(Dropdown, {
    propsData: {
      options: [
        {
          key: 1,
          label: (h) => h('span', 'custom hello'),
          icon: (h) => h('span', 'custom icon'),
        },
      ],
    },
    slots: {
      default: '<button class="trigger">hello</button>',
    },
    attachTo: document.body,
  })

  expect(document.body.innerHTML).toMatchSnapshot()
  wrapper.destroy()
  document.body.innerHTML = ''
})

test('test dropdown children', async () => {
  const wrapper = mount(Dropdown, {
    propsData: {
      options: [
        {
          key: 1,
          label: 'parent',
          children: [
            {
              key: 2,
              label: 'child',
            },
          ],
        },
      ],
    },
    slots: {
      default: '<button class="trigger">hello</button>',
    },
    attachTo: document.body,
  })

  console.log(document.body.innerHTML)

  const childNode = document.querySelectorAll('.m-dropdown__cell')[0]
  const parentNode = document.querySelectorAll('.m-dropdown__cell')[1]

  await wrapper.find('.trigger').trigger('click')
  await delay(300)
  await trigger(parentNode, 'click')
  await delay(300)
  expect(document.body.innerHTML).toMatchSnapshot()

  await trigger(childNode, 'click')
  expect(wrapper.emitted().select.length).toBe(1)
  expect(wrapper.emitted().select[0][0].key).toBe(2)
  wrapper.destroy()
  document.body.innerHTML = ''
})
