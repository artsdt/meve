<template>
  <m-space direction="column" size="large">
    <m-time-picker value-format="HH ^ mm ^ ss" placeholder="Please pick time" v-model="value" />
    <div>Value: {{ value }}</div>
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
