<template>
  <m-time-picker @close="log" placeholder="Please pick time" v-model="value" />
</template>

<script>
import TimePicker from '..'

export default {
  components: {
    [TimePicker.name]: TimePicker,
  },
  data: () => ({
    value: undefined,
  }),
  methods: {
    log() {
      console.log(12)
    },
  },
}
</script>
