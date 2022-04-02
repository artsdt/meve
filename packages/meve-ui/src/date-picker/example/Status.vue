<template>
  <m-space direction="column">
    <m-date-picker placeholder="Please pick date" disabled v-model="value" />
    <m-date-picker placeholder="Please pick date" readonly v-model="value" />
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
