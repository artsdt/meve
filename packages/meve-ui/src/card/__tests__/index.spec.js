import Card from '..'
import { mount } from '@vue/test-utils'

test('test card pass description', () => {
  const wrapper = mount(Card, {
    propsData: {
      description: 'description',
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
})

test('test card pass string prop', () => {
  const wrapper = mount(Card, {
    propsData: {
      title: 'title',
      subtitle: 'subtitle',
      description: 'description',
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
})

test('test card slots', () => {
  const wrapper = mount(Card, {
    propsData: {
      title: 'title',
      subtitle: 'subtitle',
      description: 'description',
    },
    scopedSlots: {
      title: '<div>title</div>',
      subtitle: '<div>subtitle</div>',
      default: '<div>description</div>',
      extra: '<div>extra</div>',
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
})
