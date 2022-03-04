<template>
  <m-input placeholder="What is your name?" textarea v-model="value" />
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
