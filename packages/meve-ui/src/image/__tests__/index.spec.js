import Image from '..'
import { mount } from '@vue/test-utils'
import { delay, trigger, triggerDrag } from '../../utils/jest'

const SRC = 'https://varlet.gitee.io/varlet-ui/cat.png'

test('test image src', () => {
  const wrapper = mount(Image, {
    propsData: {
      src: SRC,
    },
  })

  expect(wrapper.find('.m-image__image').element.src).toEqual(SRC)
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})

test('test image onLoad & onError', () => {
  const wrapper = mount(Image)

  const img = wrapper.find('.m-image__image')

  img.trigger('load')
  img.trigger('error')
  expect(wrapper.emitted().load.length).toBe(1)
  expect(wrapper.emitted().error.length).toBe(1)
  wrapper.destroy()
})

test('test image onLoad & onError in lazy mode', () => {
  const wrapper = mount(Image, {
    propsData: {
      lazy: true,
    },
  })

  const img = wrapper.find('.m-image__image')

  img.element._lazy.state = 'success'
  img.trigger('load')
  expect(wrapper.emitted().load.length).toBe(1)

  img.element._lazy.state = 'error'
  img.trigger('load')
  expect(wrapper.emitted().error.length).toBe(1)

  wrapper.destroy()
})

test('test image styles', () => {
  const wrapper = mount(Image, {
    propsData: {
      src: SRC,
      ripple: true,
      block: false,
      alt: 'alt',
      width: '100px',
      height: '100px',
      radius: '10px',
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})

test('test image fit', async () => {
  const wrapper = mount(Image)

  await wrapper.setProps({ fit: 'fill' })
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.setProps({ fit: 'cover' })
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.setProps({ fit: 'none' })
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.setProps({ fit: 'scale-down' })
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.setProps({ fit: 'contain' })
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})

test('test image preview', async () => {
  const wrapper = mount(Image, {
    propsData: {
      src: SRC,
    },
  })

  await wrapper.find('.m-image__image').trigger('click')
  await delay(100)
  expect(wrapper.find('.m-popup').isVisible()).toBeTruthy()
  expect(wrapper.html()).toMatchSnapshot()

  const container = wrapper.find('.m-image__preview-container')
  const img = wrapper.find('.m-image__preview-image')

  await triggerDrag(container, 10, 10)
  expect(container.element.style.transform).toBe('scale(0.5) translate(20px, 20px)')

  await wrapper.find('.m-image__rotate-left').trigger('click')
  expect(img.element.style.transform).toBe('rotate(-90deg)')

  await wrapper.find('.m-image__rotate-right').trigger('click')
  expect(img.element.style.transform).toBe('rotate(0deg)')

  await wrapper.find('.m-image__zoom-in').trigger('click')
  expect(container.element.style.transform).toBe('scale(1) translate(20px, 20px)')

  await wrapper.find('.m-image__zoom-out').trigger('click')
  expect(container.element.style.transform).toBe('scale(0.5) translate(20px, 20px)')

  await wrapper.find('.m-image__zoom-out').trigger('click')
  expect(container.element.style.transform).toBe('scale(0.5) translate(20px, 20px)')

  await wrapper.find('.m-image__reset-all').trigger('click')
  expect(container.element.style.transform).toBe('scale(0.5) translate(0px, 0px)')

  await wrapper.find('.m-image__close-preview').trigger('click')
  expect(wrapper.find('.m-popup').isVisible()).toBeFalsy()
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.destroy()
})

test('test image close preview by keyboard', async () => {
  const wrapper = mount(Image, {
    propsData: {
      src: SRC,
    },
  })

  await wrapper.find('.m-image__image').trigger('click')
  await delay(100)

  await trigger(window, 'keydown', 0, 0, 0, 0, 0, 0, { code: 'Escape' })
  expect(wrapper.find('.m-popup').isVisible()).toBeFalsy()

  wrapper.destroy()
})

test('test image preview disabled', async () => {
  const wrapper = mount(Image, {
    propsData: {
      src: SRC,
      previewDisabled: true,
    },
  })

  await wrapper.find('.m-image__image').trigger('click')
  await delay(100)
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.destroy()
})
