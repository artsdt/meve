<template>
  <m-time-picker placeholder="Please pick time" :custom-disabled="customDisabled" v-model="value" />
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
    customDisabled(column, time) {
      return column === 0 && time % 2
    },
  },
}
</script>
