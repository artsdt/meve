<template>
  <m-date-picker placeholder="please pick date" v-model="value" />
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
