import Tabs from '../index'
import Tab from '../../tab'
import TabsItems from '../../tabs-items'
import TabItem from '../../tab-item'
import { mount } from '@vue/test-utils'
import { delay } from '../../utils/jest'

let originScrollTo

beforeEach(() => {
  originScrollTo = Element.prototype.scrollTo
  Element.prototype.scrollTo = jest.fn()
})

afterEach(() => {
  Element.prototype.scrollTo = originScrollTo
})

const components = {
  [Tabs.name]: Tabs,
  [Tab.name]: Tab,
  [TabsItems.name]: TabsItems,
  [TabItem.name]: TabItem,
}

test('test tabs active', async () => {
  const component = {
    components,
    data: () => ({
      value: 2,
    }),
    template: `
    <div>
      <m-tabs v-model="value">
        <m-tab>选项1</m-tab>
        <m-tab>选项2</m-tab>
        <m-tab>选项3</m-tab>
      </m-tabs>

      <m-tabs-items v-model="value">
        <m-tab-item>视图1</m-tab-item>
        <m-tab-item>视图2</m-tab-item>
        <m-tab-item>视图3</m-tab-item>
      </m-tabs-items>
    </div>
  `,
  }

  const wrapper = mount(component)
  await delay(50)
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})

test('test tabs match index', async () => {
  const handleClick = jest.fn()
  const handleChange = jest.fn()

  const component = {
    components,
    data: () => ({
      value: 2,
    }),
    methods: {
      handleClick,
      handleChange,
    },
    template: `
    <div>
      <m-tabs v-model="value" @click="handleClick" @change="handleChange">
        <m-tab>选项1</m-tab>
        <m-tab>选项2</m-tab>
        <m-tab>选项3</m-tab>
        <m-tab>选项4</m-tab>
        <m-tab>选项5</m-tab>
      </m-tabs>

      <m-tabs-items v-model="value">
        <m-tab-item>视图1</m-tab-item>
        <m-tab-item>视图2</m-tab-item>
        <m-tab-item>视图3</m-tab-item>
        <m-tab-item>视图4</m-tab-item>
        <m-tab-item>视图5</m-tab-item>
      </m-tabs-items>
    </div>
  `,
  }

  const wrapper = mount(component)
  await delay(50)

  await wrapper.find('.m-tab').trigger('click')
  expect(handleClick).toHaveBeenLastCalledWith(0)
  expect(handleChange).toHaveBeenLastCalledWith(0)
  wrapper.destroy()
})

test('test tabs match name', async () => {
  const handleClick = jest.fn()
  const handleChange = jest.fn()

  const component = {
    components,
    data: () => ({
      value: 2,
    }),
    methods: {
      handleClick,
      handleChange,
    },
    template: `
    <div>
      <m-tabs
        v-model="value"
        @click="handleClick"
        @change="handleChange"
      >
        <m-tab name="选项1">选项1</m-tab>
        <m-tab name="选项2">选项2</m-tab>
        <m-tab name="选项3">选项3</m-tab>
      </m-tabs>

      <m-tabs-items v-model="value">
        <m-tab-item>视图1</m-tab-item>
        <m-tab-item>视图2</m-tab-item>
        <m-tab-item>视图3</m-tab-item>
      </m-tabs-items>
    </div>
  `,
  }

  const wrapper = mount(component)
  await delay(50)

  await wrapper.find('.m-tab').trigger('click')
  expect(handleClick).toHaveBeenLastCalledWith('选项1')
  expect(handleChange).toHaveBeenLastCalledWith('选项1')
  wrapper.destroy()
})

test('test tabs match boundary', async () => {
  const handleChange = jest.fn()

  const component = {
    components,
    data: () => ({
      value: 2,
    }),
    methods: {
      handleChange,
    },
    template: `
    <div>
      <m-tabs
        v-model="value"
        @change="handleChange"
      >
        <m-tab name="选项1">选项1</m-tab>
        <m-tab name="选项2">选项2</m-tab>
        <m-tab name="选项3">选项3</m-tab>
      </m-tabs>

      <m-tabs-items v-model="value">
        <m-tab-item>视图1</m-tab-item>
        <m-tab-item>视图2</m-tab-item>
        <m-tab-item>视图3</m-tab-item>
      </m-tabs-items>
    </div>
  `,
  }

  const wrapper = mount(component)
  await delay(50)
  await wrapper.setData({ value: -1 })
  expect(handleChange).toHaveBeenCalledTimes(0)
  expect(wrapper.vm.value).toBe(0)
  wrapper.destroy()
})

test('test tabs disabled', async () => {
  const handleChange = jest.fn()
  const handleClick = jest.fn()

  const component = {
    components,
    data: () => ({
      value: 2,
    }),
    methods: {
      handleChange,
      handleClick,
    },
    template: `
    <div>
      <m-tabs
        v-model="value"
        @change="handleChange"
        @click="handleClick"
      >
        <m-tab name="选项1" disabled>选项1</m-tab>
        <m-tab name="选项2">选项2</m-tab>
        <m-tab name="选项3">选项3</m-tab>
      </m-tabs>

      <m-tabs-items v-model="value">
        <m-tab-item>视图1</m-tab-item>
        <m-tab-item>视图2</m-tab-item>
        <m-tab-item>视图3</m-tab-item>
      </m-tabs-items>
    </div>
  `,
  }

  const wrapper = mount(component)
  await delay(50)
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.find('.m-tab').trigger('click')
  expect(handleClick).toHaveBeenCalledTimes(0)
  expect(handleChange).toHaveBeenCalledTimes(0)
  wrapper.destroy()
})

test('test tabs relation tabsItems', async () => {
  const component = {
    components,
    data: () => ({
      value: 2,
    }),
    template: `
    <div>
      <m-tabs v-model="value">
        <m-tab name="选项1">选项1</m-tab>
        <m-tab name="选项2">选项2</m-tab>
        <m-tab name="选项3">选项3</m-tab>
      </m-tabs>

      <m-tabs-items v-model="value">
        <m-tab-item>视图1</m-tab-item>
        <m-tab-item>视图2</m-tab-item>
        <m-tab-item>视图3</m-tab-item>
      </m-tabs-items>
    </div>
  `,
  }

  const wrapper = mount(component)
  await delay(50)
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.setData({ value: 1 })
  await delay(50)
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})

test('test tabs sticky mode', async () => {
  const component = {
    components,
    data: () => ({
      value: 2,
    }),
    template: `
    <div>
      <m-tabs sticky v-model="value">
        <m-tab name="选项1">选项1</m-tab>
        <m-tab name="选项2">选项2</m-tab>
        <m-tab name="选项3">选项3</m-tab>
      </m-tabs>

      <m-tabs-items v-model="value">
        <m-tab-item>视图1</m-tab-item>
        <m-tab-item>视图2</m-tab-item>
        <m-tab-item>视图3</m-tab-item>
      </m-tabs-items>
    </div>
  `,
  }

  const wrapper = mount(component)
  await delay(50)
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})
