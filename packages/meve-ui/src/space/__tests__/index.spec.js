import Space from '..'
import { mount } from '@vue/test-utils'

test('test space basic use', () => {
  const wrapper = mount({
    components: {
      [Space.name]: Space,
    },
    template: '<m-space>' + '<span>hello</span>' + '<span>hello</span>' + '<span>hello</span>' + '</m-space>',
  })

  expect(wrapper.html()).toMatchSnapshot()

  wrapper.destroy()
})

test('test internal size ', () => {
  const wrapper = mount({
    components: {
      [Space.name]: Space,
    },
    template:
      '<m-space size="large">' + '<span>hello</span>' + '<span>hello</span>' + '<span>hello</span>' + '</m-space>',
  })

  expect(wrapper.html()).toMatchSnapshot()

  wrapper.destroy()
})

test('test custom size ', () => {
  const wrapper = mount({
    components: {
      [Space.name]: Space,
    },
    template:
      '<m-space :size="[50, 50]">' + '<span>hello</span>' + '<span>hello</span>' + '<span>hello</span>' + '</m-space>',
  })

  expect(wrapper.html()).toMatchSnapshot()

  wrapper.destroy()
})

test('test space align center', () => {
  const wrapper = mount({
    components: {
      [Space.name]: Space,
    },
    template:
      '<m-space align="center">' + '<span>hello</span>' + '<span>hello</span>' + '<span>hello</span>' + '</m-space>',
  })

  expect(wrapper.html()).toMatchSnapshot()

  wrapper.destroy()
})

test('test space justify center', () => {
  const wrapper = mount({
    components: {
      [Space.name]: Space,
    },
    template:
      '<m-space justify="center">' + '<span>hello</span>' + '<span>hello</span>' + '<span>hello</span>' + '</m-space>',
  })

  expect(wrapper.html()).toMatchSnapshot()

  wrapper.destroy()
})

test('test space justify around', () => {
  const wrapper = mount({
    components: {
      [Space.name]: Space,
    },
    template:
      '<m-space justify="space-around">' +
      '<span>hello</span>' +
      '<span>hello</span>' +
      '<span>hello</span>' +
      '</m-space>',
  })

  expect(wrapper.html()).toMatchSnapshot()

  wrapper.destroy()
})

test('test space justify between', () => {
  const wrapper = mount({
    components: {
      [Space.name]: Space,
    },
    template:
      '<m-space justify="space-between">' +
      '<span>hello</span>' +
      '<span>hello</span>' +
      '<span>hello</span>' +
      '</m-space>',
  })

  expect(wrapper.html()).toMatchSnapshot()

  wrapper.destroy()
})

test('test space wrap', () => {
  const wrapper = mount({
    components: {
      [Space.name]: Space,
    },
    template:
      '<m-space :wrap="false">' + '<span>hello</span>' + '<span>hello</span>' + '<span>hello</span>' + '</m-space>',
  })

  expect(wrapper.html()).toMatchSnapshot()

  wrapper.destroy()
})

test('test space direction', () => {
  const wrapper = mount({
    components: {
      [Space.name]: Space,
    },
    template:
      '<m-space direction="column">' +
      '<span>hello</span>' +
      '<span>hello</span>' +
      '<span>hello</span>' +
      '</m-space>',
  })

  expect(wrapper.html()).toMatchSnapshot()

  wrapper.destroy()
})

test('test space inline', () => {
  const wrapper = mount({
    components: {
      [Space.name]: Space,
    },
    template: '<m-space inline>' + '<span>hello</span>' + '<span>hello</span>' + '<span>hello</span>' + '</m-space>',
  })

  expect(wrapper.html()).toMatchSnapshot()

  wrapper.destroy()
})
