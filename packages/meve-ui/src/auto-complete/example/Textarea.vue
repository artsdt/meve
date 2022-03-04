<template>
  <m-auto-complete placeholder="What is your email?" textarea :options="options" v-model="value" />
</template>

<script>
import Input from '..'

export default {
  components: {
    [Input.name]: Input,
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
