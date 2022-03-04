import Row from '..'
import Col from '../../col'
import { mount } from '@vue/test-utils'

test('test col span', () => {
  const wrapper = mount({
    components: {
      [Row.name]: Row,
      [Col.name]: Col,
    },
    template: `
      <m-row>
        <m-col :span="8">span: 8</m-col>
        <m-col :span="8">span: 8</m-col>
        <m-col :span="8">span: 8</m-col>
      </m-row>
    `,
  })

  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})

test('test row gutter', () => {
  const wrapper = mount({
    components: {
      [Row.name]: Row,
      [Col.name]: Col,
    },
    template: `
      <m-row :gutter="10">
        <m-col :span="8">span: 8</m-col>
        <m-col :span="8">span: 8</m-col>
        <m-col :span="8">span: 8</m-col>
      </m-row>
    `,
  })

  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})

test('test row offset', () => {
  const wrapper = mount({
    components: {
      [Row.name]: Row,
      [Col.name]: Col,
    },
    template: `
      <m-row>
        <m-col :span="6">span: 6</m-col>
        <m-col :offset="2" :span="8">offset: 2 span: 8</m-col>
        <m-col :span="8">span: 8</m-col>
      </m-row>
    `,
  })

  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})

test('test row responsive', () => {
  const wrapper = mount({
    components: {
      [Row.name]: Row,
      [Col.name]: Col,
    },
    template: `
      <m-row>
        <m-col :xs="24" :sm="12" :md="8" :lg="4" :xl="2">Responsive</m-col>
      </m-row>
    `,
  })

  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})

test('test row responsive pass object', () => {
  const wrapper = mount({
    components: {
      [Row.name]: Row,
      [Col.name]: Col,
    },
    template: `
      <m-row>
        <m-col
          :xs="{ span: 22, offset: 2 }"
          :sm="{ span: 10, offset: 2 }"
          :md="{ span: 6, offset: 2 }"
          :lg="{ span: 3, offset: 1 }"
          :xl="{ span: 2 }"
        >
          Responsive
        </m-col>
      </m-row>
    `,
  })

  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})

test('test row click event', async () => {
  const wrapper = mount(Row)
  await wrapper.trigger('click')

  expect(wrapper.emitted().click.length).toBe(1)
})

test('test col click event', async () => {
  const wrapper = mount(Col)
  await wrapper.trigger('click')

  expect(wrapper.emitted().click.length).toBe(1)
})
