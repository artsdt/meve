import Popover from '..'
import { mount } from '@vue/test-utils'
import { trigger, delay } from '../../utils/jest'

test('test popover hover trigger', async () => {
  const onOpen = jest.fn()
  const onClose = jest.fn()

  const wrapper = mount(
    {
      components: {
        [Popover.name]: Popover,
      },
      methods: {
        onOpen,
        onClose,
      },
      template: `
      <m-popover @open="onOpen" @close="onClose">
        <template #trigger>
          <button class="trigger">trigger</button>
        </template>

        <div>hello</div>
      </m-popover>
    `,
    },
    { attachTo: document.body }
  )

  expect(document.body.innerHTML.includes('display: none')).toBe(true)

  await trigger(wrapper.find('.trigger'), 'mouseenter')
  await delay(100)
  expect(document.body.innerHTML.includes('display: none')).toBe(false)
  expect(onOpen).toHaveBeenCalledTimes(1)

  await trigger(wrapper.find('.trigger'), 'mouseleave')
  await delay(600)
  expect(document.body.innerHTML.includes('display: none')).toBe(true)
  expect(onClose).toHaveBeenCalledTimes(1)

  wrapper.destroy()
})

test('test popover click trigger', async () => {
  const onOpen = jest.fn()
  const onClose = jest.fn()

  const wrapper = mount(
    {
      components: {
        [Popover.name]: Popover,
      },
      methods: {
        onOpen,
        onClose,
      },
      template: `
      <m-popover trigger="click" @open="onOpen" @close="onClose">
        <template #trigger>
          <button class="trigger">trigger</button>
        </template>

        <div>hello</div>
      </m-popover>
    `,
    },
    { attachTo: document.body }
  )

  expect(document.body.innerHTML).toMatchSnapshot()
  expect(wrapper.html()).toMatchSnapshot()
  expect(document.body.innerHTML.includes('display: none')).toBe(true)

  await trigger(wrapper.find('.trigger'), 'click')
  expect(document.body.innerHTML).toMatchSnapshot()
  expect(wrapper.html()).toMatchSnapshot()
  expect(document.body.innerHTML.includes('display: none')).toBe(false)
  expect(onOpen).toHaveBeenCalledTimes(1)

  await trigger(document, 'click')
  await delay(300)
  expect(document.body.innerHTML.includes('display: none')).toBe(true)
  expect(onClose).toHaveBeenCalledTimes(1)

  wrapper.destroy()
})

test('test popover nest with hover', async () => {
  const wrapper = mount(
    {
      components: {
        [Popover.name]: Popover,
      },
      template: `
      <m-popover>
        <template #trigger>
          <button class="rootTrigger">root trigger</button>
        </template>

        <m-popover>
          <template #trigger>
            <button class="parentTrigger">parent trigger</button>
          </template>

          <m-popover>
            <template #trigger>
              <button class="childTrigger">child trigger</button>
            </template>

            <div>hello</div>
          </m-popover>
        </m-popover>
      </m-popover>
    `,
    },
    { attachTo: document.body }
  )

  await trigger(wrapper.find('.rootTrigger'), 'mouseenter')
  await trigger(wrapper.find('.rootTrigger'), 'mouseleave')
  await trigger(document.querySelector('.parentTrigger'), 'mouseenter')
  await trigger(document.querySelector('.parentTrigger'), 'mouseleave')
  await trigger(document.querySelector('.childTrigger'), 'mouseenter')
  await delay(100)
  expect(document.body.innerHTML).toMatchSnapshot()
  expect(wrapper.html()).toMatchSnapshot()

  await trigger(document.querySelector('.childTrigger'), 'mouseleave')
  await delay(600)
  expect(document.body.innerHTML.includes('display: none')).toBe(true)

  wrapper.destroy()
})

