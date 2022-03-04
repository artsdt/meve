import Icon from '..'
import { mount } from '@vue/test-utils'

test('test icon size', () => {
  const wrapper = mount(Icon, {
    propsData: {
      name: 'checkbox-marked-circle',
      size: 30,
    },
  })

  expect(wrapper.html()).toMatchSnapshot()

  wrapper.destroy()
})

test('test icon color', () => {
  const wrapper = mount(Icon, {
    propsData: {
      name: 'checkbox-marked-circle',
      color: 'red',
    },
  })

  expect(wrapper.html()).toMatchSnapshot()

  wrapper.destroy()
})

test('test icon on click', async () => {
  const handleClick = jest.fn()

  const wrapper = mount(Icon, {
    propsData: {
      name: 'checkbox-marked-circle',
    },
    context: {
      on: {
        click: handleClick,
      },
    },
  })

  await wrapper.trigger('click')
  expect(handleClick).toHaveBeenCalledTimes(1)

  wrapper.destroy()
})
