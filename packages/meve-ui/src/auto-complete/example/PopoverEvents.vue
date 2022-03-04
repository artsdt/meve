<template>
  <m-auto-complete
    placeholder="What is your email?"
    :options="options"
    v-model="value"
    @open="Message('open')"
    @opened="Message('opened')"
    @close="Message('close')"
    @closed="Message('closed')"
  />
</template>

<script>
import Input from '..'
import Message from '../../message'

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
  methods: {
    Message,
  },
}
</script>
