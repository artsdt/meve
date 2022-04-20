import Table from '..'
import { mount } from '@vue/test-utils'
import { delay } from '../../utils/shared'

const data = [
  { id: 1, title: 'title: 1', text: 'hello meve!' },
  { id: 2, title: 'title: 2', text: 'hello meve!' },
  { id: 3, title: 'title: 3', text: 'hello meve!' },
]

test('test table data load', async () => {
  const wrapper = mount(Table, {
    listeners: {
      load() {
        return data
      },
    },
    propsData: {
      columns: [
        {
          key: 'id',
          title: 'ID',
        },
        {
          key: 'title',
          title: 'Title',
        },
      ],
    },
  })

  await delay(1)
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})

test('test table colspan', async () => {
  const wrapper = mount(Table, {
    listeners: {
      load() {
        return data
      },
    },
    propsData: {
      columns: [
        {
          key: 'id',
          title: 'ID',
          headColSpan: 2,
          bodySpan(rowIndex) {
            if (rowIndex === 0) {
              return { colSpan: 2 }
            }

            if (rowIndex === 1) {
              return { rowSpan: 2 }
            }
          },
        },
        {
          key: 'title',
          title: 'Title',
          headColSpan: 0,
          bodySpan(rowIndex) {
            if (rowIndex === 0) {
              return { colSpan: 0 }
            }

            if (rowIndex === 2) {
              return { rowSpan: 0 }
            }
          },
        },
      ],
    },
  })

  await delay(1)
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})

test('test table fixed table', async () => {
  const wrapper = mount(Table, {
    listeners: {
      load() {
        return data
      },
    },
    propsData: {
      columns: [
        {
          key: 'id',
          title: 'ID',
        },
        {
          key: 'title',
          title: 'Title',
          sticky: true,
          style: {
            right: '0px',
          },
        },
      ],
      scroller: { x: 800, y: 260 },
    },
  })

  await delay(1)
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})

test('test table size', async () => {
  const wrapper = mount(Table, {
    listeners: {
      load() {
        return data
      },
    },
    propsData: {
      columns: [
        {
          key: 'id',
          title: 'ID',
        },
        {
          key: 'title',
          title: 'Title',
        },
      ],
      size: 'small',
    },
  })

  await delay(1)
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})

test('test table sorter', async () => {
  const load = jest.fn(() => data)

  const wrapper = mount(Table, {
    listeners: {
      load,
    },
    propsData: {
      columns: [
        {
          key: 'id',
          title: 'ID',
          sorter: true,
        },
        {
          key: 'title',
          title: 'Title',
        },
      ],
    },
  })

  await delay(1)
  expect(wrapper.html()).toMatchSnapshot()
  expect(load).toHaveBeenCalledTimes(1)

  await wrapper.find('.m-table__sorter').trigger('click')
  expect(load).toHaveBeenCalledTimes(2)
  expect(load).toHaveBeenLastCalledWith({ sorters: { id: 'asc' } })

  await wrapper.find('.m-table__sorter').trigger('click')
  expect(load).toHaveBeenCalledTimes(3)
  expect(load).toHaveBeenLastCalledWith({ sorters: { id: 'desc' } })
  wrapper.destroy()
})

test('test table selection', async () => {
  const wrapper = mount(Table, {
    listeners: {
      load: () => data,
    },
    propsData: {
      selectedKeys: [],
      columns: [
        {
          selection: true,
        },
        {
          key: 'id',
          title: 'ID',
        },
        {
          key: 'title',
          title: 'Title',
        },
      ],
    },
  })

  await delay(1)
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.find('.m-checkbox__input').trigger('click')
  expect(wrapper.emitted()['update:selected-keys'][0][0]).toStrictEqual([1, 2, 3])

  await wrapper.findAll('.m-checkbox__input').at(1).trigger('click')
  expect(wrapper.emitted()['update:selected-keys'][1][0]).toStrictEqual([1])

  wrapper.destroy()
})

test('test table selection tree', async () => {
  const wrapper = mount(Table, {
    listeners: {
      load: () => [
        {
          id: 1,
          title: 'title: 1',
          text: 'hello meve!',
          children: [
            {
              id: 3,
              title: 'title: 3',
              text: 'hello meve!',
            },
            {
              id: 4,
              title: 'title: 4',
              text: 'hello meve!',
            },
          ],
        },
        { id: 2, title: 'title: 2', text: 'hello meve!' },
      ],
    },
    propsData: {
      selectedKeys: [],
      columns: [
        {
          selection: true,
        },
        {
          key: 'id',
          title: 'ID',
        },
        {
          key: 'title',
          title: 'Title',
        },
      ],
    },
  })

  await delay(1)
  await wrapper.find('.m-table__expanded-icon').trigger('click')
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.find('.m-checkbox__input').trigger('click')
  expect(wrapper.emitted()['update:selected-keys'][0][0]).toStrictEqual([1, 3, 4, 2])

  await wrapper.findAll('.m-checkbox__input').at(2).trigger('click')
  expect(wrapper.emitted()['update:selected-keys'][1][0]).toStrictEqual([3, 1])

  await wrapper.setProps({ selectedKeys: [1, 2, 3] })
  expect(wrapper.html()).toMatchSnapshot()
  await wrapper.find('.m-checkbox__input').trigger('click')
  expect(wrapper.emitted()['update:selected-keys'][2][0]).toStrictEqual([])

  await wrapper.findAll('.m-checkbox__input').at(2).trigger('click')
  expect(wrapper.emitted()['update:selected-keys'][3][0]).toStrictEqual([2])

  wrapper.destroy()
})

test('test table slots', async () => {
  const wrapper = mount(Table, {
    listeners: {
      load() {
        return data
      },
    },
    propsData: {
      columns: [
        {
          key: 'id',
          title: 'ID',
        },
        {
          key: 'title',
          title: 'Title',
        },
      ],
    },
    scopedSlots: {
      title: '<div>title slot</div>',
      footer: '<div>footer slot</div>',
    },
  })

  await delay(1)
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})

test('test table load data empty', async () => {
  const wrapper = mount(Table, {
    listeners: {
      load() {
        return []
      },
    },
    propsData: {
      columns: [
        {
          key: 'id',
          title: 'ID',
        },
        {
          key: 'title',
          title: 'Title',
        },
      ],
    },
  })

  await delay(1)
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})

test('test table get data', async () => {
  const wrapper = mount(Table, {
    listeners: {
      load() {
        return data
      },
    },
    propsData: {
      columns: [
        {
          key: 'id',
          title: 'ID',
        },
        {
          key: 'title',
          title: 'Title',
        },
      ],
    },
  })

  await delay(1)
  expect(wrapper.vm.getData()).toStrictEqual(data)

  wrapper.destroy()
})
