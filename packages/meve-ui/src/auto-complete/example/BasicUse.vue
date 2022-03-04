<template>
  <m-auto-complete placeholder="What is your email?" :options="options" v-model="value" />
</template>

<script>
import AutoComplete from '..'

export default {
  components: {
    [AutoComplete.name]: AutoComplete,
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
