<template>
  <m-space direction="column">
    <m-time-picker placeholder="Please pick time" disabled v-model="value" />
    <m-time-picker placeholder="Please pick time" readonly v-model="value" />
  </m-space>
</template>

<script>
import TimePicker from '..'
import Space from '../../space'

export default {
  components: {
    [TimePicker.name]: TimePicker,
    [Space.name]: Space,
  },
  data: () => ({
    value: undefined,
  }),
}
</script>
