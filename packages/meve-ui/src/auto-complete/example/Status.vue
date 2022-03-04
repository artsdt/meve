<template>
  <m-space direction="column">
    <m-auto-complete placeholder="What is your email?" readonly v-model="value" />
    <m-auto-complete placeholder="What is your email?" textarea readonly v-model="value" />
    <m-auto-complete placeholder="What is your email?" disabled v-model="value" />
    <m-auto-complete placeholder="What is your email?" textarea disabled v-model="value" />
  </m-space>
</template>

<script>
import Input from '..'
import Space from '../../space'

export default {
  components: {
    [Input.name]: Input,
    [Space.name]: Space,
  },
  data: () => ({
    value: '',
  }),
  computed: {
    options() {
      return ['@qq.com', '@163.com', '@outlook.com'].map((suffix) => {
        const prefix = this.value.split('@')[0]
        return {
          label: prefix + suffix,
          value: prefix + suffix,
        }
      })
    },
  },
}
</script>
