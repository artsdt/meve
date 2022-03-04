import Menu from '..'
import MenuItemGroup from '../../menu-item-group'
import MenuItem from '../../menu-item'
import { mount } from '@vue/test-utils'
import { delay, mockDoubleRaf } from '../../utils/jest'

test('test menu expand', async () => {
  const component = {
    components: {
      [Menu.name]: Menu,
      [MenuItemGroup.name]: MenuItemGroup,
      [MenuItem.name]: MenuItem,
    },
    data: () => ({
      selectedNames: [],
      expandedNames: [],
      multiple: false,
    }),
    template: `
      <m-menu :selected-names.sync="selectedNames" :expanded-names.sync="expandedNames" :multiple="multiple">
        <m-menu-item-group name="1" label="level 1" icon="error">
          <m-menu-item name="1-1" label="level 1-1" icon="error" />
          <m-menu-item name="1-2" label="level 1-2" icon="error" />
        </m-menu-item-group>
      </m-menu>
    `,
  }

  const wrapper = mount(component)
  await wrapper.find('.m-menu-item-group__trigger').trigger('click')
  expect(wrapper.vm.expandedNames).toStrictEqual(['1'])

  await wrapper.find('.m-menu-item').trigger('click')
  expect(wrapper.vm.selectedNames).toStrictEqual(['1-1'])

  await wrapper.find('.m-menu-item').trigger('click')
  expect(wrapper.vm.selectedNames).toStrictEqual(['1-1'])

  await wrapper.findAll('.m-menu-item').at(1).trigger('click')
  expect(wrapper.vm.selectedNames).toStrictEqual(['1-2'])

  await wrapper.setData({ multiple: true })
  await wrapper.findAll('.m-menu-item').at(1).trigger('click')
  expect(wrapper.vm.selectedNames).toStrictEqual([])

  await wrapper.find('.m-menu-item').trigger('click')
  await wrapper.findAll('.m-menu-item').at(1).trigger('click')
  expect(wrapper.vm.selectedNames).toStrictEqual(['1-1', '1-2'])

  await wrapper.find('.m-menu-item-group__trigger').trigger('click')
  expect(wrapper.vm.expandedNames).toStrictEqual([])

  wrapper.destroy()
})

test('test menu set model', async () => {
  const component = {
    components: {
      [Menu.name]: Menu,
      [MenuItemGroup.name]: MenuItemGroup,
      [MenuItem.name]: MenuItem,
    },
    data: () => ({
      selectedNames: [],
      expandedNames: [],
      multiple: false,
    }),
    template: `
      <m-menu :selected-names.sync="selectedNames" :expanded-names.sync="expandedNames" :multiple="multiple">
        <m-menu-item-group name="1" label="level 1" icon="error">
          <m-menu-item name="1-1" label="level 1-1" icon="error" />
          <m-menu-item name="1-2" label="level 1-2" icon="error" />
        </m-menu-item-group>
      </m-menu>
    `,
  }

  const wrapper = mount(component)

  await wrapper.setData({ expandedNames: ['1'] })
  expect(wrapper.find('.m-menu-item-group--trigger-expanded')).toBeTruthy()

  await wrapper.setData({ selectedNames: ['1-1'] })
  expect(wrapper.find('.m-menu-item--selected')).toBeTruthy()

  // should warn without multiple mode
  await wrapper.setData({ selectedNames: ['1-1', '1-2'] })

  wrapper.destroy()
})

test('test menu recursion', async () => {
  const component = {
    components: {
      [Menu.name]: Menu,
      [MenuItemGroup.name]: MenuItemGroup,
      [MenuItem.name]: MenuItem,
    },
    data: () => ({
      selectedNames: [],
      expandedNames: [],
    }),
    template: `
      <m-menu :selected-names.sync="selectedNames" :expanded-names.sync="expandedNames">
        <m-menu-item-group name="1" label="level 1">
          <m-menu-item name="1-1" label="level 1-1"/>

          <m-menu-item-group name="1-2" label="level 1-2">
            <m-menu-item name="1-2-1" label="level 1-2-1"/>

            <m-menu-item-group name="1-2-2" label="level 1-2-2">
              <m-menu-item name="1-2-2-1" label="level 1-2-2-1"/>
            </m-menu-item-group>
          </m-menu-item-group>
        </m-menu-item-group>
      </m-menu>
    `,
  }

  const wrapper = mount(component)

  await wrapper.find('.m-menu-item-group__trigger').trigger('click')
  expect(wrapper.vm.expandedNames).toStrictEqual(['1'])

  await wrapper.findAll('.m-menu-item-group__trigger').at(1).trigger('click')
  expect(wrapper.vm.expandedNames).toStrictEqual(['1', '1-2'])

  await wrapper.findAll('.m-menu-item-group__trigger').at(2).trigger('click')
  expect(wrapper.vm.expandedNames).toStrictEqual(['1', '1-2', '1-2-2'])

  await wrapper.find('.m-menu-item-group__trigger').trigger('click')
  expect(wrapper.vm.expandedNames).toStrictEqual([])

  wrapper.destroy()
})

