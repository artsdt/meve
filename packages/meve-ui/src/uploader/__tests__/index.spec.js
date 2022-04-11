import Uploader from '..'
import { mount } from '@vue/test-utils'
import { delay, mockFileReader, mockStubs } from '../../utils/jest'

const createEvent = (filename) => {
  return {
    target: {
      files: [new File([], filename)],
    },
  }
}

test('test uploader onAfterRead', async () => {
  const wrapper = mount(Uploader)

  await wrapper.vm.handleChange(createEvent('cat.png'))
  expect(wrapper.emitted()['after-read'].length).toBe(1)

  wrapper.destroy()
})

test('test uploader onBeforeRead', async () => {
  const wrapper = mount(Uploader, {
    listeners: {
      'before-read': (file) => file.name.endsWith('jpg'),
    },
  })

  await wrapper.vm.handleChange(createEvent('cat.png'))
  expect(wrapper.emitted()['after-read']).toBeFalsy()

  await wrapper.vm.handleChange(createEvent('cat.jpg'))
  expect(wrapper.emitted()['after-read'].length).toBe(1)

  wrapper.destroy()
})

test('test uploader onOversize', async () => {
  const wrapper = mount(Uploader, {
    propsData: {
      maxsize: -1,
    },
  })

  await wrapper.vm.handleChange(createEvent('cat.png'))
  expect(wrapper.emitted()['oversize'].length).toBe(1)

  wrapper.destroy()
})

test('test uploader onRemove', async () => {
  const { mockRestore } = mockFileReader('data:image/png;base64,')

  const wrapper = mount(Uploader, {
    propsData: {
      value: [],
    },
    listeners: {
      input(value) {
        wrapper.setProps({ value })
      },
    },
  })

  await wrapper.vm.handleChange(createEvent('cat.png'))
  expect(wrapper.emitted().input.length).toBe(1)

  await wrapper.find('.m-uploader__remove-button').trigger('click')
  expect(wrapper.emitted().input.length).toBe(2)
  expect(wrapper.emitted().remove.length).toBe(1)
  expect(wrapper.vm.value).toStrictEqual([])

  wrapper.destroy()
  mockRestore()
})

test('test uploader onBeforeRemove', async () => {
  const { mockRestore } = mockFileReader('data:image/png;base64,')

  const wrapper = mount(Uploader, {
    propsData: {
      value: [],
    },
    listeners: {
      input(value) {
        wrapper.setProps({ value })
      },
      'before-remove'() {
        return false
      },
    },
  })

  await wrapper.vm.handleChange(createEvent('cat.png'))
  expect(wrapper.emitted().input.length).toBe(1)

  await wrapper.find('.m-uploader__remove-button').trigger('click')
  expect(wrapper.emitted().input.length).toBe(1)
  expect(wrapper.emitted().remove).toBeFalsy()

  wrapper.destroy()
  mockRestore()
})

test('test uploader file cover', async () => {
  const wrapper = mount(Uploader, {
    propsData: {
      value: [{ name: 'image', cover: 'https://a.b.c/cat.jpg' }],
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})

test('test uploader validation', async () => {
  const { mockRestore } = mockStubs()

  const wrapper = mount(Uploader, {
    propsData: {
      value: [],
      rules: [(v) => v.length >= 1 || '您至少上传一个'],
    },
  })

  wrapper.vm.validate()
  await delay(100)
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.vm.resetValidation()
  await delay(100)
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.vm.reset()
  expect(wrapper.emitted().input.length).toBe(1)
  expect(wrapper.emitted().input[0][0]).toStrictEqual([])
  mockRestore()
})

test('test uploader file utils', async () => {
  const wrapper = mount(Uploader, {
    propsData: {
      value: [
        { name: 'a', state: 'success' },
        { name: 'b', state: 'loading' },
        { name: 'c', state: 'error' },
      ],
    },
  })

  const { getSuccess, getLoading, getError } = wrapper.vm

  expect(getSuccess()[0].name).toBe('a')
  expect(getLoading()[0].name).toBe('b')
  expect(getError()[0].name).toBe('c')

  wrapper.destroy()
})

test('test uploader length over maxlength in multiple mode', async () => {
  const { mockRestore } = mockFileReader('data:image/png;base64,')

  const wrapper = mount(Uploader, {
    propsData: {
      maxlength: 1,
      value: [],
    },
  })

  const event = {
    target: {
      files: [new File([], 'cat.png'), new File([], 'dog.png')],
    },
  }
  await wrapper.vm.handleChange(event)
  expect(wrapper.emitted().input[0][0].length).toBe(1)

  wrapper.destroy()
  mockRestore()
})

test('test uploader hide list', async () => {
  const wrapper = mount(Uploader, {
    propsData: {
      value: [{ name: 'a' }],
      hideList: true,
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})

test('test uploader disabled', async () => {
  const wrapper = mount(Uploader, {
    propsData: {
      value: [{ name: 'a' }],
      disabled: true,
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})

test('test uploader readonly', async () => {
  const wrapper = mount(Uploader, {
    propsData: {
      value: [{ name: 'a' }],
      readonly: true,
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})
