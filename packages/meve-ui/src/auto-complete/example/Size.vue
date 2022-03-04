<template>
  <m-space direction="column" size="large">
    <m-auto-complete label="NORMAL" placeholder="What is your email?" :options="options" v-model="value" />
    <m-auto-complete label="SMALL" placeholder="What is your email?" size="small" :options="options" v-model="value" />
    <m-auto-complete label="MINI" placeholder="What is your email?" size="mini" :options="options" v-model="value" />
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
