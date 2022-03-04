<template>
  <m-space direction="column">
    <m-input placeholder="What is your name?" v-model="text" />
    <m-input type="password" placeholder="What is your name?" v-model="password" />
    <m-input type="number" placeholder="What is your name?" v-model="number" />
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
    text: '',
    password: '',
    number: '',
  }),
}
</script>
