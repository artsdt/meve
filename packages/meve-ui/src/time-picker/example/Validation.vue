<template>
  <m-time-picker
    placeholder="Please pick time"
    :rules="[(v) => (v && v.startsWith('10:')) || 'You must pick 10 hour']"
    v-model="value"
  />
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
}
</script>
