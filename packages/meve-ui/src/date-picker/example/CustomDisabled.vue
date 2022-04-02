<template>
  <m-date-picker placeholder="Please pick date" :custom-disabled="customDisabled" v-model="value" />
</template>

<script>
import DatePicker from '..'

export default {
  components: {
    [DatePicker.name]: DatePicker,
  },
  data: () => ({
    value: undefined,
  }),
  methods: {
    customDisabled(date) {
      return date.date() % 2 === 0
    },
  },
}
</script>
