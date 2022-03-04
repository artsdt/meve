import List from '..'
import { mount } from '@vue/test-utils'
import { delay } from '../../utils/jest'

test('test list immediate check', async () => {
  const wrapper = mount(List)

  const mockGetBoundingClientRect = jest.spyOn(wrapper.element, 'getBoundingClientRect').mockReturnValue({ bottom: 50 })
  await delay(16)

  expect(wrapper.emitted().load).toBeTruthy()
  expect(wrapper.emitted()['update:loading']).toBeTruthy()
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
  mockGetBoundingClientRect.mockRestore()
})

test('test click error text reload', async () => {
  const load = jest.fn()

  const component = {
    components: {
      [List.name]: List,
    },

    data: () => ({
      loading: false,
      error: true,
      loadingText: '正在加载',
      errorText: '点击重试',
    }),

    methods: { load },

    template: `
      <m-list
        :loading.sync="loading"
        :error.sync="error"
        :error-text="errorText"
        :loading-text="loadingText"
        @load="load"
      />
    `,
  }

  const wrapper = mount(component)

  const mockGetBoundingClientRect = jest.spyOn(wrapper.element, 'getBoundingClientRect').mockReturnValue({ bottom: 50 })

  await delay(16)

  expect(load).toHaveBeenCalledTimes(0)
  expect(wrapper.find('.m-list__error').text()).toBe('点击重试')
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.find('.m-list__error').trigger('click')
  expect(wrapper.vm.loading).toBe(true)
  expect(wrapper.vm.error).toBe(false)
  expect(load).toHaveBeenCalledTimes(1)
  expect(wrapper.find('.m-list__loading-text').text()).toBe('正在加载')
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
  mockGetBoundingClientRect.mockRestore()
})

test('test list finished', async () => {
  const wrapper = mount(List, {
    propsData: {
      finished: true,
      finishedText: '暂无更多',
    },
  })

  await delay(16)

  expect(wrapper.find('.m-list__finished').text()).toBe('暂无更多')
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})

test('test list slots', async () => {
  const component = {
    components: {
      [List.name]: List,
    },

    data: () => ({
      loading: true,
      error: false,
      finished: false,
    }),

    template: `
      <m-list
        :loading.sync="loading"
        :error.sync="error"
        :finished="finished"
      >
        <template #loading>
          <div>custom loading</div>
        </template>

        <template #error>
          <div>custom error</div>
        </template>

        <template #finished>
          <div>custom finished</div>
        </template>
      </m-list>
    `,
  }

  const wrapper = mount(component)
  await delay(16)
  expect(wrapper.html()).toMatchSnapshot()
  await wrapper.setData({ loading: false, error: true })
  expect(wrapper.html()).toMatchSnapshot()
  await wrapper.setData({ error: false, finished: true })
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.destroy()
})
