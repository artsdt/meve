import Button from '..'
import { mount } from '@vue/test-utils'
import { delay, trigger } from '../../utils/jest'

test('test button type', () => {
  const wrapper = mount({
    components: {
      [Button.name]: Button,
    },
    template: `
      <div>
        <m-button>hello</m-button>
        <m-button type="primary">hello</m-button>
        <m-button type="warning">hello</m-button>
        <m-button type="info">hello</m-button>
        <m-button type="success">hello</m-button>
        <m-button type="error">hello</m-button>
      </div>
    `,
  })

  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})

test('test button size', () => {
  const wrapper = mount({
    components: {
      [Button.name]: Button,
    },
    template: `
      <div>
        <m-button size="mini">hello</m-button>
        <m-button size="small">hello</m-button>
        <m-button>hello</m-button>
        <m-button size="large">hello</m-button>
      </div>
    `,
  })

  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})

test('test button trigger click and touchstart', async () => {
  const onClick = jest.fn()
  const onTouchstart = jest.fn()

  const wrapper = mount(Button, {
    listeners: {
      click: onClick,
      touchstart: onTouchstart,
    },
  })
  await trigger(wrapper, 'click')
  await trigger(wrapper, 'touchstart')
  expect(onClick).toHaveBeenCalledTimes(1)
  expect(onTouchstart).toHaveBeenCalledTimes(1)
  wrapper.destroy()
})

test('test button loading', async () => {
  const wrapper = mount(Button, {
    propsData: {
      loading: true,
      ripple: false,
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
  wrapper.destroy()
})

test('test button disabled', async () => {
  const wrapper = mount(Button, {
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
  wrapper.destroy()
})

test('test button round', async () => {
  const wrapper = mount(Button, {
    propsData: {
      round: true,
    },
    scopeSlots: {
      default: () => 'hello',
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})

test('test button block', async () => {
  const wrapper = mount(Button, {
    propsData: {
      block: true,
    },
    scopeSlots: {
      default: () => 'hello',
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})

test('test button text and outline', async () => {
  const wrapper = mount(Button, {
    propsData: {
      text: true,
      outline: true,
    },
    scopeSlots: {
      default: () => 'hello',
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})

test('test button loading size', async () => {
  const wrapper = mount(Button, {
    propsData: {
      loading: true,
      loadingSize: '100px',
    },
    scopeSlots: {
      default: () => 'hello',
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})

test('test button auto-loading', async () => {
  const onClick = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 100)
    })
  }

  const onTouchstart = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 100)
    })
  }

  const wrapper = mount(Button, {
    listeners: {
      click: onClick,
      touchstart: onTouchstart,
    },
    propsData: {
      autoLoading: true,
      ripple: false,
    },
  })

  await trigger(wrapper, 'click')
  expect(wrapper.find('.m-loading').exists()).toBeTruthy()
  await delay(100)
  expect(wrapper.find('.m-loading').exists()).toBeFalsy()

  await trigger(wrapper, 'touchstart')
  expect(wrapper.find('.m-loading').exists()).toBeTruthy()
  await delay(100)
  expect(wrapper.find('.m-loading').exists()).toBeFalsy()

  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})

test('test button text disabled', async () => {
  const wrapper = mount(Button, {
    propsData: {
      text: true,
      disabled: true,
    },
    scopeSlots: {
      default: () => 'hello',
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
})
