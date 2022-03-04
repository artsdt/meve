<template>
  <m-space direction="column" size="large">
    <m-input placeholder="What is your name?" label="YOUR NAME" v-model="name" />
    <m-input placeholder="What is your gender?" label="YOUR GENDER" v-model="gender" />
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
    name: '',
    gender: '',
  }),
}
</script>
