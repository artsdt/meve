<template>
  <m-space direction="column">
    <m-input placeholder="What is your name?" readonly v-model="value" />
    <m-input placeholder="What is your name?" textarea readonly v-model="value" />
    <m-input placeholder="What is your name?" disabled v-model="value" />
    <m-input placeholder="What is your name?" textarea disabled v-model="value" />
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
}
</script>
