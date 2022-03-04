<template>
  <m-input placeholder="What is your name?" :maxlength="10" v-model="value" />
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
}
</script>
