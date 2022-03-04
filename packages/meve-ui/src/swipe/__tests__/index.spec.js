import Swipe from '..'
import SwipeItem from '../../swipe-item'
import { mount } from '@vue/test-utils'
import { delay, mockOffset, triggerDrag } from '../../utils/jest'

mockOffset()

test('test swipe next & prev & to method', async () => {
  const handleChange = jest.fn()

  const component = {
    components: {
      [Swipe.name]: Swipe,
      [SwipeItem.name]: SwipeItem,
    },
    methods: {
      handleChange,
    },
    template: `
      <m-swipe ref="swipe" style="width: 100px; height: 100px" @change="handleChange">
        <m-swipe-item>1</m-swipe-item>
        <m-swipe-item>2</m-swipe-item>
        <m-swipe-item>3</m-swipe-item>
      </m-swipe>
  `,
  }
  const wrapper = mount(component)
  await delay(16)

  const {
    swipe: { prev, next, to },
  } = wrapper.vm.$refs

  to(0)
  expect(handleChange).toHaveBeenCalledTimes(0)
  await delay(100)
  expect(wrapper.html()).toMatchSnapshot()

  next()
  expect(handleChange).toHaveBeenLastCalledWith(1)
  await delay(100)
  expect(wrapper.html()).toMatchSnapshot()

  prev()
  expect(handleChange).toHaveBeenLastCalledWith(0)
  await delay(100)
  expect(wrapper.html()).toMatchSnapshot()

  to(2)
  expect(handleChange).toHaveBeenLastCalledWith(2)
  await delay(100)
  expect(wrapper.html()).toMatchSnapshot()

  next()
  expect(handleChange).toHaveBeenLastCalledWith(0)
  await delay(100)
  expect(wrapper.html()).toMatchSnapshot()

  prev()
  expect(handleChange).toHaveBeenLastCalledWith(2)
  await delay(100)
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.destroy()
})

test('test render initial index', async () => {
  const component = {
    components: {
      [Swipe.name]: Swipe,
      [SwipeItem.name]: SwipeItem,
    },
    template: `
      <m-swipe :initial-index="2" style="width: 100px; height: 100px">
        <m-swipe-item>1</m-swipe-item>
        <m-swipe-item>2</m-swipe-item>
        <m-swipe-item>3</m-swipe-item>
      </m-swipe>
  `,
  }

  const wrapper = mount(component)
  await delay(16)
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})

test('test touch with loop', async () => {
  const handleChange = jest.fn()

  const component = {
    components: {
      [Swipe.name]: Swipe,
      [SwipeItem.name]: SwipeItem,
    },
    methods: {
      handleChange,
    },
    template: `
      <m-swipe ref="swipe" style="width: 100px; height: 100px" @change="handleChange">
        <m-swipe-item>1</m-swipe-item>
        <m-swipe-item>2</m-swipe-item>
        <m-swipe-item>3</m-swipe-item>
      </m-swipe>
  `,
  }

  const wrapper = mount(component)
  await delay(16)

  const track = wrapper.find('.m-swipe__track')

  await triggerDrag(track, -100, 0)
  expect(handleChange).toHaveBeenLastCalledWith(1)
  await triggerDrag(track, -100, 0)
  expect(handleChange).toHaveBeenLastCalledWith(2)
  await triggerDrag(track, -100, 0)
  expect(handleChange).toHaveBeenLastCalledWith(0)
  await triggerDrag(track, 100, 0)
  expect(handleChange).toHaveBeenLastCalledWith(2)
  await triggerDrag(track, 100, 0)
  expect(handleChange).toHaveBeenLastCalledWith(1)
  await triggerDrag(track, 100, 0)
  expect(handleChange).toHaveBeenLastCalledWith(0)

  wrapper.destroy()
})

test('test touch without loop', async () => {
  const handleChange = jest.fn()

  const component = {
    components: {
      [Swipe.name]: Swipe,
      [SwipeItem.name]: SwipeItem,
    },
    methods: {
      handleChange,
    },
    template: `
      <m-swipe :loop="false" style="width: 100px; height: 100px" @change="handleChange">
        <m-swipe-item>1</m-swipe-item>
        <m-swipe-item>2</m-swipe-item>
        <m-swipe-item>3</m-swipe-item>
      </m-swipe>
  `,
  }

  const wrapper = mount(component)
  await delay(16)

  const track = wrapper.find('.m-swipe__track')

  await triggerDrag(track, 100, 0)
  expect(handleChange).toHaveBeenCalledTimes(0)
  await triggerDrag(track, -100, 0)
  expect(handleChange).toHaveBeenLastCalledWith(1)
  await triggerDrag(track, -100, 0)
  expect(handleChange).toHaveBeenLastCalledWith(2)
  await triggerDrag(track, -100, 0)
  expect(handleChange).toHaveBeenLastCalledWith(2)

  wrapper.destroy()
})

test('test touch with vertical', async () => {
  const handleChange = jest.fn()

  const component = {
    components: {
      [Swipe.name]: Swipe,
      [SwipeItem.name]: SwipeItem,
    },
    methods: {
      handleChange,
    },
    template: `
      <m-swipe vertical style="width: 100px; height: 100px" @change="handleChange">
        <m-swipe-item>1</m-swipe-item>
        <m-swipe-item>2</m-swipe-item>
        <m-swipe-item>3</m-swipe-item>
      </m-swipe>
  `,
  }

  const wrapper = mount(component)
  await delay(16)

  const track = wrapper.find('.m-swipe__track')

  await triggerDrag(track, 0, -100)
  expect(handleChange).toHaveBeenCalledTimes(1)
  await triggerDrag(track, 0, -100)
  expect(handleChange).toHaveBeenLastCalledWith(2)

  wrapper.destroy()
})

test('test touch forbid touchable', async () => {
  const handleChange = jest.fn()

  const component = {
    components: {
      [Swipe.name]: Swipe,
      [SwipeItem.name]: SwipeItem,
    },
    methods: {
      handleChange,
    },
    template: `
      <m-swipe :touchable="false" style="width: 100px; height: 100px" @change="handleChange">
        <m-swipe-item>1</m-swipe-item>
        <m-swipe-item>2</m-swipe-item>
        <m-swipe-item>3</m-swipe-item>
      </m-swipe>
  `,
  }

  const wrapper = mount(component)
  await delay(16)

  const track = wrapper.find('.m-swipe__track')

  await triggerDrag(track, -100, 0)
  expect(handleChange).toHaveBeenCalledTimes(0)

  wrapper.destroy()
})

test('test autoplay', async () => {
  const handleChange = jest.fn()

  const component = {
    components: {
      [Swipe.name]: Swipe,
      [SwipeItem.name]: SwipeItem,
    },
    methods: {
      handleChange,
    },
    template: `
      <m-swipe :autoplay="100" style="width: 100px; height: 100px" @change="handleChange">
        <m-swipe-item>1</m-swipe-item>
        <m-swipe-item>2</m-swipe-item>
        <m-swipe-item>3</m-swipe-item>
      </m-swipe>
  `,
  }

  const wrapper = mount(component)
  await delay(16)

  await delay(100)
  expect(handleChange).toHaveBeenLastCalledWith(1)
  await delay(100)
  expect(handleChange).toHaveBeenLastCalledWith(2)

  wrapper.destroy()
})
