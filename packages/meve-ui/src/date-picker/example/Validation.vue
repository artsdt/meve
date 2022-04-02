<template>
  <m-date-picker
    placeholder="Please pick date"
    :rules="[(v) => (v && v.endsWith('01')) || 'You must pick date: 01']"
    v-model="value"
  />
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
}
</script>