test('test menu recursion in accordion mode', async () => {
  const { mockRestore } = mockDoubleRaf()
  const component = {
    components: {
      [Menu.name]: Menu,
      [MenuItemGroup.name]: MenuItemGroup,
      [MenuItem.name]: MenuItem,
    },
    data: () => ({
      selectedNames: [],
      expandedNames: [],
    }),
    template: `
      <m-menu :selected-names.sync="selectedNames" :expanded-names.sync="expandedNames" accordion>
        <m-menu-item-group name="1" label="level 1">
          <m-menu-item name="1-1" label="level 1-1"/>

          <m-menu-item-group name="1-2" label="level 1-2">
            <m-menu-item name="1-2-1" label="level 1-2-1"/>
          </m-menu-item-group>

          <m-menu-item-group name="1-3" label="level 1-3">
            <m-menu-item name="1-3-1" label="level 1-3-1"/>
          </m-menu-item-group>
        </m-menu-item-group>
      </m-menu>
    `,
  }

  const wrapper = mount(component)

  await wrapper.find('.m-menu-item-group__trigger').trigger('click')
  await delay(40)
  expect(wrapper.vm.expandedNames).toStrictEqual(['1'])

  await wrapper.findAll('.m-menu-item-group__trigger').at(1).trigger('click')
  expect(wrapper.vm.expandedNames).toStrictEqual(['1', '1-2'])

  await wrapper.findAll('.m-menu-item-group__trigger').at(2).trigger('click')
  expect(wrapper.vm.expandedNames).toStrictEqual(['1', '1-3'])

  await wrapper.find('.m-menu-item-group__trigger').trigger('click')
  expect(wrapper.vm.expandedNames).toStrictEqual([])

  mockRestore()
  wrapper.destroy()
})

test('test menu recursion for options', async () => {
  const component = {
    components: {
      [Menu.name]: Menu,
      [MenuItemGroup.name]: MenuItemGroup,
      [MenuItem.name]: MenuItem,
    },
    data: () => ({
      selectedNames: [],
      expandedNames: [],
      options: [
        {
          name: '1',
          label: 'level 1',
          children: [
            {
              name: '1-1',
              label: 'level 1-1',
            },
            {
              name: '1-2',
              label: 'level 1-2',
              children: [
                {
                  name: '1-2-1',
                  label: 'level 1-2-1',
                },
                {
                  name: '1-2-2',
                  label: 'level 1-2-2',
                  children: [
                    {
                      name: '1-2-2-1',
                      label: 'level 1-2-2-1',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
    template: '<m-menu :selected-names.sync="selectedNames" :expanded-names.sync="expandedNames" :options="options"/>',
  }

  const wrapper = mount(component)

  await wrapper.find('.m-menu-item-group__trigger').trigger('click')
  expect(wrapper.vm.expandedNames).toStrictEqual(['1'])

  await wrapper.findAll('.m-menu-item-group__trigger').at(1).trigger('click')
  expect(wrapper.vm.expandedNames).toStrictEqual(['1', '1-2'])

  await wrapper.findAll('.m-menu-item-group__trigger').at(2).trigger('click')
  expect(wrapper.vm.expandedNames).toStrictEqual(['1', '1-2', '1-2-2'])

  await wrapper.find('.m-menu-item-group__trigger').trigger('click')
  expect(wrapper.vm.expandedNames).toStrictEqual([])

  expect(wrapper.html()).toMatchSnapshot()

  wrapper.destroy()
})
