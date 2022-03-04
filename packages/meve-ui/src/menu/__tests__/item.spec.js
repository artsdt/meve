import Menu from '..'
import MenuItem from '../../menu-item'
import { mount } from '@vue/test-utils'

test('test menu item props', async () => {
  const component = {
    components: {
      [Menu.name]: Menu,
      [MenuItem.name]: MenuItem,
    },
    template: `
      <m-menu>
        <m-menu-item name="1" label="level 1" icon="error" />
      </m-menu>
    `,
  }

  const wrapper = mount(component)
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})

test('test menu item disabled', async () => {
  const handleItemChange = jest.fn()

  const component = {
    components: {
      [Menu.name]: Menu,
      [MenuItem.name]: MenuItem,
    },
    methods: {
      handleItemChange,
    },
    data: () => ({
      disabled: true,
    }),
    template: `
      <m-menu @update:selected-names="handleItemChange">
        <m-menu-item name="1" label="level 1" icon="error" :disabled="disabled" />
      </m-menu>
    `,
  }

  const wrapper = mount(component)
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.find('.m-menu-item').trigger('click')
  expect(handleItemChange).toHaveBeenCalledTimes(0)

  await wrapper.setData({ disabled: false })
  await wrapper.find('.m-menu-item').trigger('click')
  expect(handleItemChange).toHaveBeenCalledTimes(1)

  wrapper.destroy()
})

test('test menu item pass render function', async () => {
  const component = {
    components: {
      [Menu.name]: Menu,
      [MenuItem.name]: MenuItem,
    },
    methods: {
      renderIcon(h) {
        return h('div', 'custom icon')
      },

      renderLabel(h) {
        return h('div', 'custom label')
      },
    },
    template: `
      <m-menu>
        <m-menu-item name="1" :label="renderLabel" :icon="renderIcon" />
      </m-menu>
    `,
  }

  const wrapper = mount(component)
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.destroy()
})

test('test menu item icon pass object', async () => {
  const component = {
    components: {
      [Menu.name]: Menu,
      [MenuItem.name]: MenuItem,
    },
    template: `
      <m-menu>
        <m-menu-item name="1" label="level i" :icon="{ name: 'error', color: 'red', size: 30 }" />
      </m-menu>
    `,
  }

  const wrapper = mount(component)
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.destroy()
})

test('test menu item slots', async () => {
  const component = {
    components: {
      [Menu.name]: Menu,
      [MenuItem.name]: MenuItem,
    },
    template: `
      <m-menu>
        <m-menu-item name="1">
          <template #icon>
            <div>custom icon</div>
          </template>

          <template #label>
            <div>custom label</div>
          </template>
        </m-menu-item>
      </m-menu>
    `,
  }

  const wrapper = mount(component)
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.destroy()
})