test('test popover nest with click', async () => {
  const wrapper = mount(
    {
      components: {
        [Popover.name]: Popover,
      },
      template: `
      <m-popover trigger="click">
        <template #trigger>
          <button class="parentTrigger">parent trigger</button>
        </template>

        <div>
          <m-popover trigger="click">
            <template #trigger>
              <button class="childTrigger">child trigger</button>
            </template>

            <div class="child">hello</div>
          </m-popover>
          <m-popover trigger="click">
            <template #trigger>
              <button class="childSiblingTrigger">child trigger</button>
            </template>

            <div class="childSibling">hello</div>
          </m-popover>
        </div>
      </m-popover>
    `,
    },
    { attachTo: document.body }
  )

  await trigger(wrapper.find('.parentTrigger'), 'click')
  await trigger(document.querySelector('.childTrigger'), 'click')
  await trigger(document.querySelector('.childSiblingTrigger'), 'click')
  await delay(300)
  expect(document.querySelector('.child').parentNode.style.display).toBe('none')
  expect(document.body.innerHTML).toMatchSnapshot()
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.destroy()
})

test('test popover disabled hover', async () => {
  const wrapper = mount(
    {
      components: {
        [Popover.name]: Popover,
      },
      template: `
      <m-popover disabled>
        <template #trigger>
          <button class="trigger">trigger</button>
        </template>

        <div>hello</div>
      </m-popover>
    `,
    },
    { attachTo: document.body }
  )

  await trigger(wrapper.find('.trigger'), 'mouseenter')
  await delay(100)
  expect(document.body.innerHTML.includes('display: none')).toBe(true)
  await trigger(wrapper.find('.trigger'), 'mouseleave')

  wrapper.destroy()
})

test('test popover disabled click', async () => {
  const wrapper = mount(
    {
      components: {
        [Popover.name]: Popover,
      },
      template: `
      <m-popover trigger="click" disabled>
        <template #trigger>
          <button class="trigger">trigger</button>
        </template>

        <div>hello</div>
      </m-popover>
    `,
    },
    { attachTo: document.body }
  )

  await trigger(wrapper.find('.trigger'), 'click')
  expect(document.body.innerHTML).toMatchSnapshot()
  expect(wrapper.html()).toMatchSnapshot()
  expect(document.body.innerHTML.includes('display: none')).toBe(true)

  wrapper.destroy()
})

test('test popover placement', async () => {
  const wrapper = mount(
    {
      components: {
        [Popover.name]: Popover,
      },
      data: () => ({
        placement: 'bottom',
      }),
      template: `
      <m-popover :placement="placement">
        <template #trigger>
          <button class="trigger">trigger</button>
        </template>

        <div>hello</div>
      </m-popover>
    `,
    },
    { attachTo: document.body }
  )

  await trigger(wrapper.find('.trigger'), 'mouseenter')
  await delay(100)

  expect(document.body.innerHTML).toMatchSnapshot()

  await wrapper.setData({ placement: 'bottom-start' })
  await delay(100)
  expect(document.body.innerHTML).toMatchSnapshot()

  await wrapper.setData({ placement: 'bottom-end' })
  await delay(100)
  expect(document.body.innerHTML).toMatchSnapshot()

  await wrapper.setData({ placement: 'top' })
  await delay(100)
  expect(document.body.innerHTML).toMatchSnapshot()

  await wrapper.setData({ placement: 'top-start' })
  await delay(100)
  expect(document.body.innerHTML).toMatchSnapshot()

  await wrapper.setData({ placement: 'top-end' })
  await delay(100)
  expect(document.body.innerHTML).toMatchSnapshot()

  await wrapper.setData({ placement: 'left' })
  await delay(100)
  expect(document.body.innerHTML).toMatchSnapshot()

  await wrapper.setData({ placement: 'left-start' })
  await delay(100)
  expect(document.body.innerHTML).toMatchSnapshot()

  await wrapper.setData({ placement: 'left-end' })
  await delay(100)
  expect(document.body.innerHTML).toMatchSnapshot()

  await wrapper.setData({ placement: 'right' })
  await delay(100)
  expect(document.body.innerHTML).toMatchSnapshot()

  await wrapper.setData({ placement: 'right-start' })
  await delay(100)
  expect(document.body.innerHTML).toMatchSnapshot()

  await wrapper.setData({ placement: 'right-end' })
  await delay(100)
  expect(document.body.innerHTML).toMatchSnapshot()
})
