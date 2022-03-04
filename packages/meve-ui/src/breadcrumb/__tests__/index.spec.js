import Breadcrumb from '..'
import BreadcrumbItem from '../../breadcrumb-item'
import { mount } from '@vue/test-utils'
import { delay } from '../../utils/jest'

test('test breadcrumb basic usage', async () => {
  const wrapper = mount({
    components: {
      [Breadcrumb.name]: Breadcrumb,
      [BreadcrumbItem.name]: BreadcrumbItem,
    },
    template: `
      <m-breadcrumb>
        <m-breadcrumb-item>Page 1</m-breadcrumb-item>
        <m-breadcrumb-item>Page 2</m-breadcrumb-item>
        <m-breadcrumb-item>Page 3</m-breadcrumb-item>
      </m-breadcrumb>
    `,
  })

  await delay(20)
  expect(wrapper.html()).toMatchSnapshot()
})

test('test breadcrumb item separator', async () => {
  const wrapper = mount({
    components: {
      [Breadcrumb.name]: Breadcrumb,
      [BreadcrumbItem.name]: BreadcrumbItem,
    },
    template: `
      <m-breadcrumb>
        <m-breadcrumb-item separator="|">Page 1</m-breadcrumb-item>
        <m-breadcrumb-item separator="~">Page 2</m-breadcrumb-item>
        <m-breadcrumb-item>Page 3</m-breadcrumb-item>
      </m-breadcrumb>
    `,
  })

  await delay(20)
  expect(wrapper.html()).toMatchSnapshot()
})

test('test breadcrumb item slots', async () => {
  const wrapper = mount({
    components: {
      [Breadcrumb.name]: Breadcrumb,
      [BreadcrumbItem.name]: BreadcrumbItem,
    },
    template: `
      <m-breadcrumb>
        <m-breadcrumb-item>
          Page 1
          <template #separator>\</template>
        </m-breadcrumb-item>
        <m-breadcrumb-item>Page 2</m-breadcrumb-item>
        <m-breadcrumb-item>Page 3</m-breadcrumb-item>
      </m-breadcrumb>
    `,
  })

  await delay(20)
  expect(wrapper.html()).toMatchSnapshot()
})
