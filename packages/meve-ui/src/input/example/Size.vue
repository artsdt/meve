<template>
  <m-space direction="column" size="large">
    <m-input label="NORMAL" placeholder="What is your name?" v-model="value" />
    <m-input label="SMALL" placeholder="What is your name?" size="small" v-model="value" />
    <m-input label="MINI" placeholder="What is your name?" size="mini" v-model="value" />
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
