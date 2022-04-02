<template>
  <m-date-picker range placeholder="please pick date" v-model="value" />
</template>

<script>
import DatePicker from '..'

export default {
  components: {
    [DatePicker.name]: DatePicker,
  },
  data: () => ({
    value: [],
  }),
}
</script>
