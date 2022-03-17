<template>
  <m-calendar :custom-disabled="customDisabled" v-model="value" />
</template>

<script>
import Calendar from '..'

export default {
  components: {
    [Calendar.name]: Calendar,
  },
  data: () => ({
    value: undefined,
  }),
  methods: {
    customDisabled(date) {
      return date.date() % 2
    },
  },
}
</script>
