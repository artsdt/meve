import Menu from '..'
import MenuItemGroup from '../../menu-item-group'
import MenuItem from '../../menu-item'
import { mount } from '@vue/test-utils'

test('test menu item group props', async () => {
  const component = {
    components: {
      [Menu.name]: Menu,
      [MenuItemGroup.name]: MenuItemGroup,
      [MenuItem.name]: MenuItem,
    },
    template: `
      <m-menu>
        <m-menu-item-group name="1" label="level 1" icon="error">
          <m-menu-item name="1-1" label="level 1-1" icon="error" />
        </m-menu-item-group>
      </m-menu>
    `,
  }

  const wrapper = mount(component)
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})

test('test menu item group disabled', async () => {
  const handleGroupChange = jest.fn()

  const component = {
    components: {
      [Menu.name]: Menu,
      [MenuItemGroup.name]: MenuItemGroup,
      [MenuItem.name]: MenuItem,
    },
    methods: {
      handleGroupChange,
    },
    data: () => ({
      disabled: true,
    }),
    template: `
      <m-menu @update:expanded-names="handleGroupChange">
        <m-menu-item-group name="1" label="level 1" icon="error" :disabled="disabled">
          <m-menu-item name="1-1" label="level 1-1" icon="error" />
        </m-menu-item-group>
      </m-menu>
    `,
  }

  const wrapper = mount(component)
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.find('.m-menu-item-group__trigger').trigger('click')
  expect(handleGroupChange).toHaveBeenCalledTimes(0)

  await wrapper.setData({ disabled: false })

  await wrapper.find('.m-menu-item-group__trigger').trigger('click')
  expect(handleGroupChange).toHaveBeenCalledTimes(1)

  wrapper.destroy()
})

test('test menu item group pass render function', async () => {
  const component = {
    components: {
      [Menu.name]: Menu,
      [MenuItemGroup.name]: MenuItemGroup,
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
        <m-menu-item-group name="1" :label="renderLabel" :icon="renderIcon">
          <m-menu-item name="1-1" label="level 1-1" icon="error" />
        </m-menu-item-group>
      </m-menu>
    `,
  }

  const wrapper = mount(component)
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.destroy()
})

test('test menu item group icon pass object', async () => {
  const component = {
    components: {
      [Menu.name]: Menu,
      [MenuItemGroup.name]: MenuItemGroup,
      [MenuItem.name]: MenuItem,
    },
    template: `
      <m-menu>
        <m-menu-item-group name="1" label="level 1" :icon="{ name: 'error', color: 'red', size: 30 }">
          <m-menu-item name="1-1" label="level 1-1" icon="error" />
        </m-menu-item-group>
      </m-menu>
    `,
  }

  const wrapper = mount(component)
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.destroy()
})

test('test menu item group slots', async () => {
  const component = {
    components: {
      [Menu.name]: Menu,
      [MenuItemGroup.name]: MenuItemGroup,
      [MenuItem.name]: MenuItem,
    },
    template: `
      <m-menu>
        <m-menu-item-group name="1">
          <template #icon>
            <div>custom icon</div>
          </template>

          <template #label>
            <div>custom label</div>
          </template>

          <m-menu-item name="1-1" label="level 1-1" icon="error" />
        </m-menu-item-group>
      </m-menu>
    `,
  }

  const wrapper = mount(component)
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.destroy()
})
