<template>
  <m-space direction="column">
    <m-input
      placeholder="What is your name?"
      v-model="value"
      :rules="[(v) => (v && v.length > 6) || '长度必须大于6']"
    />
    <m-input
      placeholder="What is your name?"
      textarea
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
}
</script>
