<template>
  <m-space direction="column">
    <m-auto-complete
      ref="auto"
      placeholder="What is your email?"
      :options="options"
      v-model="value"
      :rules="[(v) => (v && v.length > 6) || '长度必须大于6']"
    />
    <m-auto-complete
      placeholder="What is your email?"
      textarea
      :options="textareaOptions"
      v-model="text"
      :rules="[(v) => (v && v.length > 12) || '长度必须大于12']"
    />
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
    text: '',
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

    textareaOptions() {
      return ['@qq.com', '@163.com', '@outlook.com'].map((suffix) => {
        const prefix = this.text.split('@')[0]
        return {
          label: prefix + suffix,
          value: prefix + suffix,
        }
      })
    },
  },
}
</script>
