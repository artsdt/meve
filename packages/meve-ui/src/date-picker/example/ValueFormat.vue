<template>
  <m-space direction="column" size="large">
    <m-date-picker value-format="YYYY/MM/DD" placeholder="Please pick date" v-model="value" />
    <div>Value: {{ value }}</div>
  </m-space>
</template>

<script>
import DatePicker from '..'
import Space from '../../space'

export default {
  components: {
    [DatePicker.name]: DatePicker,
    [Space.name]: Space,
  },
  data: () => ({
    value: undefined,
  }),
}
</script>
