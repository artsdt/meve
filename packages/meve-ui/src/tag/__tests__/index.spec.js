import Tag from '..'
import { mount } from '@vue/test-utils'

test('test tag type', () => {
  const wrapper = mount({
    components: {
      [Tag.name]: Tag,
    },
    template: `
      <div>
        <m-tag>hello</m-tag>
        <m-tag type="primary">hello</m-tag>
        <m-tag type="warning">hello</m-tag>
        <m-tag type="info">hello</m-tag>
        <m-tag type="success">hello</m-tag>
        <m-tag type="error">hello</m-tag>
      </div>
    `,
  })

  expect(wrapper.html()).toMatchSnapshot()
})

test('test tag size', () => {
  const wrapper = mount({
    components: {
      [Tag.name]: Tag,
    },
    template: `
      <div>
        <m-tag size="mini">hello</m-tag>
        <m-tag size="small">hello</m-tag>
        <m-tag>hello</m-tag>
        <m-tag size="large">hello</m-tag>
      </div>
    `,
  })

  expect(wrapper.html()).toMatchSnapshot()
})

test('test tag trigger click and touchstart', async () => {
  const wrapper = mount(Tag)
  await wrapper.trigger('click')
  await wrapper.trigger('touchstart')
  expect(wrapper.emitted().click).toBeTruthy()
  expect(wrapper.emitted().touchstart).toBeTruthy()
})

test('test tag disabled', async () => {
  const wrapper = mount(Tag, {
    propsData: {
      disabled: true,
    },
    scopeSlots: {
      default: () => 'hello',
    },
  })
  await wrapper.trigger('click')
  await wrapper.trigger('touchstart')
  expect(wrapper.emitted().click).toBeFalsy()
  expect(wrapper.emitted().touchstart).toBeFalsy()
  expect(wrapper.html()).toMatchSnapshot()
})

test('test tag block', async () => {
  const wrapper = mount(Tag, {
    propsData: {
      block: true,
    },
    scopeSlots: {
      default: () => 'hello',
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
})

test('test tag text and outline', async () => {
  const wrapper = mount(Tag, {
    propsData: {
      text: true,
      outline: true,
    },
    scopeSlots: {
      default: () => 'hello',
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
})

test('test tag closeable', async () => {
  const wrapper = mount(Tag, {
    propsData: {
      closeable: true,
    },
    scopeSlots: {
      default: () => 'hello',
    },
  })

  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.find('.m-button').trigger('click')
  expect(wrapper.emitted().close).toBeTruthy()
})

test('test tag closeable with disabled', async () => {
  const wrapper = mount(Tag, {
    propsData: {
      disabled: true,
      closeable: true,
    },
    scopeSlots: {
      default: () => 'hello',
    },
  })

  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.find('.m-button').trigger('click')
  expect(wrapper.emitted().click).toBeFalsy()
  expect(wrapper.emitted().close).toBeFalsy()
})

test('test tag closeable with readonly', async () => {
  const wrapper = mount(Tag, {
    propsData: {
      readonly: true,
      closeable: true,
    },
    scopeSlots: {
      default: () => 'hello',
    },
  })

  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.find('.m-button').trigger('click')
  expect(wrapper.emitted().click).toBeTruthy()
  expect(wrapper.emitted().close).toBeFalsy()
})
